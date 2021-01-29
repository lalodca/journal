import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const inputFile = useRef(null);

  const handleSave = () => {
    //   console.log(note)
    dispatch(startSaveNote(note));
  };

  const handlePictureUpload = () => {
    inputFile.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    file && dispatch(startUploading(file));
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>
      <input
        ref={inputFile}
        type="file"
        name="file"
        id="fileSelector"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button onClick={handlePictureUpload} className="btn">
          Picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
