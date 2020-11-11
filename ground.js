class GROUND{

constructor(){

 var    gOptions={
        isStatic:true
    }
    this.body = Bodies.rectangle(200,370,400,50,gOptions)
    this.height=50;
    this.width=400;
    World.add(world,this.body);

}
display2(){
    var position=this.body.position
    rectMode(CENTER);
    rect(position.x,position.y,this.width,this.height);
}
}    
