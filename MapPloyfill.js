Array.prototype.myMap = function(fn,context){
    let result = [];
    for(let index=0;index<this.length;index++){
        result.push(fn.call(context,this[index],index,this));
    }
    return result;
}


let arr = [1, 2, 4, 5, 6, 4];
let context = {
  multiplier: 7,
  offset: 10
};

let newArr = arr.myMap(function(value) {
  return value * this.multiplier + this.offset;
}, context);

console.log(newArr);  // [17, 24, 38, 45, 52, 38]
