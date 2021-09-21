import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import MonacoEditor, { monaco } from 'react-monaco-editor';
import { global_env, _eval, schemestr } from './nhj/src/core';
import { parse } from './nhj/src/parse.js';


function App() {
  const [code, setCode] = useState('; type your code...');
  const [output, setOutput] = useState([]);

  global_env.scope.print = (...args) => {
    AddToOutput(args.map(String).join(' '));
  }

  function AddToOutput(text) {
    setOutput(o => [...o, text]);
  }


  function onChange(newValue, e) {
    setCode(newValue);
  }

  function onExec() {
    setOutput('');
    try {
      parse(code.replace(/\r\n/gi, '\n')).forEach(e => _eval(e));
    }
    catch (e) {
      AddToOutput(e);
      console.error(e);
    }
  }

  return (
    <div>
      <MonacoEditor
        width="800"
        height="600"
        language="clojure"
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true,
        }}
        onChange={onChange}
      />
      <div>
        <button onClick={onExec}>exec</button>
      </div>
      <div id="output" style={{
        background: 'rgb(29, 29, 29)',
        color: 'white',
        width: '800px',
        height: '100px',
        fontFamily: 'monospace',
        overflowY: 'auto',
      }}>
        {output.map(e => (
          <div>{e}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
