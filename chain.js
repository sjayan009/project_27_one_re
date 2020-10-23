class rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var Options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(Options);
    }

    display(){
        
        Point_A = this.rope.bodyA.position;
        Point_B = this.rope.bodyB.position;

        strokeWeight(2);
        
        var Anchor1X = Point_A.x;
        var Anchor1Y = Point_A.x;

        var Anchor2X = Point_B.x + this.offsetX;
        var Anchor2Y = Point_B.y + this.offsetY;
        
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        

    }

};