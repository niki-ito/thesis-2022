class Chapter1 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);
        let nextChapterButton = new NextButton(nextChapterBtnIcon, null);
        let previousSlideButton = new BackButton(previousSlideBtnIcon);

        let slide0scene = new Scene(chapter1slide0gif);
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
        let slide17scene = new Scene(chapter1slide17gif);
        let slide18scene = new Scene(chapter1scenes[16]);
        let slide19scene = new Scene(chapter1scenes[17]);
        let slide20scene = new Scene(chapter1scenes[18]);
        let slide21scene = new Scene(chapter1scenes[19]);
        let slide22scene = new Scene(chapter1scenes[20]);


        let slide6Choices = new Choice(
            chapter1scene6options[0],
            chapter1scene6options[1],
            chapter1scene6options[2],
            chapter1scene6options[3]);

        let slide11Choices = new Choice(
            chapter1scene11options[0],
            chapter1scene11options[1],
            chapter1scene11options[2],
            chapter1scene11options[3]);

        // let slideOneImages = [slide1Bird];

        // this.nextSlideButton = new NextButton ("nextSlide");

        let slide3namePlate = ["SORA", 'nameInput'];
        let slide3convoJ = [
            ""+nameInput+" おはよう！久しぶり。夏休みは長いようであっという間だったね。", 
            "そうだね。ついに学校がまた始まっちゃった。"];
        let slide3convoE = [
            "Hey "+nameInput+"! I haven't seen you in so long! Time flew by so quickly.", 
            "Yeah. By the time you know it, it's the first day of school again."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);

        let slide5namePlate = ['nameInput', "SORA", "SORA", "SORA"];
        let slide5convoJ = [
            "そら、入部したい部活決めた？", 
            "私はダンス部に入部したいんだ。", 
            "少し恥ずかしいんだけど、でもダンスしてると悩みとか忘れて楽になれるんだよね。", 
            ""+nameInput+"は何部に興味あるの?"];
        let slide5convoE = [
            "Hey Sora, did you decide what club to join?", 
            "I want to join the dance club.", 
            "It's a bit embarrassing, but while I am dancing, all my worries go away.", 
            "Which club activities are you interested in "+nameInput+"?"];
        let slide5texts = new Txt(slide5namePlate, slide5convoJ, slide5convoE, null);

        let slide6namePlate = ['nameInput'];
        let slide6convoJ = [
            "興味がある部活は…。"];
        let slide6convoE = [
            "The club activity I am interested in is..."];
        let slide6texts = new Txt(slide6namePlate, slide6convoJ, slide6convoE, "choiceBox");

        let slide7namePlate = ["SORA"];
        let slide7convoJ = [
            "クラスのみんなは何部に入るんだろうね。"];
        let slide7convoE = [
            "I wonder what club the rest of the class will join."];
        let slide7texts = new Txt(slide7namePlate, slide7convoJ, slide7convoE, null);

        let slide8namePlate = ["SORA"];
        let slide8convoJ = [
            "見てみて。これ私の犬のコトリ。"];
        let slide8convoE = [
            "Look, look! This is my dog, Kotori."];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE, null);

        let slide9namePlate = ["SORA", "SORA", 'nameInput'];
        let slide9convoJ = [ 
            "一年前に飼った保護犬なんだけど今は六才なの。", 
            "本当大好き。コトリ無しだったら生きていけないわー。",
            "かわいいね！いい写真。"];
        let slide9convoE = [
            "I rescued him from the shelter a year ago, but now he's six years old.", 
            "I love him so much. I wouldn't know what to do without him.", 
            "Wow, so cute. That picture is great."];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE, null);

        let slide10namePlate = ["SORA"];
        let slide10convoJ = [ 
            ""+nameInput+"は家族以外で、ないと生きていけないものとかある?"];
        let slide10convoE = [
            "Do you have something you can't live without besides your family?"];
        let slide10texts = new Txt(slide10namePlate, slide10convoJ, slide10convoE, null);

        let slide11namePlate = ['nameInput'];
        let slide11convoJ = [
            "ないと生きていけないものは…。"];
        let slide11convoE = [
            "I can't live without my..."];
        let slide11texts = new Txt(slide11namePlate, slide11convoJ, slide11convoE, "choiceBox");

        let slide12namePlate = ["SORA","SORA"];
        let slide12convoJ = [ 
            "大切だよね。",
            "私はコトリのことを考えるだけで元気が出る。"];
        let slide12convoE = [
            "It's so important.",
            "It makes me happy just thinking about Kotori."];
        let slide12texts = new Txt(slide12namePlate, slide12convoJ, slide12convoE, null);

        let slide14namePlate = ["student A", "student A", "student B", "student B"];
        let slide14convoJ = [ 
            "え？あの人レズなの？そーゆーのまじわかんない。",
            "せっかく美人な女優さんなのにもったいない。",
            "同じ映画に出演てた俳優さんとすっごくお似合いだったのにね。",
            "普通に付き合っちゃえばよかったのに。"];
        let slide14convoE = [
            "What? She's a 'les'? I don't get it.",
            "She's so beautiful and famous. It's such a shame.",
            "She was perfect with her co-actor in her last movie.",
            "They should have just dated."];
        let slide14texts = new Txt(slide14namePlate, slide14convoJ, slide14convoE, null);

        let slide15namePlate = ["SORA",'nameInput'];
        let slide15convoJ = [ 
            "…",
            "そら, 大丈夫？"];
        let slide15convoE = [
            "...",
            "What's wrong, Sora?"];
        let slide15texts = new Txt(slide15namePlate, slide15convoJ, slide15convoE, null);

        let slide16namePlate = ["SORA", "SORA"];
        let slide16convoJ = [ 
            "ん？あっなんでもないよ。大丈夫。",
            "ちょっと気持ち悪くなっただけ。お腹すいたのかな。"];
        let slide16convoE = [
            "What? Nothing. I'm fine.",
            "Just felt a bit nauseous. Maybe I'm just hungry."];
        let slide16texts = new Txt(slide16namePlate, slide16convoJ, slide16convoE, null);

        let slide18convoJ = [ 
            "好きな人を好きでいちゃダメなのかな。",
            "どうせ私なんてただのキモいレズとしか思われないのかな。"];
        let slide18convoE = [
            "Maybe I shouldn't like who I like.",
            "People will just see me as a gross 'les.'"];
        let slide18texts = new Txt(null, slide18convoJ, slide18convoE, null);

        let slide21convoJ = [ 
            "好きな女の子に好きって伝えたい。",
            "でもクラスにキモいと思われるのが怖い。"];
        let slide21convoE = [
            "I'd like to tell my crush that I like her.",
            "But I'm scared I'll be treated like a creep."];
        let slide21texts = new Txt(null, slide21convoJ, slide21convoE, null);

        //Slide(scene, nextButton, backButton, choices, texts, audio, amp, textInput)
        this.slides.push(new Slide(slide0scene, nextSlideButton, null, null, null, null, null, null, null )); //0
        this.slides.push(new Slide(slide1scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, previousSlideButton, null, slide3texts, null, null, null, null )); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, previousSlideButton, null, slide5texts, null, null, null, null )); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, previousSlideButton, slide6Choices, slide6texts, null, null, null, null )); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, previousSlideButton, null, slide7texts, null, null, null, null )); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, previousSlideButton, null, slide8texts, null, null, null, null )); //8
        this.slides.push(new Slide(slide9scene, nextSlideButton, previousSlideButton, null, slide9texts, null, null, null, null )); //9
        this.slides.push(new Slide(slide10scene, nextSlideButton, previousSlideButton, null, slide10texts, null, null, null, null )); //10
        this.slides.push(new Slide(slide11scene, nextSlideButton, previousSlideButton, slide11Choices, slide11texts, null, null, null, null )); //11
        this.slides.push(new Slide(slide12scene, nextSlideButton, previousSlideButton, null, slide12texts, null, null, null, null )); //12
        this.slides.push(new Slide(slide13scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //13
        this.slides.push(new Slide(slide14scene, nextSlideButton, previousSlideButton, null, slide14texts, null, null, null, null )); //14
        this.slides.push(new Slide(slide15scene, nextSlideButton, previousSlideButton, null, slide15texts, null, null, null , null)); //15
        this.slides.push(new Slide(slide16scene, nextSlideButton, previousSlideButton, null, slide16texts, null, null, null , null)); //16
        this.slides.push(new Slide(slide17scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //17
        this.slides.push(new Slide(slide18scene, nextSlideButton, previousSlideButton, null, slide18texts, null, null, null, null )); //18
        this.slides.push(new Slide(slide19scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //19
        this.slides.push(new Slide(slide20scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //20
        this.slides.push(new Slide(slide21scene, nextSlideButton, previousSlideButton, null, slide21texts, null, null, null, null )); //21
        this.slides.push(new Slide(slide22scene, nextChapterButton, previousSlideButton, null, null, null, null, null, null )); //21
    }

    display() {
        this.slides[this.currentSlideIndex].display();
    }

    mousePressed() {
        this.slides[this.currentSlideIndex].mousePressed();

        if (this.currentSlideIndex === 2 && !rainSound.isLooping()) {
            rainSound.loop(0,1,1);
          }else if (this.currentSlideIndex === this.slides.length -1){
            rainSound.stop();
          }

        if (this.currentSlideIndex === 4) {
            rainSound.stop();
            rainSound.loop(0,1,0.5);
        }
    }

    keyPressed() {
        this.slides[this.currentSlideIndex].keyPressed(); 
        
        if (this.currentSlideIndex === 2 && !rainSound.isLooping()) {
            rainSound.loop(0,1,1);
          }else if (this.currentSlideIndex === this.slides.length -1){
            rainSound.stop();
          }

        if (this.currentSlideIndex === 4) {
            rainSound.stop();
            rainSound.loop(0,1,0.5);
        }
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
        } else {
            nextSlideSound.play(0, 0.6, 0.1);
            clear();
            this.currentSlideIndex--;
        }      
    }
}