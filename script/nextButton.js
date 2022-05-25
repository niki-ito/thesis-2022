class NextButton{
    constructor(buttonImage, callback) {
        this.buttonImage = buttonImage;
        this.callback = callback;
        this.xpos = windowWidth/6*5;
        this.ypos = windowHeight/15*13;
        this.wh = windowWidth/8;

    }

    display() {
        image(this.buttonImage, this.xpos, this.ypos, this.wh, this.wh);
    }

    mousePressed() {
        if (this.mouseInRect()) {
            chapters[currentChapterIndex].nextSlideButton();
        }

        // if (this.callback) {
        //     // href = 'http://our-likes.com/';
        // }

        if(this.callback){
            let end = createA('../../index.html',"End Game");
            end.position (windowWidth/2-end.width/2, windowHeight/2);
            end.style('font-family','wheatoncapitals');
            end.style('left','30vw');
            end.style('text-decoration','none');
            end.style('color','black');
            end.style("background-color","#DEF7E2");
            end.style("border-radius","1vh");
            end.style("padding","2vh");
            end.style("font-size","3vh");
            nextChapSound.play(0,1,0.3);
        }
    }

    keyPressed() {
       if (keyCode === RIGHT_ARROW) {
            chapters[currentChapterIndex].nextSlideButton();
        } 
    }

    mouseInRect() {
        if (mouseX > this.xpos && mouseX < this.xpos + this.wh && mouseY > this.ypos && mouseY < this.ypos + this.wh) {
            return true;
          } else {
            return false;
          }      
    }

}