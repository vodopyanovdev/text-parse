import React, { useRef, useState } from 'react';
import { textParse } from '../utils/textParse';

export const TextArea = () => {
  const refTextArea = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  const handleTextArea = () => {
    setText(refTextArea.current!.value);
  };

  const handleClear = () => {
    setText('');
  };

  const handleUpload = () => {
    textParse(
      { house: ['one', 'two'], entity: ['Houses'], entity2: ['been'] },
      'Houses by number one and two has been builded'
    );
  };

  return (
    <>
      <textarea
        ref={refTextArea}
        value={text}
        onChange={handleTextArea}
      ></textarea>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleUpload}>Upload text</button>
    </>
  );
};
