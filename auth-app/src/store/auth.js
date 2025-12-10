import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (setValue) => ({
      isAuthenticated: false,
      user: null,
      login: (user) => setValue({ isAuthenticated: true, user }),
      logout: () => setValue({ isAuthenticated: false, user: null }),
      fetchUser: async () => {
        //fetch logic
      },
    }),

    {
      name: "auth-storage",
    }
  )
);

//export
export default useAuthStore;
