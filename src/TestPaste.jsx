// src/TestPaste.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToPastes } from './redux/pasteSlice';

function TestPaste() {
  const dispatch = useDispatch();

  const handleCreatePaste = () => {
    const newPaste = {
      id: Date.now(),
      title: "Demo Paste",
      content: "This is a demo paste",
    };
    dispatch(addToPastes(newPaste));
  };

  return (
    <button onClick={handleCreatePaste}>
      Create Paste
    </button>
  );
}

export default TestPaste;
