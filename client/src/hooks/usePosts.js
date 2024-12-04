import { useMemo } from "react";
import postsState from "../store/postsState.js";

export const useFilteredPosts = () =>{
    const { filter, posts } = postsState();
    const filteredPosts = useMemo(() => 
    posts.filter((post) => {
      const matchesTitle = post.title.toLowerCase().includes(filter.title.toLowerCase());
      const matchesStatus = filter.status ? post.status === filter.status : true;
      return matchesTitle && matchesStatus;
    }), [posts, filter]);
    return filteredPosts
}

export const useSortedPosts = () => {
    const filteredPosts = useFilteredPosts();
    const { sorted } = postsState();
    const sortedPosts = useMemo(() =>
        [...filteredPosts].sort((a, b) => {
        if (sorted.direction === "asc") {
            return new Date(a.date) - new Date(b.date);
        } else {
            return new Date(b.date) - new Date(a.date);
        }
        }), [filteredPosts, sorted]);
    return sortedPosts;
    };