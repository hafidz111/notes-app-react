/* eslint-disable no-unused-vars */
import React from "react";

function NoteItemAction({ id, condition, onActive, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => {
          if (condition) {
            onArchive(id);
          } else {
            onActive(id);
          }
        }}
      >
        {condition ? "Arsipkan" : "Pindahkan"}
      </button>
    </div>
  );
}

export default NoteItemAction;
