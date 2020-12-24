class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true



        }
        this.image=boy
        this.umbrella=Bodies.circle(x,y,300,options)
        World.add(world,this.umbrella)
        
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.umbrella.position.x,this.umbrella.position.y,300,300)
        pop()
    }
}
