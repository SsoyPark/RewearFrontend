import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      userType: null,
      accessToken: null,
      refreshToken: null,
      login: (accessToken, refreshToken, userType) => {
        set({
          isAuthenticated: true,
          accessToken: accessToken,
          refreshToken: refreshToken,
          userType: userType,
        });
        console.log("complete");
      },
      logout: () =>
        set({
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
          userType: null,
        }),
    }),
    {
      name: "auth-storage", // 로컬 스토리지에 저장될 키 이름
    //   getStorage: () => localStorage, // (옵션) 기본값은 로컬 스토리지
    }
  )
);

export default useAuthStore;
