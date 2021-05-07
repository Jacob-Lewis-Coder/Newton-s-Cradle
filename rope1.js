class Rope {
    constructor(body1, body2, xOffset){
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x : xOffset, y : 0},
            length : 300,
            stiffness : 0.2
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.xOffset = xOffset;
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(4);
        stroke("white")
        
        line(point1.x, point1.y, point2.x + this.xOffset, point2.y);
    }
}