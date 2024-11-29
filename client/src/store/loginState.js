import { create } from "zustand";

const loginState = create((set, get) => ({
    isAuth: false,
    isLoadingAuth: true,
    setIsAuth: (isAuth) => set((state) => ({ isAuth: isAuth})),
    setIsLoadingAuth: (isLoadingAuth) => set((state) => ({ isLoadingAuth: isLoadingAuth})),
}))

export default loginState