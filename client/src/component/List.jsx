import React from "react";

export default function List() {
  return (
    <div>
      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Buy groceries for next week</td>
            <td>In progress</td>
            <td>
              <button
                type="submit"
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                type="submit"
                className="btn btn-success ms-1"
              >
                Finished
              </button>
              <button
                type="submit"
                className="btn btn-warning ms-1"
              >
                Open
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
