import { create } from "zustand";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {API_URL} from "../http";

const loginState = create((set, get) => ({
    user: {},
    isAuth: false,
    isLoadingAuth: true,
    setUser: (user) => set((state) => ({ user: user})),
    setIsAuth: (isAuth) => set((state) => ({ isAuth: isAuth})),
    setIsLoadingAuth: (isLoadingAuth) => set((state) => ({ isLoadingAuth: isLoadingAuth})),

    login: async (email, password) => {
        try {
          const response = await AuthService.login(email, password);
          console.log(response)
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('auth', 'true')
          set({ isAuth: true, user: response.data.user });
        } catch (error) {
            console.log(error.response?.data?.message)
        }
      },

    registration: async (email, password, name) => {
        try {
          const response = await AuthService.registration(email, password, name);
          console.log(response)
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('auth', 'true')
          set({ isAuth: true, user: response.data.user });
        } catch (error) {
            console.log(error.response?.data?.message)
        }
      },

    logout: async () => {
        try {
          const response = await AuthService.logout();
          localStorage.removeItem('token')
          localStorage.removeItem('auth')
          set({ isAuth: false, user: {} });
        } catch (error) {
            console.log(error.response?.data?.message)
        }
      },

      checkAuth: async () => {
        try {
          const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
          console.log(response);
          localStorage.setItem('token', response.data.accessToken);
          set({ isAuth: true, user: response.data.user });
        } catch (error) {
            console.log(error.response?.data?.message)
        }
      },
}))

export default loginState