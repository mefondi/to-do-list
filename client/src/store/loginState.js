import { create } from "zustand";

const loginState = create((set, get) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set((state) => ({ isAuth: isAuth})),
}))

export default loginState