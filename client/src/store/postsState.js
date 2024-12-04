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
    addPost: (posts) => set((state) => ({ posts: [...state.posts, posts]})),
    deletePost: (id) => set((state) => ({ posts: state.posts.filter(p => p._id !== id)})),

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
        state.addPost(response.data)
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
    
    deletePosts: async (id) => {
      try {
        const state = get()
        const response = await TaskService.deleteTasks(id);
        state.deletePost(id)
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
}))

export default postsState