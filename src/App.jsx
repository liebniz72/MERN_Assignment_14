import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    alert(text);
  };

  return (
    <div className="App">
      <Header title="My Simple React App" />
      <Content
        text={text}
        setText={setText}
        handleButtonClick={handleButtonClick}
      />
      <Footer />
    </div>
  );
}

export default App;
