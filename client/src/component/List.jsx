import React, { useEffect } from "react";
import ListItem from "./ListItem.jsx";
import {useSortedPosts} from "../hooks/usePosts.js";
import postsState from "../store/postsState.js";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default function List() {
  const sortedPosts = useSortedPosts() 
  const { fetchPosts, posts, isLoading } = postsState();

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container">
      {sortedPosts.length === 0 ? (
        <h1 className="text-center mb-4 mt-4">Нет доступных записей</h1>
      ) : ( isLoading ? (
          <div className="spinner-border" role="status"></div>
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
          <TransitionGroup component={null}>
              {sortedPosts.map((post) => 
                <CSSTransition key={post.date} timeout={500} classNames="post">
                <ListItem post={post} />
                </CSSTransition>
              )}
          </TransitionGroup>
            </tbody>
          </table>
        )
      )}
    </div>
  );
}
