class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);

        // should I make a button for each slide even though they are all basically the same?

        let slide1scene = new Scene(chapter1scenes[0]);
        let slide2scene = new Scene(chapter1scenes[1]);
        let slide3scene = new Scene(chapter1scenes[2]);
        let slide4scene = new Scene(chapter1scenes[3]);
        let slide5scene = new Scene(chapter1scenes[4]);
        let slide6scene = new Scene(chapter1scenes[5]);
        let slide7scene = new Scene(chapter1scenes[6]);
        let slide8scene = new Scene(chapter1scenes[7]);
        let slide9scene = new Scene(chapter1scenes[8]);
        let slide10scene = new Scene(chapter1scenes[9]);
        let slide11scene = new Scene(chapter1scenes[10]);
        let slide12scene = new Scene(chapter1scenes[11]);
        let slide13scene = new Scene(chapter1scenes[12]);
        let slide14scene = new Scene(chapter1scenes[13]);
        let slide15scene = new Scene(chapter1scenes[14]);
        let slide16scene = new Scene(chapter1scenes[15]);
        let slide17scene = new Scene(chapter1scenes[16]);
        let slide18scene = new Scene(chapter1scenes[17]);
        let slide19scene = new Scene(chapter1scenes[18]);
        let slide20scene = new Scene(chapter1scenes[19]);



        // let slideOneImages = [slide1Bird];

        // let slide1Conversation = new Txt('HHey whats up', 100, 200, 12);
        // let slideOneTexts = [slide1Conversation];
        // this.nextSlideButton = new NextButton ("nextSlide");
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide2scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide3scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide4scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide5scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide6scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide7scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide8scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide9scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide10scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide11scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide12scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide13scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide14scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide15scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide16scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide17scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide18scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide19scene, nextSlideButton, null, null, null, null ));
        this.slides.push(new Slide(slide20scene, nextSlideButton, null, null, null, null ));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();
    }

    nextSlideButton() {
        this.currentSlideIndex++;
        console.log("hi")
    }
}