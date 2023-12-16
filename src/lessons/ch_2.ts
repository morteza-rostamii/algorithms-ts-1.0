function lesson1() {

  (() => {
    /* 
    # find sum of n natural numbers ?
    
    # what are natural numbers: 
      # (postive integers) 1 to infinity

    # what is the formula to calc N natural numbers;
      # n = 5 =: 1 + 2 + 3 + 4 + 5 =15
      # formula : s sub(n) = n(n + 1) / 2
    */

    // big o =: f(x) = x =: linear time
    function sumOfNaturalNums(n: number) {
      let sum = 0;

      for (let i=1; i <= n; i++) {
        sum += i;
      }

      return sum;
    } 

    const sum1 = sumOfNaturalNums(5);
    console.log(sum1)

    // second method

    // f(x) = 1 =: constant time
    function sumOfNaturalNums2(n: number) {
      // as input=n increases =: runs only 1 time. 
      return n * (n + 1) / 2;  
    }

    const sum2 = sumOfNaturalNums2(5);
    console.log(sum2); // 15

  })()

}

export function ch_2() {
  lesson1();
} 