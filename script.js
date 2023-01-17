const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact';
  }
});

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = 'Lisbon is the capital of Portugal';

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log('Upvotes:', totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt('25.555bbb'));
*/

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return 'Impossible year';
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

let votesInteresting = 20;
let votesMindblowing = 0;
console.log(votesInteresting === votesMindblowing);
if (votesInteresting === votesMindblowing) {
  alert('This fact is equally interesting and mindblowing');
} else if (votesInteresting > votesMindblowing) {
  console.log('Interesting fact!');
} else if (votesInteresting < votesMindblowing) {
  console.log('Mindblowing fact!!!');
}

// Falsy values: 0, '', null, undefined
// truthy values: everything else ...
if (votesMindblowing) {
  console.log('MINDBLOWING FACT!!!');
} else {
  console.log('Not so special ...');
}
