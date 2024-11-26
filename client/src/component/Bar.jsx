import React from "react";
import AddTask from "./AddTask.jsx";
export default function Filter() {
  return (
    <div class="d-flex justify-content-end align-items-center mb-4 pt-2">
      <button className="btn btn-success ms-3 me-auto" onClick={<AddTask/>}>Add new</button>
      <p class="small mb-0 me-2 text-muted">Filter</p>
      <select>
        <option value="1">All</option>
        <option value="2">Completed</option>
        <option value="3">Active</option>
        <option value="4">Has due date</option>
      </select>
      <p class="small mb-0 ms-4 me-2 text-muted">Sort</p>
      <select className="me-3">
        <option value="1">Added date</option>
        <option value="2">Due date</option>
      </select>
    </div>
  );
}
