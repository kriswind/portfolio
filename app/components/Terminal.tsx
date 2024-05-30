"use client"

import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { Help, About, Buttons } from './TerminalCommands';

const asciiArt = `
 ____ _          _     _              _               
 / ___| |__  _ __(_)___| |_ ___  _ __ | |__   ___ _ __ 
| |   | '_ \\| '__| / __| __/ _ \\| '_ \\| '_ \\ / _ \\ '__|
| |___| | | | |  | \\__ \\ || (_) | |_) | | | |  __/ |   
 \\____|_| |_|_|  |_|___/\\__\\___/| .__/|_| |_|\\___|_|   
                                |_|                    
__        ___           _                _     
\\ \\      / (_)_ __   __| |___  ___  _ __( )___ 
 \\ \\ /\\ / /| | '_ \\ / _\` / __|/ _ \\| '__|// __|
  \\ V  V / | | | | | (_| \\__ \\ (_) | |    \\__ \\
   \\_/\\_/  |_|_| |_|\\__,_|___/\\___/|_|    |___/
                                               
 ____            _    __       _ _       
|  _ \\ ___  _ __| |_ / _| ___ | (_) ___  
| |_) / _ \\| '__| __| |_ / _ \\| | |/ _ \\ 
|  __/ (_) | |  | |_|  _| (_) | | | (_) |
|_|   \\___/|_|   \\__|_|  \\___/|_|_|\\___/ 
`;


const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>{ asciiArt + '\nPlease use the \'help\' command for a list of available commands.'}</TerminalOutput>
  ]);

  const handleInput = (input: string) => {
    if (input.toLowerCase() === 'help') {
      setTerminalLineData((prevState) => [
        ...prevState, 
        <TerminalOutput key={prevState.length}>{ Help() }</TerminalOutput>
      ]);
    } else if (input.toLowerCase() === 'about') {
      setTerminalLineData((prevState) => [
        ...prevState, 
        <TerminalOutput key={prevState.length}>{ About() }</TerminalOutput>
      ]);
    } else if (input.toLowerCase() === 'buttons') {
      setTerminalLineData((prevState) => [
        ...prevState, 
        <TerminalOutput key={prevState.length}>{ Buttons() }</TerminalOutput>
      ]);
    } else {
      setTerminalLineData((prevState) => [
        ...prevState, 
        <TerminalOutput key={prevState.length}>{input}</TerminalOutput>
      ]);
    }
  }

  const handleRedButton = () => {
    setTerminalLineData((prevState) => [
      <TerminalOutput key={prevState.length}></TerminalOutput>
    ]);
  }

  const handleGreenButton = () => {
    setTerminalLineData((prevState) => [
      <TerminalOutput key={prevState.length}>
        {'My Socials:\n[Github](https://www.github.com/kriswind)'}
      </TerminalOutput>
    ]);
  }

  return (
    <div className="container">
      <Terminal 
        name='Christopher Windsor&apos;s Terminal' 
        colorMode={ ColorMode.Dark }  
        onInput={handleInput}
        height='100vh'
        redBtnCallback={handleRedButton}
        yellowBtnCallback={() => handleInput('help')}
        greenBtnCallback={handleGreenButton}
      >
        { terminalLineData }
      </Terminal>
    </div>
  )
};

export default TerminalController;