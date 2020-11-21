class ball {
    constructor(x,y,radius){
        var options = {
            isStatic:false
                        
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,this.radius,options);
        this.radius = 10;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
        this.body.shapecolor = this.color
    }
    display(){
        var pos = this.body.position;
        var an = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(an);
        noStroke();
        fill(this.color);
        ellipse(pos.x, pos.y,this.radius,this.radius);
        pop();
    }
}  