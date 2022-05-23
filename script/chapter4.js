class Chapter4 {
    constructor() {
        this.slides = [];

        this.currentSlideIndex = 0;

        let nextSlideButton = new NextButton(nextSlideBtnIcon, null);
        let nextChapterButton = new NextButton(nextChapterBtnIcon, null);
        let previousSlideButton = new BackButton(previousSlideBtnIcon);

        let slide1scene = new Scene(chapter4scenes[0]);
        let slide2scene = new Scene(chapter4scenes[1]);
        let slide3scene = new Scene(chapter4scenes[2]);
        let slide4scene = new Scene(chapter4scenes[3]);
        let slide5scene = new Scene(chapter4scenes[4]);
        let slide6scene = new Scene(chapter4scenes[5]);
        let slide7scene = new Scene(chapter4scenes[6]);
        let slide8scene = new Scene(chapter4scenes[7]);
        let slide9scene = new Scene(chapter4scenes[8]);
        let slide10scene = new Scene(chapter4scenes[9]);
        let slide11scene = new Scene(chapter4scenes[10]);
        let slide12scene = new Scene(chapter4scenes[11]);
        let slide13scene = new Scene(chapter4scenes[12]);
        let slide14scene = new Scene(chapter4slide14gif);
        let slide15scene = new Scene(chapter4scenes[13]);
        let slide16scene = new Scene(chapter4scenes[14]);
        let slide17scene = new Scene(chapter4scenes[15]);
        let slide18scene = new Scene(chapter4scenes[16]);
        let slide19scene = new Scene(chapter4scenes[17]);
        let slide20scene = new Scene(chapter4scenes[18]);
        let slide21scene = new Scene(chapter4scenes[19]);
        let slide22scene = new Scene(chapter4scenes[20]);
        let slide23scene = new Scene(chapter4scenes[21]);


        let slide8Choices = new Choice(
            chapter4scene8options[0],
            chapter4scene8options[1],
            chapter4scene8options[2],
            chapter4scene8options[3]);

        let slide11Choices = new Choice(
            chapter4scene11options[0],
            chapter4scene11options[1],
            chapter4scene11options[2],
            chapter4scene11options[3]);

        let slide3namePlate = ['nameInput',"HARU"];
        let slide3convoJ = [
            "ごめん、お待たせ！今日は掃除当番で遅くなっちゃった。", 
            "全然いいよ。あつ森で庭の花をアレンジ夢中だったから。"];
        let slide3convoE = [
            "Sorry to keep you waiting. I was in charge of cleaning today.", 
            "That's okay. I was focused on my Animal Crossing garden anyways."];
        let slide3texts = new Txt(slide3namePlate, slide3convoJ, slide3convoE, null);

        let slide4namePlate = ['nameInput', "HARU"];
        let slide4convoJ = [
            "おー。見せて。", 
            "まだアレンジ中だけど。もっと綺麗にしたいんだ。"];
        let slide4convoE = [
            "Oh, cool. Can I see?", 
            "I'm still in the process of arrangement. I want to make it nicer."];
        let slide4texts = new Txt(slide4namePlate, slide4convoJ, slide4convoE, null);
        

        let slide6namePlate = ['nameInput'];
        let slide6convoJ = [
            "ニンテンドースイッチはいいよねー。"];
        let slide6convoE = [
            "Nintendo Switch is awesome."];
        let slide6texts = new Txt(slide6namePlate, slide6convoJ, slide6convoE, null);

        let slide7namePlate = ["HARU"];
        let slide7convoJ = [
            ""+nameInput+"は今まででどのゲーム機が一番いいと思う?"];
        let slide7convoE = [
            "Which game console is your favorite "+nameInput+"?"];
        let slide7texts = new Txt(slide7namePlate, slide7convoJ, slide7convoE, null);

        let slide8namePlate = ['nameInput'];
        let slide8convoJ = [
            "一番好きなゲーム機は…。"];
        let slide8convoE = [
            "My favorite gaming device is..."];
        let slide8texts = new Txt(slide8namePlate, slide8convoJ, slide8convoE, "choiceBox");

        let slide9namePlate = ["HARU"];
        let slide9convoJ = [
            "いいよね！ゲームって最高。"];
        let slide9convoE = [
            "I love it! Games are awesome."];
        let slide9texts = new Txt(slide9namePlate, slide9convoJ, slide9convoE, null);

        let slide10namePlate = ["HARU","HARU",'nameInput',"HARU","HARU","HARU","HARU",'nameInput',"HARU"];
        let slide10convoJ = [ 
            "将来はゲームデザイナーになりたいんだ。", 
            "デザインもプログラミングもしてみたい。",
            "すごーい。なんでそうしようと思ったの？",
            "ゲームはどんな世界観でも生み出せるじゃん？",
            "今の世界では表現できない自分の在り方とかを…",
            "…クリエイティブに体験できて、すごくワクワクするの。",
            "だからもっとそんな空間を作れる人になりたいなって。",
            "へー楽しみだね！",
            ""+nameInput+"は将来楽しみなことある?"];
        let slide10convoE = [
            "I want to be a game designer in the future.",
            "I want to experience both designing and coding games. ",
            "Oh cool! What got you so interested?",
            "You know how games can create imaginary worlds?",
            "It's so exciting to experience creative ways of being that are not...",
            "...possible in the current world we live in. ",
            "I want to be a person who can create more of those experiences.",
            "Wow, it sounds so exciting!",
            "Are you looking forward to anything in the future, "+nameInput+"?"];
        let slide10texts = new Txt(slide10namePlate, slide10convoJ, slide10convoE, null);

        let slide11namePlate = ['nameInput'];
        let slide11convoJ = [ 
            "将来楽しみなのは…。"];
        let slide11convoE = [
            "I'm looking forward to..."];
        let slide11texts = new Txt(slide11namePlate, slide11convoJ, slide11convoE, "choiceBox");

        let slide12namePlate = ["HARU"];
        let slide12convoJ = [ 
            "そうだね。不安もあるけど、でも楽しみ！"];
        let slide12convoE = [
            "I agree. I have worries but also excitement!"]
        let slide12texts = new Txt(slide12namePlate, slide12convoJ, slide12convoE, null);

        let slide15namePlate = ["HARU",'nameInput',"HARU",'nameInput',"HARU","HARU","HARU","HARU","HARU","HARU","HARU",'nameInput',"HARU","HARU","HARU",'nameInput',"HARU",'nameInput','nameInput'];
        let slide15convoJ = [ 
            ""+nameInput+",伝えなきゃいけないことがあるんだ。",
            "どうしたの？",
            "私、転校するの。",
            "え？なんで？引っ越しちゃうの？",
            "引っ越さないんだけど…",
            "トランスジェンダーって知ってる？",
            "男の子や女の子が自分の体と生まれた時に与えられた性別に…",
            "…違和感を持つことなんだけど。",
            "私は昔から自分のことを女の子だとしか思えなくて…",
            "…毎日それを否定して生きるのが本当に苦しいの。",
            "急にごめんね。",
            "そうだったんだ。",
            "校長先生にも何度も話したんだけどわかってもらえなくて。",
            "だからもっと理解してくれる学校に転校するの。",
            "ごめん。何いってるか分かんないよね。",
            "…。",
            "友達辞めたかったらいいよ。迷惑かけたくないから。",
            "いやっ友達でい続けたいよ！",
            "…ごめんでも…今はなんて言えばいいのかちょっと…。"];
        let slide15convoE = [
            "Hey "+nameInput+". There's something I have to tell you. ",
            "What's up? ",
            "I'm transferring schools.",
            "What? Why? Are you moving away?",
            "No I'm not moving...",
            "Do you know what transgender means?",
            "It's when a boy or a girl doesn't feel comfortable...",
            "...in their own body and assigned sex.",
            "I've always been a girl inside...",
            "...and it's been so hard living each day pretending that I'm not.",
            "I know it must feel sudden for you.",
            "I had no idea.",
            "I've spoken to our professor, but he just doesn't understand.",
            "So I'm moving to a more LGBT+ friendly school in the neighborhood.",
            "I'm sorry. I'm probably not making sense.",
            "...",
            "It's okay if you want to stop being friends. I don't want to be a burden.",
            "No! I want to stay friends. ",
            "I just... don't know what to say..."]
        let slide15texts = new Txt(slide15namePlate, slide15convoJ, slide15convoE, null);

        let slide16namePlate = ["HARU","HARU","HARU","HARU"];
        let slide16convoJ = [ 
            "大丈夫だよ。",
            "ゆっくりで大丈夫だから、質問あったらなんでも聞いてね。",
            "でもまずは転校する。自分のためにしなきゃいけないことなの。",
            "ごめんね、"+nameInput+"。"];
        let slide16convoE = [
            "That's okay.",
            "You can take your time and ask me anything.",
            "But for now, I have to go to this new school. I have to do this for myself.",
            "I'm sorry, "+nameInput+"."];
        let slide16texts = new Txt(slide16namePlate, slide16convoJ, slide16convoE, null);

        let slide17namePlate = ['nameInput','nameInput',"HARU"];
        let slide17convoJ = [ 
            "わかった。大丈夫だよ。",
            "他のみんなには話した？",
            "まだトランスジェンダーのことは校長先生と保健室の先生以外には話してないんだ。"];
        let slide17convoE = [
            "I understand that. It's okay.",
            "Have you told anyone else?",
            "I haven't told anyone from school about being transgender besides the principal and the nurse."];
        let slide17texts = new Txt(slide17namePlate, slide17convoJ, slide17convoE, null);

        let slide18namePlate = ["HARU","HARU","HARU",'nameInput',"HARU"];
        let slide18convoJ = [ 
            ""+nameInput+"の家族には言っていいけど、クラスのみんなには絶対言わないでね。約束して。",
            "…まだみんなには知られたくないの。",
            "でも"+nameInput+"は友達だし言わなきゃって思って",
            "わかった。クラスには絶対言わない。約束する。",
            "ありがと。"];
        let slide18convoE = [
            "You can tell your family, but can you promise that you won't tell our classmates? You have to promise.",
            "I'm not ready for them to know. ",
            "But you're my friend and I felt like I had to tell you.",
            "Okay. I won't tell our classmates. I promise.",
            "Thanks."];
        let slide18texts = new Txt(slide18namePlate, slide18convoJ, slide18convoE, null);

        let slide19namePlate = ["HARU",'nameInput'];
        let slide19convoJ = [ 
            "うん、じゃー、またね。",
            "うん。またね。"];
        let slide19convoE = [
            "Okay... well, I guess I'll see you around then.",
            "Yeah, I'll see you soon."];
        let slide19texts = new Txt(slide19namePlate, slide19convoJ, slide19convoE, null);

        let slide22convoJ = [ 
            "好きな服を着て自分らしく生きたい。",
            "でも周りの人に迷惑をかけたくない。"];
        let slide22convoE = [
            "I'd like to dress how I like and express myself.",
            "But I'm worried about becoming a burden to the people around me."];
        let slide22texts = new Txt(null, slide22convoJ, slide22convoE, null);

        //Slide(scene, nextButton, choices, texts, audio, textInput)
        this.slides.push(new Slide(slide1scene, nextSlideButton, null, null, null, null, null, null, null, null )); //1
        this.slides.push(new Slide(slide2scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //2
        this.slides.push(new Slide(slide3scene, nextSlideButton, previousSlideButton, null, slide3texts, null, null, null, null )); //3
        this.slides.push(new Slide(slide4scene, nextSlideButton, previousSlideButton, null, slide4texts, null, null, null, null )); //4
        this.slides.push(new Slide(slide5scene, nextSlideButton, previousSlideButton, null, null, aniCrossSound, 1, null, null )); //5
        this.slides.push(new Slide(slide6scene, nextSlideButton, previousSlideButton, null, slide6texts, null, null, null, null )); //6
        this.slides.push(new Slide(slide7scene, nextSlideButton, previousSlideButton, null, slide7texts, null, null, null, null )); //7
        this.slides.push(new Slide(slide8scene, nextSlideButton, previousSlideButton, slide8Choices, slide8texts, null, null, null, null )); //8
        this.slides.push(new Slide(slide9scene, nextSlideButton, previousSlideButton, null, slide9texts, null, null, null, null )); //9
        this.slides.push(new Slide(slide10scene, nextSlideButton, previousSlideButton, null, slide10texts, null, null, null , null)); //10
        this.slides.push(new Slide(slide11scene, nextSlideButton, previousSlideButton, slide11Choices, slide11texts, null, null, null , null)); //11
        this.slides.push(new Slide(slide12scene, nextSlideButton, previousSlideButton, null, slide12texts, null, null, null, null )); //12
        this.slides.push(new Slide(slide13scene, nextSlideButton, previousSlideButton, null, null, null, null, null, null )); //13
        this.slides.push(new Slide(slide14scene, nextSlideButton, previousSlideButton, null, null, null, null , null, null)); //14
        this.slides.push(new Slide(slide15scene, nextSlideButton, previousSlideButton, null, slide15texts, null, null, null , null)); //15
        this.slides.push(new Slide(slide16scene, nextSlideButton, previousSlideButton, null, slide16texts, null, null, null, null)); //16
        this.slides.push(new Slide(slide17scene, nextSlideButton, previousSlideButton, null, slide17texts, null, null, null , null)); //17
        this.slides.push(new Slide(slide18scene, nextSlideButton, previousSlideButton, null, slide18texts, null, null, null, null )); //18
        this.slides.push(new Slide(slide19scene, nextSlideButton, previousSlideButton, null, slide19texts, null, null, null , null)); //19
        this.slides.push(new Slide(slide20scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //20
        this.slides.push(new Slide(slide21scene, nextSlideButton, previousSlideButton, null, null, null, null, null , null)); //21
        this.slides.push(new Slide(slide22scene, nextSlideButton, previousSlideButton, null, slide22texts, null, null, null, null)); //22
        this.slides.push(new Slide(slide23scene, nextChapterButton, previousSlideButton, null, null, null, null, null, null )); //23
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