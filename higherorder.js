const area=function(radius){
    return Math.PI*radius*radius;
}
const dia=function(radius){
    return radius*2;
}
const calc=function(radius,logic){
    res=[];
    for(i=0;i<radius.length;i++)
    res.push(logic(radius[i]))
    return res;
}
console.log(calc([2,3,4],area));