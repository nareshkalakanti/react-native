function  factorial(n)
{
  if (n == 1) // since factorial of 1 is 1
    return 1;
  else //if it is other than 1 or greater than 1
    return n * factorial(n - 1);
}
var result = factorial(5);
console.log(result);

