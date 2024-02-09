function Iterator(array){
    nextin=0;
    return {
        next: function(){
            if(nextin<array.length)
            {
                return{
                    value: array[nextin++],
                    done:false,
                }
            }
            else
            {
                return{
                    value: NaN,
                    done: true
                };
            }
        },
    };
}
arr1=[1,2,3,4,5];
//arr=Iterator(arr1);
arr=arr1[Symbol.iterator]();
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())