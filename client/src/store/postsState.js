import { create } from "zustand";

const modalState = create((set, get) => ({
    posts: [
        {title: 'asd', description:'Active', date: 1, status:'Активна'}, 
        {title: 'asd', description:'completed', date: 2, status:'Завершена'}, 
        {title: 'aasas', description:'Active', date: 3, status:'Активна'}, 
        {title: 'уцй', description:'completed', date: 4, status:'Завершена'}, 
        {title: 'йуц', description:'Active', date: 5, status:'Активна'}, 
      ],
    filter: {title: "", status: ""},
    sorted: {field: "date", direction: "desc"},

    setSort: (newSort) => set((state) => ({ sorted: { ...state.sorted, ...newSort } })),
    setFilter: (newFilter) => set((state) => ({ filter: { ...state.filter, ...newFilter } })),
    setPosts: (posts) => set((state) => ({ posts: [posts, ...state.posts]})),
    addPosts: (posts) => set((state) => ({ posts: [posts, ...state.posts]})),
    deletePost: (date) => set((state) => ({ posts: state.posts.filter(p => p.date !== date)})),
}))

export default modalState