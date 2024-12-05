import React from "react";
import modalState from "../store/modalState.js";
import postsState from "../store/postsState.js";

export default function Filter() {
  const {setVisibleAdd, setWindowMode} = modalState();
  const { filter, setFilter, sorted, setSort} = postsState();

  const addPost = () =>{
    setWindowMode('add')
    setVisibleAdd(true)
  }

  return (
    <div className="d-flex justify-content-end align-items-center mb-4 pt-2 mt-2 container">
      <button className="btn btn-success ms-3 me-auto" onClick={() => addPost(true)} >
        Добавить
      </button>
      <input
        type="text"
        value={filter.title}
        onChange={(e) => setFilter({ title: e.target.value })}
        className="form-control-sm me-2 "
        placeholder="Поиск"
      />
      <p className="small mb-0 me-2 text-muted">Фильтр</p>
      <select value={filter.status} onChange={(e) => setFilter({ status: e.target.value })} >
        <option value="">Все</option>
        <option value="Завершена">Завершенные</option>
        <option value="Активна">Активные</option>
      </select>
      <p className="small mb-0 ms-2 me-2 text-muted">Сортировка</p>
      <select className="me-3" value={sorted.direction} onChange={(e) => setSort({ direction: e.target.value })}>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
}
