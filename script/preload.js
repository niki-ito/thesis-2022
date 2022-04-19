let nextSlideBtnIcon;
let nextChapterBtnIconn;

let chapter1scenes = [];
let chapter1scene6options = [];
let chapter1scene10options = [];

function preload() {
  nextSlideBtnIcon = loadImage("./assets/images/icons/ui-arrow.png");
  nextChapterBtnIcon = loadImage("./assets/images/icons/ui-check.png");

    for (let i = 1; i < 19; i++) {
      chapter1scenes.push(loadImage("./assets/images/chapter1/scene" + i + ".png"));
      }

    for (let i = 1; i < 5; i++) {
      chapter1scene6options.push(loadImage("./assets/images/chapter1/scene6opt" + i + ".png"));
    }

    for (let i = 1; i < 5; i++) {
      chapter1scene10options.push(loadImage("./assets/images/chapter1/scene10opt" + i + ".png"));
    }
}