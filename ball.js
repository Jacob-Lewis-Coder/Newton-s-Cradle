class Ball { 
    constructor(x,y){ 
        var options = { 
            restitution : 1.0, 
            // friction : 0.1, 
            // isStatic : true 
        } 
        this.body = Bodies.circle(x,y,40,options); 
        this.radius = 40; 
        World.add(world,this.body);
    } 
    display(){ 
        var pos = this.body.position;
        var angle = this.body.angle 
        ellipseMode(RADIUS); 
        push() 
        translate(pos.x,pos.y);
        rotate(angle); 
        fill("red"); 
        ellipse(0,0,40,40); 
        pop() 
    } 
}