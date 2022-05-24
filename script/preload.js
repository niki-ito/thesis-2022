let optSound;
let nextSlideSound;
let nextChapSound;
let colorSwitchSound;
let talkingSound;

let nextSlideBtnIcon;
let nextChapterBtnIcon;
let previousSlideBtnIcon;

let chapter0scenes = [];
let chapter0slide1gif;

let chapter1scenes = [];
let chapter1scene6options = [];
let chapter1scene11options = [];
let chapter1slide16gif;

let chapter2scenes = [];
let chapter2scene9options = [];
let chapter2scene13options = [];
let chapter2slide18gif;

let chapter3scenes = [];
let chapter3scene8options = [];
let chapter3scene11options = [];
let chapter3slide16gif;

let chapter4scenes = [];
let chapter4scene8options = [];
let chapter4scene11options = [];
let chapter4slide14gif;

let chapter5scenes = [];

let minaFontR;
let minaFontB;
let corpFontB;
let BGM;
let rainSound;
let chewSound;
let btsSound;
let aniCrossSound;
let doorSound;

function preload() {

  optSound = loadSound("./assets/audio/options.mp3");
  nextSlideSound = loadSound("./assets/audio/next.mp3");
  nextChapSound = loadSound("./assets/audio/complete.mp3");
  colorSwitchSound = loadSound("./assets/audio/change-color.mp3");
  talkingSound = loadSound("./assets/audio/mumble.flac");
  BGM = loadSound("./assets/audio/BGM.mp3");
  rainSound = loadSound("./assets/audio/rain.mp3");
  chewSound = loadSound("./assets/audio/chew.mp3");
  btsSound = loadSound("./assets/audio/BTSclip.mp3");
  aniCrossSound = loadSound("./assets/audio/animalCrossing.mp3");
  doorSound = loadSound("./assets/audio/door-open.mp3");

  minaFontB = loadFont("./assets/fonts/mina-bold.ttf");
  minaFontR = loadFont("./assets/fonts/mina-regular.ttf");
  corpFontB = loadFont("./assets/fonts/corporate-bold.otf")

  nextSlideBtnIcon = loadImage("./assets/images/icons/ui-arrow.png");
  nextChapterBtnIcon = loadImage("./assets/images/icons/ui-check.png");
  previousSlideBtnIcon = loadImage("./assets/images/icons/ui-back.png");

  chapter0slide1gif = loadImage("./assets/images/gif/screen-size-logo-gif.gif");

    for (let i = 0; i < 3; i++) {
      chapter0scenes.push(loadImage("./assets/images/chapter0/scene" + i + ".png"));
      }

    for (let i = 1; i < 5; i++) {
      chapter1scene6options.push(loadImage("./assets/images/chapter1/scene6opt" + i + ".png"));
      chapter1scene11options.push(loadImage("./assets/images/chapter1/scene11opt" + i + ".png"));
      chapter2scene9options.push(loadImage("./assets/images/chapter2/scene9opt" + i + ".png"));
      chapter2scene13options.push(loadImage("./assets/images/chapter2/scene13opt" + i + ".png"));
      chapter3scene8options.push(loadImage("./assets/images/chapter3/scene8opt" + i + ".png"));
      chapter3scene11options.push(loadImage("./assets/images/chapter3/scene11opt" + i + ".png"));
      chapter4scene8options.push(loadImage("./assets/images/chapter4/scene8opt" + i + ".png"));
      chapter4scene11options.push(loadImage("./assets/images/chapter4/scene11opt" + i + ".png"));
    }

    for (let i = 1; i < 22; i++) {
      chapter1scenes.push(loadImage("./assets/images/chapter1/scene" + i + ".png"));
      }

    for (let i = 1; i < 23; i++) {
      chapter2scenes.push(loadImage("./assets/images/chapter2/scene" + i + ".png"));
      }

    for (let i = 1; i < 21; i++) {
      chapter3scenes.push(loadImage("./assets/images/chapter3/scene" + i + ".png"));
      }

    for (let i = 1; i < 23; i++) {
      chapter4scenes.push(loadImage("./assets/images/chapter4/scene" + i + ".png"));
      }

    for (let i = 1; i < 9; i++) {
      chapter5scenes.push(loadImage("./assets/images/chapter5/scene" + i + ".png"));
      }

  chapter1slide0gif = loadImage("./assets/images/chapter1/scene1.gif");
  chapter2slide0gif = loadImage("./assets/images/chapter2/scene1.gif");
  chapter3slide0gif = loadImage("./assets/images/chapter3/scene1.gif");
  chapter4slide0gif = loadImage("./assets/images/chapter4/scene1.gif");
  chapter5slide6gif = loadImage("./assets/images/chapter5/scene6.gif");

  chapter1slide17gif = loadImage("./assets/images/chapter1/scene17-gif.gif");
  chapter2slide18gif = loadImage("./assets/images/chapter2/scene18-gif.gif");
  chapter3slide16gif = loadImage("./assets/images/chapter3/scene16-gif.gif");
  chapter4slide14gif = loadImage("./assets/images/chapter4/scene14-gif.gif");
}