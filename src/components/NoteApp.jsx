/* eslint-disable no-unused-vars */
import React from "react";
import { getInitialData } from "../utils/index";
import NoteList from "./NoteList";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prev) => {
      const newNotes = [
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
        ...prev.notes,
      ];
      return {
        notes: newNotes,
        filteredNotes: newNotes,
      };
    });
  }

  onArchiveHandler(id) {
    this.setState((prev) => {
      const updatedNotes = prev.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: true,
          };
        }
        return note;
      });

      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  onActiveHandler(id) {
    this.setState((prev) => {
      const updatedNotes = prev.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: false,
          };
        }
        return note;
      });

      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  onDeleteHandler(id) {
    this.setState((prev) => {
      const updatedNotes = prev.notes.filter((note) => note.id !== id);
      return {
        notes: updatedNotes,
        filteredNotes: updatedNotes,
      };
    });
  }

  onSearchHandler(keyword) {
    if (keyword === "") {
      this.setState((prev) => {
        return {
          filteredNotes: prev.notes,
        };
      });
    } else {
      this.setState((prev) => {
        return {
          filteredNotes: prev.notes.filter((note) =>
            note.title.toLowerCase().includes(keyword.toLowerCase())
          ),
        };
      });
    }
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader searchNote={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={this.state.filteredNotes.filter((note) => !note.archived)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={this.state.filteredNotes.filter((note) => note.archived)}
            onDelete={this.onDeleteHandler}
            onActive={this.onActiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
