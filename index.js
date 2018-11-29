function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(".target")
}

function increaseRankBy(n){
   let lis = document.querySelectorAll(".ranked-list li");
    for (var i = 0; i < lis.length; ++i) {
    lis[i] += +lis[i].innerText + n;
    }
  return lis
}

function deepestChild() {
  let divs = document.getElementById("grand-node");

  while ( divs.childElementCount > 0){
    divs = divs.children[0];
   }
   return divs
 }
