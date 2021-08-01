var leafOne = document.querySelector('.leafOne');
var stickLine = document.querySelector('.stickLine');
var leafTwo = document.querySelector('.leafTwo');
var leafS1 = document.querySelector('.leafS1');
var rose1 = document.querySelector('.rose1');
var rose2 = document.querySelector('.rose2');
var rose3 = document.querySelector('.rose3');
var rose4 = document.querySelector('.rose4');

var lineDrawing = anime({
  targets: [leafOne, stickLine,leafTwo, leafS1,rose1, rose2, rose3, rose4],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 4000,
  begin: function(anim) {
    //Leaf One
    leafOne.setAttribute("stroke", "black");
    leafOne.setAttribute("fill", "none");
    // Leaf Two
    leafTwo.setAttribute("stroke", "black");
    leafTwo.setAttribute("fill", "none");
    //Stick
    stickLine.setAttribute("stroke", "black");
    stickLine.setAttribute("fill", "none");
    // Leaf S1
    leafS1.setAttribute("stroke", "black");
    leafS1.setAttribute("fill", "none");
    //Rose One
    rose1.setAttribute("stroke", "black");
    rose1.setAttribute("fill", "none");
    //Rose Two
    rose2.setAttribute("stroke", "black");
    rose2.setAttribute("fill", "none");
    //Rose Three
    rose3.setAttribute("stroke", "black");
    rose3.setAttribute("fill", "none");
     //Rose Three
    rose4.setAttribute("stroke", "black");
    rose4.setAttribute("fill", "none");
  },
  complete: function(anim) {
    //Leaf One
    leafOne.setAttribute("fill", "#9CDD05");
    leafOne.setAttribute("stroke", "none");
    //Leaf Two 
    leafTwo.setAttribute("fill", "#9CDD05");
    leafTwo.setAttribute("stroke", "none");
    //Stick
    stickLine.setAttribute("fill", "#83AA2E");
    stickLine.setAttribute("stroke", "none");
    // Leaf S1
    leafS1.setAttribute("fill", "#9CDD05");
    leafS1.setAttribute("stroke", "none");
    // Rose 1
    rose1.setAttribute("fill", "#F37D79");
    rose1.setAttribute("stroke", "none");
    // Rose 2
    rose2.setAttribute("fill", "#D86666");
    rose2.setAttribute("stroke", "none");
    // Rose 3
    rose3.setAttribute("fill", "#F37D79");
    rose3.setAttribute("stroke", "none");
     // Rose 3
    rose4.setAttribute("fill", "#D86666");
    rose4.setAttribute("stroke", "none");
  },
  autoplay: true,
});