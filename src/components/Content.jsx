import React from 'react';

function Content({ text, setText, handleButtonClick }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{text}</p>
    </div>
  );
}

export default Content;
