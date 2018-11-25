function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const lis = document.querySelectorAll('#grand-node div');
  for (var i = 0; i < lis.length; i++) {
    if (i + 1 === lis.length) {
      return lis[i];
    }
  }
}

function increaseRankBy(n) {
  const parent = document.querySelector('#app .ranked-list');
  const parent2 = document.querySelector('#app .ranked-list .ranked-list');
  const test = parent.getElementsByTagName('li');
  const test2 = parent2.getElementsByTagName('li');
  const child = parent.children[1];
  const child2 = parent.children[2];
  console.log(test.length);
  console.log(test2.length);
  for (var j = 0; j < document.querySelectorAll('.ranked-list').length; j++) {
    
  }
}