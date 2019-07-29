# Event Emitter

## Install

The library is available as an npm package. To install the package run:

```
npm install evemt
```

## Usage

```javascript
var core = require('evemt')

var evnt = new core.CoreObject()
function func1(param){
  console.log(param);
}
var func2=function (param){
  console.log(param);
}
evnt.on("message",func1,func2);
evnt.emit('message', 'Good Bye World')
```

