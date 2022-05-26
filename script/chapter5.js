class Chapter5 {
    constructor() {
        this.slides = [];
        this.finalSlide = false;

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);
        let nextChapterButton = new NextButton(nextChapterBtnIcon, "endgame");
        let previousSlideButton = new BackButton(previousSlideBtnIcon);

        let slide1scene = new Scene(chapter5scenes[0]);
        let slide2scene = new Scene(chapter5scenes[1]);
        let slide3scene = new Scene(chapter5scenes[2]);
        let slide4scene = new Scene(chapter5scenes[3]);
        let slide5scene = new Scene(chapter5scenes[4]);
        let slide6scene = new Scene(chapter5slide6gif);
        let slide7scene = new Scene(chapter5scenes[5]);
        let slide8scene = new Scene(chapter5scenes[6]);
        let slide9scene = new Scene(chapter5scenes[7]);

        let slide5slider = new Sliders();

        let slide1convoJ = [
            "ハルと最後に話した日から一週間が経ったころ…", 
            "…近所のコンビニで偶然ハルを見かけた。"];
        let slide1convoE = [
            "A week passed since I last spoke with Haru... ",
            "...and ran into Haru while shopping in a local convenient store."];
        let slide1texts = new Txt(null, slide1convoJ, slide1convoE, null);

        let slide3namePlate = ['nameInput',"HARU","HARU",'nameInput',"HARU","HARU"];
        let slide3convoJ = [
            "ハル…。げ、元気？", 
            ""+nameInput+"! 元気だよ。少し寂しいけど。",
            "でも落ち着いてきたら前みたいにゲームして遊ぼうね。",
            "そうだね。よかった。",
            "あっこれは私のクラスメイトのゲン。",
            "ゲンもゲームが好きで、プログラミングも勉強してるの。"];
        let slide3convoE = [
            "Haru... h-h- how are you?", 
            ""+nameInput+"! I'm doing good. I miss our school and hanging out though.",
            "But maybe we can play video games like old times once things settle down.",
            "Definitely. I'm glad to hear that you're doing well.",
            "Oh, this is my classmate Gen.",
            "Gen also loves video games and is learning to program."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);


        //Slide(scene, nextButton, backButton, choices, texts, audio, amp, textInput, slider)
        this.slides.push(new Slide(slide1scene, nextSlideButton, previousSlideButton, null, slide1texts, null, null, null, null)); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, previousSlideButton, null, null, doorSound, 0.5, null, null)); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, previousSlideButton, null, slide3texts, null, null, null, null)); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null)); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, previousSlideButton, null, null, null, null, null, slide5slider)); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null)); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null)); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null)); //8
        this.slides.push(new Slide(slide9scene, nextChapterButton, previousSlideButton, null, null, null, null, null, null)); //9
        this.slides.push(new Slide(null, null, null, null, null, null, null, null, null)); //9
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();
    }

    mouseReleased() {
        this.slides[this.currentSlideIndex].mouseReleased();
    }

    mouseDragged() {
        this.slides[this.currentSlideIndex].mouseDragged();
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
        } else {
            nextSlideSound.play(0, 0.6, 0.1);
            clear();
            this.currentSlideIndex--;
        }      
    }
}