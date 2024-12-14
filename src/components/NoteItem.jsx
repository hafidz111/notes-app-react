/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils";

function NoteItem({
  title,
  date,
  body,
  id,
  condition,
  onActive,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        date={showFormattedDate(date)}
        body={body}
      />
      <NoteItemAction
        id={id}
        condition={condition}
        onActive={onActive}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
