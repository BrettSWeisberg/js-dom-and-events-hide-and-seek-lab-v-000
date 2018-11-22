function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('div.target')
}

function increaseRankBy(n){
   document.querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}
}

//
// <div id="nested">
//   <div>
//     <div>
//       <div>
//         <div class="target">
//           1
