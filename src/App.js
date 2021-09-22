import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { global_env, _eval, } from './nhj/src/core';
import { parse } from './nhj/src/parse.js';
import NavigationBar from './components/NavigationBar';
import * as _ from 'lodash';

function App() {
  const [code, setCode] = useState(() => (
    window.localStorage.getItem('code') ||
    '; type your code...'
  ));
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
    setOutput([]);
    try {
      parse(code.replace(/\r\n/gi, '\n')).forEach(e => _eval(e));
    }
    catch (e) {
      AddToOutput(e);
      console.error(e);
    }
  }

  function onSave() {
    localStorage.setItem('code', code);
  }

  const wrapperRef = useRef(null);
  const [monacoH, setMonacoH] = useState(0);
  const [monacoW, setMonacoW] = useState(0);

  const fitSize = function () {
    setInterval(() => {
      setMonacoH(wrapperRef.current.offsetHeight);
      setMonacoW(wrapperRef.current.offsetWidth);
    }, 0);
  };

  window.onresize = () => {
    fitSize();
  }

  useEffect(() => {
    fitSize();
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <NavigationBar onExec={onExec} onSave={onSave}/>
      <div style={{
          flex: 1,
        }}
        ref={wrapperRef}
      >
        <div style={{
          position: 'absolute',
        }}>
          <MonacoEditor
            width={String(monacoW)+'px'}
            height={String(monacoH)+'px'}
            language="clojure"
            theme="vs-dark"
            value={code}
            options={{
              selectOnLineNumbers: true,
            }}
            onChange={onChange}
          />
        </div>
      </div>
      <FakeHr />
      <div id="output" style={{
        background: 'rgb(29, 29, 29)',
        color: 'white',
        width: '100%',
        height: '200px',
        fontFamily: 'monospace',
        overflowY: 'auto',
      }}>
        {output.map(e => (
          <div key={e}>{e}</div>
        ))}
      </div>
    </div>
  );
}

const FakeHr = () => (
  <div style={{
    background: '#616161',
    width: '100%',
    height: '2px',
  }} />
)

export default App;
