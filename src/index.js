// import printMe from './print';
// import { cube } from './math';
// import _ from 'lodash';


// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello webpack!', '5 cubed is equal to' + cube(5)]);

//   btn.innerHTML = 'click and check console 123'
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

// if (module.hot) {
//   console.log('能收到')
//   module.hot.accept('./print.js', function () {
//     console.log('收不到');
//     printMe();
//   })
// }

// async function getComponent() {
//   var element = document.createElement('div');
//   const _ = await import(/* webpackChunkName: "lodash"*/ 'lodash');
//   element.innerHTML = _.default.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>react webpack</div>, document.getElementById('root'))
