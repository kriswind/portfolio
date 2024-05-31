"use client";

import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { Help, About, Buttons, Socials } from './TerminalCommands';
import { useRouter } from 'next/navigation';

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

const cats =
    " Art by Marcin Glinski\n" +
    "       ,\n" +
    "       \\`-._           __\n" +
    "        \\ \\ `-..____,.'  `\\`.\n" +
    "         :\\\`.         /    `\\`.\n" +
    "         :  )       :      : \\\n" +
    "          ;'        '   ;  |  :\n" +
    "          )..      .. .:.`;  :\n" +
    "         /::...  .:::...   \\` ;\n" +
    "         ; _ '    __        /:\\\\\n" +
    "         `:o>   /\\o_>      ;:. `.\n" +
    "      `-`.`.__ ;   __..--- /:.   \\\n" +
    "        === \\_/   ;=====_.':.     ;\n" +
    "         ,/'`--'...'\`--....        ;\n" +
    "              ;                    ;\n" +
    "            .'                      ;\n" +
    "          .'                        ;\n" +
    "        .'     ..     ,      .       ;\n" +
    "       :       ::..  /      ;::.     |\n" +
    "      /      \\`.;::.  |       ;:..    ;\n" +
    "     :         |:.   :       ;:.    ;\n" +
    "     :         ::     ;:..   |.    ;\n" +
    "      :       :;      :::....|     |\n" +
    "      /\\\\     ,/ \\\\      ;:::::;     ;\n" +
    "    .:. \\`:..|    :     ; '.--|     ;\n" +
    "   ::.  :''  `-.,,;     ;'   ;     ;\n" +
    "-'. _.'\\      / \\`;      \\,__:      \\\n" +
    "`---'    `----'   ;      /    \\,.,,,/\n" +
    "                   `----`              fsc\n";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TerminalController = (props = {}) => {
  const router = useRouter();
  //splash screen
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>{ asciiArt + '\nPlease type \'help\' for a list of available commands.'}</TerminalOutput>
  ]);

  // state for color mode
  const [colorMode, setColorMode] = useState(ColorMode.Dark);

  const handleInput = (input: string) => {
    // clears screen if input is handled for the first time
    if (terminalLineData.length === 1 && terminalLineData[0].props.children === asciiArt + '\nPlease use the \'help\' command for a list of available commands.') {
      setTerminalLineData([]);
    }
    if (input.toLowerCase() === 'help') {
      setTerminalLineData((prevState) => [
        ...prevState, 
        <TerminalOutput key={prevState.length}>{ Help() }</TerminalOutput>
      ]);
    } else if (input.toLowerCase() === 'clear') {
      setTerminalLineData((prevState) => [
        <TerminalOutput key={prevState.length}></TerminalOutput>
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
    } else if (input.toLowerCase() === 'socials') {
      setTerminalLineData((prevState) => [
        ...prevState,
        <TerminalOutput key={prevState.length}>{ Socials() }</TerminalOutput>
      ]);
    } else if (input.toLowerCase() === 'light') {
      //sets the ColorMode to light
      setColorMode(ColorMode.Light);
      setTerminalLineData((prevState) => [
        ...prevState
      ]);
    } else if (input.toLowerCase() === 'dark') {
      //sets the ColorMode to dark
      setColorMode(ColorMode.Dark);
      setTerminalLineData((prevState) => [
        ...prevState
      ]);
    } else if (input.toLowerCase() === 'blog') {
      // Links to /blog
      router.push('blog');
    } else if (input.toLowerCase() === 'ilovecats') {
      setTerminalLineData((prevState) => [
        ...prevState,
        <TerminalOutput key={prevState.length}>{cats}</TerminalOutput>
      ]);
    } else {
      setTerminalLineData((prevState) => [
        ...prevState, 
        <TerminalOutput key={prevState.length}>{input}</TerminalOutput>
      ]);
    }
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
    }}>
      <Terminal 
        name='Christopher Windsor&apos;s Terminal' 
        colorMode={ colorMode }  
        onInput={handleInput}
        height='100%'
        redBtnCallback={() => handleInput('clear')}
        yellowBtnCallback={() => handleInput('help')}
        greenBtnCallback={() => handleInput('socials')}
      >
        {terminalLineData}
      </Terminal>
    </div>
  )
};

export default TerminalController;