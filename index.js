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
  const parent = document.getElementsByClassName('ranked-list')[1];
  const parent2 = document.querySelectorAll('.ranked-list li');
  console.log(parent2.length);
  const child = parent.children[1];
  const child2 = parent.children[2];
  for (var j = 0; j < document.querySelectorAll('.ranked-list').length; j++) {
    
  }
}