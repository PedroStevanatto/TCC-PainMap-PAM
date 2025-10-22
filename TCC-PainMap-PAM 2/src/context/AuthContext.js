import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../services/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user);
        loadProfile(data.session.user.id);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        loadProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function loadProfile(user_id) {
    const { data } = await supabase.from("profiles").select("*").eq("user_id", user_id).single();
    if (data) setProfile(data);
  }

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setUser(data.user);

    const { data: profileData } = await supabase.from("profiles").select("*").eq("user_id", data.user.id).single();
    if (!profileData) {
      const { data: newProfile } = await supabase.from("profiles").insert({
        user_id: data.user.id,
        name: data.user.user_metadata?.name || "Usuário",
        avatar_url: null,
        status: "Indefinida",
      }).select().single();
      setProfile(newProfile);
    } else {
      setProfile(profileData);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }

  async function emailJaExiste(email) {
    const { data, error } = await supabase.rpc("check_email_exists", { p_email: email });
    if (error) throw error;
    return data;
  }

  async function register(email, password, name) {
    const existe = await emailJaExiste(email);
    if (existe) throw new Error("Este e-mail já está cadastrado.");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) throw error;
    return data.user;
  }

  async function updateProfile(name, avatar_url, password) {
    const currentUser = (await supabase.auth.getUser()).data.user;
    if (!currentUser) throw new Error("Usuário não autenticado");

    if (name || avatar_url) {
      const updates = {};
      if (name) updates.name = name;
      if (avatar_url) updates.avatar_url = avatar_url;

      const { error } = await supabase.from("profiles").update(updates).eq("user_id", currentUser.id);
      if (error) throw error;

      await loadProfile(currentUser.id);
    }

    if (password) {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
    }
  }

  async function updateStatus(status) {
    const { error } = await supabase.from("profiles").update({ status }).eq("user_id", user.id);
    if (error) throw error;
    await loadProfile(user.id);
  }

  return (
    <AuthContext.Provider value={{ user, profile, login, logout, register, updateProfile, updateStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
