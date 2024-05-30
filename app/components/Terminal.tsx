"use client"

import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Hi I'm Chrisopher, welcome to my Portfolio Website!</TerminalOutput>
  ]);

  const handleInput = (input) => {
    setTerminalLineData(prevState => [...prevState, <TerminalOutput>{input}</TerminalOutput>]);
  }

  return (
    <div className="container">
      <Terminal 
        name='Christopher Windsor&apos;s Portfolio' 
        colorMode={ ColorMode.Dark }  
        onInput={handleInput}
        height='100vh'
      >
        { terminalLineData }
      </Terminal>
    </div>
  )
};

export default TerminalController;