class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,r,options);
       this.x=x;
       this.y=y;
       this.r=r
       this.image=loadImage("images/mango.png");
       World.add(world,this.body);
    }
   
display(){
       var pos=this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);

   
}
}
