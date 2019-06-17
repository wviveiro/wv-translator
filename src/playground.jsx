import React from 'react';
import createDictionary from './lib';
import './playgrond.scss';
import './styles/index.scss';

const dictionary = [
  {from: 'Hello World', to: '你好，世界'}
];

const Translator = createDictionary(dictionary);


const Component = () => {
  return (
      <div>
          <Translator value="Hello World" />, testing <Translator value="Translator" />
      </div>
  );
}

function Playground() {
  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>Here you can play with you component before publishing it.</p>
      <Translator value="Hello World" />
    </div>
  );
}

export default Component;
