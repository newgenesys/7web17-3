class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    add(a,b){
        return (`(${this.x + a},${this.y + b})`);
    }
    minus(a,b){
        return (`(${this.x - a},${this.y - b})`);
    }
    get(x,y){
        return (`x is ${this.x - 0} units from 0, \ny is ${this.y - 0} units from 0,`);
    }
}
//Sample Test
let vector1 = new Vec(5,6);
console.log(vector1.add(77,6));
console.log(vector1.minus(77,6));
console.log(vector1.get(77,6));