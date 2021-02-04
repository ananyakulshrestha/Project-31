class Plinko{
    constructor(x, y, radius){
        var options = {
            restituition : 0.4
        }

        this.radius = radius;
        this.body = Bodies.circle(x,  y, 10);
    }

    display(){
        var pos = this.body.position;
    }
}