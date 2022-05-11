class Chapter5 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);
        let nextChapterButton = new NextButton(nextChapterBtnIcon, null);
        let previousSlideButton = new BackButton(previousSlideBtnIcon);

        let slide1scene = new Scene(chapter5scenes[0]);
        let slide2scene = new Scene(chapter5scenes[1]);
        let slide3scene = new Scene(chapter5scenes[2]);
        let slide4scene = new Scene(chapter5scenes[3]);
        let slide5scene = new Scene(chapter5scenes[4]);
        let slide6scene = new Scene(chapter5scenes[5]);
        let slide7scene = new Scene(chapter5scenes[6]);
        let slide8scene = new Scene(chapter5scenes[7]);

        let slide1convoJ = [
            "ハルと最後に話した日から一週間が経ったころ…", 
            "…近所のコンビニで偶然ハルを見かけた。"];
        let slide1convoE = [
            "A week passed since I last spoke with Haru... ",
            "...and ran into Haru while shopping in a local convenient store."];
        let slide1texts = new Txt(null, slide1convoJ, slide1convoE, null);

        let slide3namePlate = ["XXX","HARU","HARU","XXX","HARU","HARU"];
        let slide3convoJ = [
            "ハル…。げ、元気？", 
            "元気だよ。XXXがいないから寂しいけど。",
            "でも落ち着いてきたら前みたいにゲームして遊ぼうね。",
            "そうだね。よかった。",
            "あっこれは私のクラスメイトのゲン。",
            "ゲンもゲームが好きで、プログラミングも勉強してるの。"];
        let slide3convoE = [
            "Haru... h-h- how are you?", 
            "I'm doing good. I miss our school and hanging out though.",
            "But maybe we can play video games like old times once things settle down.",
            "Definitely. I'm glad to hear that you're doing well.",
            "Oh, this is my classmate Gen.",
            "Gen also loves video games and is learning to program."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);


        //Slide(scene, nextButton, backButton, choices, texts, audio, amp, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, previousSlideButton, null, slide1texts, null, null, null));
        this.slides.push(new Slide(slide2scene, nextSlideButton, previousSlideButton, null, null, doorSound, 0.5, null));
        this.slides.push(new Slide(slide3scene, nextSlideButton, previousSlideButton, null, slide3texts, null, null, null));
        this.slides.push(new Slide(slide4scene, nextSlideButton, previousSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide5scene, nextSlideButton, previousSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide6scene, nextSlideButton, previousSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide7scene, nextSlideButton, previousSlideButton, null, null, null, null, null));
        this.slides.push(new Slide(slide8scene, nextChapterButton, previousSlideButton, null, null, null, null, null));
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

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
            nextChapSound.play(0,1,0.3);
            currentChapterIndex++;
        } else {
            nextSlideSound.play(0, 0.6, 0.1);
            this.currentSlideIndex++;
        }
    }

    previousSlideButton() {
        if (this.currentSlideIndex === 0) {
            return false;
        } else {
            nextSlideSound.play(0, 0.6, 0.1);
            this.currentSlideIndex--;
        }      
    }
}