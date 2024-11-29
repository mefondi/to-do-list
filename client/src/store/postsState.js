import { create } from "zustand";
import axios from 'axios'

const postsState = create((set, get) => ({
    posts: [
        {title: 'asd', description:'Active', date: 1, status:'Активна'}, 
        {title: 'asd', description:'completed', date: 2, status:'Завершена'}, 
        {title: 'aasas', description:'Active', date: 3, status:'Активна'}, 
        {title: 'уцй', description:'completed', date: 4, status:'Завершена'}, 
        {title: 'йуц', description:'Active', date: 5, status:'Активна'}, 
      ],
    filter: {title: "", status: ""},
    sorted: {field: "date", direction: "desc"},
    isLoading: false,
    error: null,

    setSort: (newSort) => set((state) => ({ sorted: { ...state.sorted, ...newSort } })),
    setFilter: (newFilter) => set((state) => ({ filter: { ...state.filter, ...newFilter } })),
    addPosts: (posts) => set((state) => ({ posts: [...state.posts, posts]})),
    deletePost: (date) => set((state) => ({ posts: state.posts.filter(p => p.date !== date)})),

    fetchPosts: async () => {
      set({ isLoading: true, error: null });
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        set({ posts: response.data, isLoading: false });
      } catch (error) {
        set({ error: error.message, isLoading: false });
      }
    },
}))

export default postsState