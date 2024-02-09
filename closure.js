function fun()
{
    v1="ram"
    function dis(){
        console.log(v1)

    }
    return dis;
}
myfun=fun();
myfun();