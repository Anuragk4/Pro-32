class Block {
    constructor(x, y, width, height) {
      
      var options = {
          'restitution':0.8,
          'friction':0.6,
          'density':1.0,
          
      }
      this.visibility=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
 
if(this.body.speed<3){
  //display();
}
else{
push()
//World.remove(world,this.body)
this.Visiblity=this.Visiblity-5
tint(255,this.Visiblity)
pop()
}
  
   push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();

    }
    Score(){
      if (this.Visiblity<0 && this.Visiblity>-105)
      score++
    
  }
  };