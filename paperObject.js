class PaperObject{
       constructor(x,y,radius){
           var options={
               'isStatic':false,
               'restitution':0.3,
               'friction':0.5,
               'density':0.3
           }
this.body = Bodies.circle (x,y,radius,options);
this.x = x;
this.y = y;
this.radius = radius;
World.add(world,this.body);
        } 
    

display(){
    
    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    fill("white");
ellipse(0,0,this.radius,this.radius);
pop();
}
};






