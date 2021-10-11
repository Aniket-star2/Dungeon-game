class Wall extends BaseClass {
      constructor(x, y, width, height){
        super(x,y,width,height);
    if (this.width > 50){
        this.image = loadImage("Images/walls (1).jpg");
    }else {
        this.image = loadImage("Images/walls (2).jpg");
    }
      }
}    