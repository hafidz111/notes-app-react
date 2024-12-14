/* eslint-disable no-unused-vars */
import React from "react";
import autoBind from "react-autobind";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      characterCount: 50,
    };

    autoBind(this, 'onTitleChangeEventHandler', 'onBodyChangeEventHandler', 'onSubmitEventHandler');
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const maxChar = 50;
      return {
        title: event.target.value.slice(0, maxChar),
        characterCount: maxChar - event.target.value.slice(0, maxChar).length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.characterCount}
          </p>
          <input
            className="note-input__title"
            type="text"
            value={this.state.title}
            placeholder="Ini adalah judul ..."
            required
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            value={this.state.body}
            placeholder="Tulisakan catatanmu di sini ..."
            required
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
