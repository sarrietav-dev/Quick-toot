import React from 'react';
import '../sass/main.scss';

export const TextBox = (): JSX.Element => {
  return (
    <textarea
      placeholder="What's on your mind?"
      name="textarea"
      className="compose-box"
    ></textarea>
  );
};
