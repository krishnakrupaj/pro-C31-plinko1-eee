class plinko {
    constructor(x,y,radius){
        var options = {
            isStatic:true            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 10;
    }
    display(){
        var pos = this.body.position;
        fill(255,255,255);
        ellipse(pos.x, pos.y,this.radius);
    }
}