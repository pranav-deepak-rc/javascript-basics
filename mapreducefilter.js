arr=[1,2,3,4,5]
arr1=arr.reduce(function(res,item){
    return res+item
},0)
console.log(arr1)