import { create } from "zustand";

const modalState = create((set, get) => ({
    visibleAdd: false,
    visibleView: false,
    windowMode: 'add',
    editPost:{title: '', description: '', status: '', id :''},
    viewPost:{},
    setVisibleAdd: (visibleAdd) => set((state) => ({ visibleAdd: visibleAdd })),
    setVisibleView: (visibleView) => set((state) => ({ visibleView: visibleView })),
    setWindowMode: (Mode) => set((state) => ({ windowMode: Mode })),
    setEditPost: (title, description, status, id) => set((state) => ({ editPost: {title, description, status, id} })),
    setViewPost: (viewPost) => set((state) => ({ viewPost: viewPost })),
}))

export default modalState