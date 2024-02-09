function fib(n,memo)
{
    memo=memo || {};//initisal;ize it to empty if it is not there
    if(memo[n])
    return n;//if memo has an entry for n already, return it back
    if(n<=1)
    return 1;///base case
    return memo[n]=fib(n-1,memo)+fib(n-2,memo);

}
let memo=[];
console.log(fib(4,memo));