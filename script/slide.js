class Slide {
    constructor(scene, nextButton, backButton, choices, texts, audio, amp, textInput, slider) {
        this.scene = scene;
        this.nextButton = nextButton;
        this.backButton = backButton;
        this.choices = choices;
        this.texts = texts;
        this.audio = audio;
        this.amp = amp;
        this.textInput = textInput;
        this.slider = slider;

        // this.duration = random(0.3, 1)
    }

    display() {
        if(this.scene) {
            this.scene.display();
        }

        if (this.choices) {
            this.choices.display();
        }

        //do not show the button is the choices are not chosen yet
        if (this.choices) {
            if (this.choices.chosen()) {
                this.choices.drawButton();
            } 
        } else {
            if (this.nextButton){
                this.nextButton.display();
            }
             if (this.backButton) {
            this.backButton.display()
            }
        }

        if (this.texts) {
            this.texts.display();
        }

        if(this.textInput) {
            this.textInput.display();
        }

        if (this.slider) {
            this.slider.display();
        }
    }

    mousePressed() {
    
        if (this.nextButton) {
            if (this.isCompleted()) {
                if(!this.textInput) {
                    this.nextButton.mousePressed();
                 }    
            }
        }

        if (this.textInput) {
            if (this.textInput.nameChosen) {
                this.nextButton.mousePressed();
            }
        }

        if(this.backButton) {
            if (this.firstText()) {
                this.backButton.mousePressed();
            }
   
            if (!this.texts && !this.choices) {
                this.backButton.mousePressed();
            }
        }
        
        if (this.choices) {
                this.choices.mousePressed();
        }

        if(this.slider) {
            this.slider.mousePressed();
        }

        // if (this.textInput) {
        //     if (this.textInput.submitName()){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

    }

    mouseReleased() {
        if(this.slider) {
            this.slider.mouseReleased();
        }       
    }

    mouseDragged() {
        if(this.slider) {
            this.slider.mouseDragged();
        }  
    }

    keyPressed(){
        if (this.nextButton) {
            if (this.isCompleted()) {
                this.nextButton.keyPressed();
            } 
        }  
        
        if(this.backButton) {
            if (this.firstText()) {
                this.backButton.keyPressed();
            }
        }
    }

    //tried to fix text audio playing when any area of screen is selected...
    playAudio() {
        if (this.audio) {
            if (this.nextButton.mouseInRect()){
                this.audio.play(0,1,this.amp);
            }
        }

        if(this.texts){
            if (this.texts.checkNamePlate()&&this.nextButton.mouseInRect()){
                talkingSound.play(0.3, 1, 0.2, random(0, 2), random(0.5, 1));  
            }
            
        }
    }

    isCompleted() {
        
        //if the slide has no image or choices, it is complete
        if (!this.texts && !this.choices && !this.textInput) {
            return true;
        }
 
        //if the slide has image or choices, check if the elements have completed
        if (this.texts) {
            if(this.texts.allConvoDisplayed()) {
                return true;
            }else if (this.nextButton.mouseInRect() || keyCode === RIGHT_ARROW){
                this.texts.nextText();
                return false;
            }
        }
        
        if (this.choices) {
            if (this.choices.chosen()) {
                return true;
            } else {
                return false;
            }
        } 

    }

    firstText() {
        if (!this.texts && !this.choices) {
            return true;
        }

        //if the slide has image or choices, check if its the first text of the slide
        if (this.texts) {
            if(this.texts.firstText()) {
                return true;
            } else if (this.backButton.mouseInRect() || keyCode === LEFT_ARROW){
                this.texts.previousText();
                return false;
            }
        }

    }

}