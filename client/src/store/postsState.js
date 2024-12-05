import { create } from "zustand";
import TaskService from "../services/TaskService";

const postsState = create((set, get) => ({
    posts: [],
    filter: {title: "", status: ""},
    sorted: {field: "date", direction: "desc"},
    isLoading: false,
    error: null,

    setSort: (newSort) => set((state) => ({ sorted: { ...state.sorted, ...newSort } })),
    setFilter: (newFilter) => set((state) => ({ filter: { ...state.filter, ...newFilter } })),

    fetchPosts: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await TaskService.fetchTasks();
        set({ posts: response.data, isLoading: false });
      } catch (error) {
        set({ error: error.message, isLoading: false });
        console.log(error.response?.data?.message)
      }
    },

    addPosts: async (title, description, date) => {
      try {
        const state = get()
        const response = await TaskService.createTasks(title, description, date);
        set({ posts: [...state.posts, response.data]});
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
    
    deletePosts: async (id) => {
      try {
        const state = get()
        const response = await TaskService.deleteTasks(id);
        set({ posts: state.posts.filter(p => p._id !== id)});
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },

    updatePosts: async (id, title, description, status) => {
      try {
        const state = get()
        const response = await TaskService.updateTasks(id, title, description, status);
        set({ posts: state.posts.map((post) => (post._id === id ? response.data : post))});
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
}))

export default postsState