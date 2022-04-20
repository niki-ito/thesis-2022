let canvas;
let chapters = [];
let currentChapterIndex = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.parent("canvas");

  chapters.push(new Chapter1());
}

function draw() {
  chapters[currentChapterIndex].display();

  image(nextSlideBtnIcon, windowWidth/4*3,windowHeight/15*13,windowWidth/8,windowWidth/8);
}

function mousePressed() {
  clear();
  chapters[currentChapterIndex].nextSlideButton(); 
  console.log("pressed");
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
// function touchStarted(){
//   return false;
// }

// function touchMoved(){
//   return false;
// }

// function touchEnded(){
//   return false;
// }
