import printMe from './print.js';
import './style.css';
import {cube} from './math';

function component(){
    var element = document.createElement('div');
    element.innerHTML=cube(5);
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
let element = component();
const app=document.createElement('div');
element.appendChild(app);
document.body.appendChild(element);
if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}

