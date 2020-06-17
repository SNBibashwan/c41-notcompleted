class Player{
    constructor(){
        this.image = loadImage('images/car2.png');
        this.y = 400;
        this.x = width/2 + 20;
    }

    display(){
        image(this.image,this.x,this.y, 60,100);
    }

    move(){
        this.keyPressed = function(){

            if(keyCode === RIGHT_ARROW){
                this.x += 40;
            }
        }
    }
}