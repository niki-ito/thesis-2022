class Txt {
    constructor(namePlate, convoJ, convoE, choiceBox){
        this.namePlate = namePlate;
        this.convoJ = convoJ;
        this.convoE = convoE;
        this.choiceBox = choiceBox;

        this.currentConvoIndex = 0;

        this.sceneH = windowWidth*2.16533333;
        this.verticleGrids = this.sceneH/26;
        this.horizontalGrids = windowWidth/10;
        this.topOfScene = windowHeight/2-this.sceneH/2;
        
        this.firstTimeDisplaying = true;
    }

    display() {
        if(this.firstTimeDisplaying){
            this.replaceAllUndefinedWithName();
            this.firstTimeDisplaying = false;
        }
        //display namePlate
        if (this.choiceBox) {
            if(this.namePlate) {
                textFont(minaFontB);
                textSize(windowHeight/35);
                text(this.namePlate[this.currentConvoIndex],this.horizontalGrids, this.topOfScene+this.verticleGrids*4.7);
            }
    
            //display Japanese text
            textFont(corpFontB);
            textSize(windowHeight/40);
            textWrap(CHAR);
            text(this.convoJ[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*6, this.horizontalGrids*8);
    
            //display English text
            textFont(minaFontB);
            textWrap(WORD);
            text(this.convoE[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*7, this.horizontalGrids*8); 
        } else {

            if(this.namePlate) {
                textFont(minaFontB);
                textSize(windowHeight/35);
                text(this.namePlate[this.currentConvoIndex],this.horizontalGrids, this.topOfScene+this.verticleGrids*16.5);
            }
    
            //display Japanese text
            textFont(corpFontB);
            textSize(windowHeight/45);
            textWrap(CHAR);
            text(this.convoJ[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*18, this.horizontalGrids*8);
    
            //display English text
            textFont(minaFontB);
            textWrap(WORD);
            text(this.convoE[this.currentConvoIndex], this.horizontalGrids, this.topOfScene+this.verticleGrids*19.3, this.horizontalGrids*8);       
        }

    }

    replaceAllUndefinedWithName() {
        for(let i = 0; i < this.namePlate.length; i++){
            this.namePlate[i] = this.namePlate[i].replace('undefined', nameInput);
            this.namePlate[i] = this.namePlate[i].replace('NaN', nameInput);
        }

        for(let j = 0; j < this.convoJ.length; j++){
            this.convoJ[j] = this.convoJ[k].replace('undefined', nameInput);
        }

        for(let e = 0; e < this.convoE.length; e++){
            this.convoE[e] = this.convoE[e].replace('undefined', nameInput);
        }
    }


    allConvoDisplayed() {
        if (this.currentConvoIndex === this.convoJ.length - 1) {
            return true;
          } else {
            return false;
          }      
    }

    firstText() {
        if(this.currentConvoIndex === 0){
            return true;
            } else {
            return false;
            }   
    }


    nextText() {
        nextSlideSound.play(0, 0.6, 0.1);
        this.currentConvoIndex ++;
    }

    previousText() {
        nextSlideSound.play(0, 0.6, 0.1);
        this.currentConvoIndex --;
    }

    checkNamePlate() {
        if(this.namePlate){
            if(this.namePlate[this.currentConvoIndex] === nameInput){
                return false;
            }else {
                return true;
            }
        }
    }

}
