# beanexplorer-react 
React component for [BeanExplorer](https://github.com/DevelopmentOnTheEdge/beanexplorer) beans

[![Build Status](https://travis-ci.org/DevelopmentOnTheEdge/beanexplorer-react.svg?branch=master)](https://travis-ci.org/DevelopmentOnTheEdge/beanexplorer-react) [![Coverage Status](https://coveralls.io/repos/github/DevelopmentOnTheEdge/beanexplorer-react/badge.svg?branch=master)](https://coveralls.io/github/DevelopmentOnTheEdge/beanexplorer-react?branch=master)

### Used components:  
[react-select](https://github.com/JedWatson/react-select)  
[react-datetime](https://github.com/YouCanBookMe/react-datetime)

### Installation
```sh
$ npm install --save beanexplorer-react
```

### Usage
```js
import PropertySet from 'beanexplorer-react';

import 'react-datetime/css/react-datetime.css';
import 'react-select/dist/react-select.css';

```
```js
const fields = {
    "values": {
        "name": "",
    },
    "meta": {
        "/name": {"displayName": "Name"},
    },
    "order": [
        "/name",
    ]
};
```
```js
handleFieldChange(path, value) {}
```
```js
<PropertySet fields={fields} onChange={this.handleFieldChange}/>
```

### Demo
The demo is in the /docs directory and is also available on the [Github Pages](https://developmentontheedge.github.io/beanexplorer-react/)

### Development

Install dependencies:
```sh
$ npm install
```

Run the example app at http://localhost:8888
```sh
$ npm start
```

Run tests using [jest](https://github.com/facebook/jest):
```sh
$ npm test
```

Build example or minified library:
```sh
$ npm run example
$ npm run build
$ npm run build-min
```
