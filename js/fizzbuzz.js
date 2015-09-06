/* Function to print numbers from 1 to n to the page, but for multiples of
   3 print "Fizz", for multiples of 5 print "Buzz", and multiples
   of both 3 and 5 print "FizzBuzz" */
fizzbuzz = function ( n ) {
  var i , numlist;
  numlist = "The numbers: <br>";
  for ( i = 1; i <= n; i++ ) {
    if ( i%15 == 0 ) {
      numlist += "<span style='color: #00a54e'>FizzBuzz</span> ";
    } else if ( i%3 == 0 ) {
      numlist += "<span style='color: #00a9a4'>Fizz</span> ";
    } else if ( i%5 == 0 ) {
      numlist += "<span style='color: #8DCB41'>Buzz</span> ";
    } else {
      numlist += i + " ";
    }
  }
  return numlist;
}
