function Turtle(s, g, sp, si)
{

    this.species = s;
    this.gender = g;
    this.speed = sp;
    this.size = si;

    this.groundCovered = function(distance){

        return this.speed*distance;

    };
}

function type(){

    let painted = new Turtle('Southern Painted Turtle', 'Male', 2, 6);
    console.log(painted.groundCovered(40));

}
type();

function Door(thing){
    this.openState = thing;

    this.changeState = function(){
        this.openState = !this.openState;
        return this.openState;
    };
}
function thing(){
    let blarb = new Door(false);
    console.log(blarb.changeState());
}
thing();
