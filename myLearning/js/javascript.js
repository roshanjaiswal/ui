console.log("num")
var num = 10
// function getRangeExpo(val){
//     var start = 1;
//     var pointer= start;
//     while(val>pointer*pointer){
//         pointer=pointer*2
//     }
//     return pointer;
// }
 console.log(num)

// var last =  getRangeExpo(num);
// var start = last/2;
var start = 1
function linearSearch(val){
    while(true){
        if(start*start > val) return start-1;
        else start = start +1;
    }
}



var reqVal = linearSearch(num);
console.log(reqVal)