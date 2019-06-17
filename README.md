# WV-TRANSLATOR

Simple React hook component to create multi language apps. The text and translation is set by yourself.

## How to Use
```javascript
import React from 'react';
import createDictionary from './lib';

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
```

translations not identified will be logged in `console.log` case the `NODE_ENV` is `development`.