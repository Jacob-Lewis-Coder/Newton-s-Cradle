class Rope{
    constructor(body1, body2, offsetX){       
        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB: {x:offsetX},
            length: 300,
            stiffness : 0.5
        }
       this.rope = Constraint.create(options);
       this.offsetX = offsetX;
       World.add(world,this.rope);
       console.log(this.rope);
    }
 

    display(){
       var point1 = this.rope.bodyA.position;
       var point2 = this.rope.bodyB.position;
 
        // push();
        
        line(point1.x,point1.y,point2.x+this.offsetX,point2.y);
        //fill("white");
        // pop();
        
    }
 }