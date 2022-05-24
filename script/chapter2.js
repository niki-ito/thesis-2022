class Chapter2 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);
        let nextChapterButton = new NextButton(nextChapterBtnIcon, null);
        let previousSlideButton = new BackButton(previousSlideBtnIcon);

        let slide0scene = new Scene(chapter2slide0gif);
        let slide1scene = new Scene(chapter2scenes[0]);
        let slide2scene = new Scene(chapter2scenes[1]);
        let slide3scene = new Scene(chapter2scenes[2]);
        let slide4scene = new Scene(chapter2scenes[3]);
        let slide5scene = new Scene(chapter2scenes[4]);
        let slide6scene = new Scene(chapter2scenes[5]);
        let slide7scene = new Scene(chapter2scenes[6]);
        let slide8scene = new Scene(chapter2scenes[7]);
        let slide9scene = new Scene(chapter2scenes[8]);
        let slide10scene = new Scene(chapter2scenes[9]);
        let slide11scene = new Scene(chapter2scenes[10]);
        let slide12scene = new Scene(chapter2scenes[11]);
        let slide13scene = new Scene(chapter2scenes[12]);
        let slide14scene = new Scene(chapter2scenes[13]);
        let slide15scene = new Scene(chapter2scenes[14]);
        let slide16scene = new Scene(chapter2scenes[15]);
        let slide17scene = new Scene(chapter2scenes[16]);
        let slide18scene = new Scene(chapter2slide18gif);
        let slide19scene = new Scene(chapter2scenes[17]);
        let slide20scene = new Scene(chapter2scenes[18]);
        let slide21scene = new Scene(chapter2scenes[19]);
        let slide22scene = new Scene(chapter2scenes[20]);
        let slide23scene = new Scene(chapter2scenes[21]);


        let slide9Choices = new Choice(
            chapter2scene9options[0],
            chapter2scene9options[1],
            chapter2scene9options[2],
            chapter2scene9options[3]);

        let slide13Choices = new Choice(
            chapter2scene13options[0],
            chapter2scene13options[1],
            chapter2scene13options[2],
            chapter2scene13options[3]);

        let slide3namePlate = ["MATSUBA",'nameInput','nameInput'];
        let slide3convoJ = [
            "お腹すいたー。"+nameInput+"今日の給食何か知ってる?", 
            "マツバはいつも食べ物のことばっかり考えてるよね。",
            "知らないけどいい匂いだね。"];
        let slide3convoE = [
            "I'm so hungry... Do you know what today's lunch is "+nameInput+"?", 
            "You're always thinking about food, Matsuba.",
            "I don't know, but it smells great."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);

        let slide5namePlate = ["MATSUBA"];
        let slide5convoJ = [
            "ジャンボ餃子大好き！給食の中で一番好きなんだ。"];
        let slide5convoE = [
            "I love jumbo dumplings. It's my favorite school lunch!"]
        let slide5texts = new Txt(slide5namePlate, slide5convoJ, slide5convoE, null);

        let slide6namePlate = ['nameInput'];
        let slide6convoJ = [
            "いただきまーす。"];
        let slide6convoE = [
            "(Japanese term to show appreciation of the food before a meal.)"];
        let slide6texts = new Txt(slide6namePlate, slide6convoJ, slide6convoE, null);

        let slide8namePlate = ["MATSUBA"];
        let slide8convoJ = [
            "美味しい!"+nameInput+"は給食の中で何が一番好き?"];
        let slide8convoE = [
            "It's so good! What's your favorite school lunch "+nameInput+"?"];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE, null);

        let slide9namePlate = ['nameInput'];
        let slide9convoJ = [
            "学校で一番好きな給食は…。"];
        let slide9convoE = [
            "My favorite school lunch is..."];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE, "choiceBox");

        let slide10namePlate = ["MATSUBA"];
        let slide10convoJ = [ 
            "美味しいよね！"];
        let slide10convoE = [
            "Yeah, they're delicious!"];
        let slide10texts = new Txt(slide10namePlate, slide10convoJ, slide10convoE, null);

        let slide12namePlate = ['nameInput', 'nameInput', 'nameInput', "MATSUBA", "MATSUBA", 'nameInput', "MATSUBA", "MATSUBA", "MATSUBA"];
        let slide12convoJ = [ 
            "ごちそうさまでした。", 
            "あーお腹いっぱい。マツバは家で餃子作ったことある？",
            "難しそうだけどマツバならできそう。",
            "一般的な餃子なら作ったことあるよ。",
            "時間かかるけど意外と簡単だよ。",
            "いつもは何作るの？", 
            "ご飯と炒め物かな。お母さんは仕事で遅いから,",
            "部活で忙しい妹の分も作って、二人でテレビを見ながら夜ご飯食べるんだ。",
            ""+nameInput+"はいつも誰と夜ご飯べるの?"];
        let slide12convoE = [
            "(Japanese term to show appreciation of the food after a meal.)", 
            "I'm so full! Did you ever try cooking dumplings at home?", 
            "I know you'd probably make it even better!",
            "Sure, I've made regular gyoza dumplings at home before.",
            "It takes some time but it's not that hard.",
            "What do you usually cook?", 
            "I usually make rice with stir-fry. Since our mom comes home late from work,",
            "I make dinner for both me and my little sister, and we have dinner together while watching TV.", 
            "Who do you eat your dinners with "+nameInput+"?"];
        let slide12texts = new Txt(slide12namePlate, slide12convoJ, slide12convoE, null);

        let slide13namePlate = ['nameInput'];
        let slide13convoJ = [
            "夜ご飯は…食べる。"];
        let slide13convoE = [
            "I have dinner..."];
        let slide13texts = new Txt(slide13namePlate, slide13convoJ, slide13convoE, "choiceBox");

        let slide14namePlate = ["MATSUBA","MATSUBA"];
        let slide14convoJ = [ 
            "そうだったんだ。",
            "僕たまには妹に夜ご飯作ってもらいたいけどね。"];
        let slide14convoE = [
            "Oh really.",
            "Sometimes, I'd want my little sister to cook dinner for a change."];
        let slide14texts = new Txt(slide14namePlate, slide14convoJ, slide14convoE, null);

        let slide16namePlate = ['nameInput','nameInput'];
        let slide16convoJ = [ 
            "マツバって料理もできるし昔から女子に人気だよね。",
            "最近雰囲気変わったし、もしかしてついに彼女できた？"];
        let slide16convoE = [
            "You've always been great at cooking and popular among girls Matsuba.",
            "You also seem a bit different these days. Could it be that you finally made a girlfriend?"];
        let slide16texts = new Txt(slide16namePlate, slide16convoJ, slide16convoE, null);

        let slide17namePlate = ["MATSUBA", 'nameInput'];
        let slide17convoJ = [ 
            "…彼女は、できてないよ。",
            "そっか。でもきっとマツバならいい彼女が絶対見つかるよね。"];
        let slide17convoE = [
            "...no, I don't have a girlfriend.",
            "Oh. Well, you'll certainly find an amazing girlfriend sooner or later."];
        let slide17texts = new Txt(slide17namePlate, slide17convoJ, slide17convoE, null);

        let slide19convoJ = [ 
            "でた。いつも彼女彼女って。彼氏のことなんて聞いてくれるわけないよね。",
            "土曜日は彼氏との一ヶ月間記念日。",
            ""+nameInput+"にも話したかったのにいつもこうやって思い込みによって嘘をついちゃう。"];
        let slide19convoE = [
            "There it is. It's always girlfriend THIS or girlfriend THAT. No one ever asks me if I have a boyfriend.",
            "Saturday is my one-month anniversary with my boyfriend.",
            "I've been wanting to tell "+nameInput+", but because of the assumptions, I always end up lying."];
        let slide19texts = new Txt(null, slide19convoJ, slide19convoE, null);

        let slide22convoJ = [ 
            "好きな彼氏と手を繋いでデートみんなと同じようにを楽しみたい。",
            "でも周りからの目線が苦しい。"];
        let slide22convoE = [
            "I'd like to hold hands with my boyfriend and have fun on our dates.",
            "But I'm anxious about what others might think."];
        let slide22texts = new Txt(null, slide22convoJ, slide22convoE, null);

        //Slide(scene, nextButton, choices, texts, audio, amp, textInput)
        this.slides.push(new Slide(slide0scene, nextSlideButton, null, null, null, null, null, null, null )); //0
        this.slides.push(new Slide(slide1scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, previousSlideButton, null, slide3texts, null, null, null , null)); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, previousSlideButton, null, slide5texts, null, null, null, null)); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, previousSlideButton, null, slide6texts, null, null, null , null)); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, previousSlideButton, null, null, chewSound, 1, null, null )); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, previousSlideButton, null, slide8texts, null, null, null , null)); //8
        this.slides.push(new Slide(slide9scene, nextSlideButton, previousSlideButton, slide9Choices, slide9texts, null, null, null, null )); //9
        this.slides.push(new Slide(slide10scene, nextSlideButton, previousSlideButton, null, slide10texts, null, null, null, null )); //10
        this.slides.push(new Slide(slide11scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //11
        this.slides.push(new Slide(slide12scene, nextSlideButton, previousSlideButton, null, slide12texts, null, null, null, null )); //12
        this.slides.push(new Slide(slide13scene, nextSlideButton, previousSlideButton, slide13Choices, slide13texts, null, null, null, null )); //13
        this.slides.push(new Slide(slide14scene, nextSlideButton, previousSlideButton, null, slide14texts, null, null, null , null)); //14
        this.slides.push(new Slide(slide15scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //15
        this.slides.push(new Slide(slide16scene, nextSlideButton, previousSlideButton, null, slide16texts, null, null, null, null )); //16
        this.slides.push(new Slide(slide17scene, nextSlideButton, previousSlideButton, null, slide17texts, null, null, null , null)); //17
        this.slides.push(new Slide(slide18scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //18
        this.slides.push(new Slide(slide19scene, nextSlideButton, previousSlideButton, null, slide19texts, null, null, null, null )); //19
        this.slides.push(new Slide(slide20scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //20
        this.slides.push(new Slide(slide21scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null)); //21
        this.slides.push(new Slide(slide22scene, nextSlideButton, previousSlideButton, null, slide22texts, null, null, null, null)); //22
        this.slides.push(new Slide(slide23scene, nextChapterButton, previousSlideButton, null, null, null, null, null, null)); //23
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