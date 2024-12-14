/* eslint-disable no-unused-vars */
import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    const keyword = event.target.value;
    this.setState({ keyword });
    this.props.searchNote(keyword);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan ..."
            value={this.state.keyword}
            onChange={this.onSearchChange}
          />
        </div>
      </div>
    );
  }
}

export default NoteHeader;
