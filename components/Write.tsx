import React, { Component, useEffect, useState } from "react";
import { EditorState } from "draft-js";
import Editor from "./Editor";

const Write = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  return (
    <div className="w-full">
      <Editor editorState={editorState} onChange={onEditorStateChange} />
    </div>
  );
};

export default Write;
