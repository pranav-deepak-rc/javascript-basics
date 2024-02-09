function * fibgen()
{
    let cur=0;
    let next=1;
    while(1)
    {
        yield cur;
        [cur,next]=[next,cur+next];
    }
}
fib=fibgen();
for(i=0;i<5;i++)
{
    console.log(fib.next().value)
}