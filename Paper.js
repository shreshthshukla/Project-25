class Paper{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        this.image = loadImage("paper.png")
        // this.diameter = 50;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,50,50);
        pop();
    }
}