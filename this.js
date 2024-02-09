function getThis() {
    this.n=this.n*2;
    return this;
  }
function gett()
{
    this.name="obj:"+this.n;
    return this;

}
  const obj1 = { n:1};
  const obj2 = { n:2};
  
  obj1.gett= gett;
  obj2.gett= gett;
  
  console.log(obj1.gett()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.gett()); // { name: 'obj2', getThis: [Function: getThis] }
  