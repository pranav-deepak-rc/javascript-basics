let promise=new Promise(function (resolve,reject){
    x='iron';
    y='iron';
    if(x===y)
    resolve();
    else
    reject();
});
promise.then(function(){
    console.log("Success");
}).catch(function(){
    console.log('error');
})
