// a bit of ninja code: IIFE to play with a closure :D
const generate = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();


function poll() {
  if (generate() < 5) {
    setTimeout(poll, 5000);
    console.log('Waiting for 5');
  } else {
    console.log('finished');
  }
}

poll();

function updateStatus() {
  const elementP = document.querySelector('p');
  const header = document.querySelector('h1');

  header.innerText = 'Backend ready';
  elementP.innerText = 'Job finished';
}

const website = 'http://localhost:3000/counter/';

async function fetchCounter() {
  const response = await fetch(website);
  const jsonResponse = await response.json();
  console.log(response);
  console.log(jsonResponse);
  const counter = jsonResponse.counter;
  return counter;
}

async function poll2() {
  const counter = await fetchCounter();

  if (counter < 10) {
    console.log('poll2 not ready');
    setTimeout(poll2, 2000);
  } else {
    updateStatus();
    console.log('ready');
  }
}

// poll the backend
(async () => { await poll2() })();
//await poll2();

// in the meantime we can do what we want
// await are handled by the microtask queue
const header = document.querySelector('h1');
header.innerText = 'Waiting for the backend to be ready';
console.log('waiting ...');


/*


https://davidwalsh.name/javascript-polling

https://stackoverflow.com/questions/56411368/how-do-use-javascript-async-await-as-an-alternative-to-polling-for-a-statechange

https://dev.to/jakubkoci/polling-with-async-await-25p4

*/