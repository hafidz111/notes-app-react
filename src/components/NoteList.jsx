/* eslint-disable no-unused-vars */
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onActive }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            date={note.createdAt}
            body={note.body}
            id={note.id}
            condition={!note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            onActive={onActive}
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteList;
