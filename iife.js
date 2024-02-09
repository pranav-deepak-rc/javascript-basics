function f1()
{
    console.log("hello world")
}
//iife
(function(){
    
    console.log( "I am invoked no matter what")
})()
f1()