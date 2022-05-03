let canvas;
let chapters = [];
let currentChapterIndex = 0;
let nameInput;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.parent("canvas");

  chapters.push(new Chapter0());
  chapters.push(new Chapter1());
  chapters.push(new Chapter2());
  chapters.push(new Chapter3());
  chapters.push(new Chapter4());
  chapters.push(new Chapter5());
}

function draw() {
  chapters[currentChapterIndex].display();
}

function mousePressed() {
  if (!chapters[currentChapterIndex]){
    return;
  }

  chapters[currentChapterIndex].mousePressed();
  chapters[currentChapterIndex].playAudio();
}

// function keyPressed() {
//   console.log(keyPressed())
//   if (!chapters[currentChapterIndex]){
//     return;
//   }

//   chapters[currentChapterIndex].keyTyped(); 
// }

function keyPressed() {
  if (!chapters[currentChapterIndex]){
    return;
  }
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    chapters[currentChapterIndex].keyPressed(); 
  }
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