import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active: note } = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const handleSave = () => {
    //   console.log(note)
    dispatch(startSaveNote(note));
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <div>
        <button className="btn">Picture</button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
