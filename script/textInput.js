class TxtInput {
    constructor() {
        // this.input;
        // this.instructions;
        // this.submitButton;

        this.input = createInput();
        this.input.position(windowWidth/2-this.input.width/2, windowHeight/2);
        this.input.style("border","2px solid black");
        this.input.style("background-color","#DEF7E2");

        this.submitButton = createButton('submit');
        this.submitButton.position(windowWidth/2-this.submitButton/2, windowHeight/2+this.input.height);
        const correctContextSubmitName = this.submitName.bind(this);
        this.submitButton.mousePressed(correctContextSubmitName);

        this.nameChosen = false;
      
        // //display English text
        // textFont(minaFontB);
        // text(th
        
        this.instructionsJ = createElement('h2', '私の名前は…。');
        this.instructionsJ.position(windowWidth/2-this.input.width/2, windowHeight/5*1.8);
        this.instructionsJ.style('font-family','wheatoncapitals');
        this.instructionsE = createElement('h2', 'My name is...');
        this.instructionsE.position(windowWidth/2-this.input.width/2, windowHeight/5*2);
        this.instructionsE.style('font-family','mina');

        this.hideElements();
    }

    display() {
        if(!this.nameChosen) {
            this.showElements();
        }
    
    }

    mousePressed() {
    }

    hideElements() {
        this.input.hide();
        this.instructionsJ.hide();
        this.instructionsE.hide();
        this.submitButton.hide();
    }

    showElements() {
        this.input.show();
        this.instructionsJ.show();
        this.instructionsE.show();
        this.submitButton.show();
    }

    submitName() {
        nameInput = this.input.value();
        this.hideElements();
        this.nameChosen = true;
    }
}