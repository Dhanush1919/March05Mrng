// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var i=1;
var fact=1;
var n=5;
for(i=n;i>=1;i--)
{
  fact=fact*i;
}
console.log(fact);
