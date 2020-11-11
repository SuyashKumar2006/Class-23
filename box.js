class BOX{
    constructor(x,y,width,height){
        //initialize the object
        var options={
            restitution:0.3,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
//define the functions
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}

}

