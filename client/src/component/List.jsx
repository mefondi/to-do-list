import React from "react";
import ListItem from "./ListItem.jsx";
import postsState from "../store/postsState.js";

export default function List() {
  const {filter, posts, sorted} = postsState();

  const filteredPosts = posts.filter((post) => {
    const matchesTitle = post.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesStatus = filter.status ? post.status === filter.status : true;
    return matchesTitle && matchesStatus;
  });
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sorted.direction === "asc") {
      return a.date - b.date;
    } else {
      return b.date - a.date;
    }
  });

  return (
    <div className="container">
      {sortedPosts.length === 0 ? (
        <h1 className="text-center mb-4 mt-4">Нет доступных записей</h1>
      ) : (
        <table className="table mb-4">
          <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Название</th>
              <th scope="col">Статус</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {sortedPosts.map((post) => (
              <ListItem key={post.date} post={post} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
