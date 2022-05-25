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
  if (!canvasIsShown){
    return;
  }

  chapters[currentChapterIndex].mousePressed();
  chapters[currentChapterIndex].playAudio();
}

function mouseReleased() {
  if (!canvasIsShown){
    return;
  }
  if (currentChapterIndex === 5) {
    chapters[currentChapterIndex].mouseReleased();
  }
}

function mouseDragged() {
  if (!canvasIsShown){
    return;
  }
  
  if (currentChapterIndex === 5) {
    chapters[currentChapterIndex].mouseDragged();
  }
}

function keyPressed() {
  if (!canvasIsShown){
    return;
  }
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    chapters[currentChapterIndex].keyPressed(); 
    chapters[currentChapterIndex].playAudio();
  }
}

// hide url bar

// function hideSearchBar() {
    
//   var win = window,
//       doc = win.document;

//   // If there's a hash, or addEventListener is undefined, stop here
//   if ( !location.hash || !win.addEventListener ) {

//     //scroll to 1
//     window.scrollTo( 0, 1 );
//     var scrollTop = 1,

//     //reset to 0 on bodyready, if needed
//     bodycheck = setInterval(function(){
//       if( doc.body ){
//         clearInterval( bodycheck );
//         scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
//         win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
//       } 
//     }, 15 );

//     if (win.addEventListener) {
//       win.addEventListener("load", function(){
//         setTimeout(function(){
//           //reset to hide addr bar at onload
//           win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
//         }, 0);
//       }, false );
//     }
//   }

// };

// function touchStarted(e){
//     // return false;
//   }


/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */


// function touchStarted(e){
//   return false;
// }

// function touchMoved(){
//   return false;
// }

// function touchEnded(){
//   return false;
// }