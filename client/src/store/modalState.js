import { create } from "zustand";

const modalState = create((set, get) => ({
    visibleAdd: false,
    visibleView: false,
    modalPost:{},
    setVisibleAdd: (visibleAdd) => set((state) => ({ visibleAdd: visibleAdd })),
    setVisibleView: (visibleView) => set((state) => ({ visibleView: visibleView })),
    setModalPost: (modalPost) => set((state) => ({ modalPost: modalPost })),
}))

export default modalState