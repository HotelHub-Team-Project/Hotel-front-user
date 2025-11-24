import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Context 생성
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로그인 상태 여부 (boolean)
  const isAuthed = !!user;

  // 로그인 처리 (토큰, 유저정보 저장)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    // 토큰이 있다면 토큰도 저장
    if (userData.token) {
      localStorage.setItem("accessToken", userData.token);
    }
  };

  // 로그아웃 처리
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  // 새로고침 후에도 로그인 유지
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        // ProtectedRoute 등에서 isAuthenticated를 찾으므로 매핑해줍니다.
        isAuthenticated: isAuthed, 
        isAuthed,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};