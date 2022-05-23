class Chapter0 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);
        let nextChapterButton = new NextButton(nextChapterBtnIcon, null);
        let previousSlideButton = new BackButton(previousSlideBtnIcon);

        let slide1scene = new Scene(chapter0slide1gif);
        let slide3scene = new Scene(chapter0scenes[0]);
        let slide4scene = new Scene(chapter0scenes[1]);

        let slide2Input = new TxtInput();

        this.slide3convoJ = [
            "私の名前は"+nameInput+"。ごく普通の中学生。", 
            "今日は夏休み明けで最初の学校。"];
        let slide3convoE = [
            "I'm " + nameInput + ". An ordinary Japanese middle school student.", 
            "Today is my first day of school after a long summer break."];
        let slide3texts = new Txt(null, this.slide3convoJ, slide3convoE, null);

        let slide4namePlate = ["MOM", 'nameInput'];
        let slide4convoJ = [
            "行ってらっしゃーい！雨降るから気をつけてね。", 
            "はーい。行ってきまーす！"];
        let slide4convoE = [
            "Have a nice day at school! Be careful since it's supposed to rain today.", 
            "Okay, I will!"];
        let slide4texts = new Txt(slide4namePlate, slide4convoJ, slide4convoE, null);


        // Slide(scene, nextButton, backButton, choices, texts, audio, amp, textInput, slider)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null, null, null, null, null));
        this.slides.push(new Slide(null, nextSlideButton, previousSlideButton, null, null, null, null, slide2Input, null ));
        this.slides.push(new Slide(slide3scene, nextSlideButton, previousSlideButton, null, slide3texts, null, null, null, null ));
        this.slides.push(new Slide(slide4scene, nextChapterButton, previousSlideButton, null, slide4texts, null, null , null, null));
    }

    display() {
        // this.addTexts();
        this.slides[this.currentSlideIndex].display();
    }

    // addTexts() {
    //     this.slide3convoJ.push(
    //         "私の名前は"+nameInput+"。ごく普通の中学生。", 
    //          "今日は夏休み明けで最初の学校。"
    //     )
    // }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();
    }

    keyPressed() {
        this.slides[this.currentSlideIndex].keyPressed();       
    }

    playAudio() {
        this.slides[this.currentSlideIndex].playAudio();
    }

    nextSlideButton() {
        if (this.currentSlideIndex >= this.slides.length-1) {
            nextChapSound.play(0,1,1);
            clear();
            currentChapterIndex++;
        } else {
            nextSlideSound.play(0, 0.6, 0.1);
            clear();
            this.currentSlideIndex++;
        }
    }

    previousSlideButton() {
        if (this.currentSlideIndex === 0) {
            return;
        } 
        clear();
        nextSlideSound.play(0, 0.6, 0.1);
        this.currentSlideIndex--;    
    }
}