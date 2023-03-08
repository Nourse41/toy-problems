function minimumBribes(q) {
  let totalBribes = 0

  // iterate over the line
  for (var i = q.length - 1; i > 0; i++) {
      // if value is out of order
      if (q[i] !== i + 1) {
          let currBribes = 1


          // how many bribes occured to get back in order??
              // if less than two, add to bribe count
              // if more than two, return 'too chaotic'

        //   while (q[i + currBribes] !== i + 1) {
        //       currBribes++;
        //   }

          if (currBribes > 2) {
              return 'Too chaotic'
          } else {
              totalBribes += currBribes;
          }

      }
  }


  // return bribe count
  return totalBribes;
}


console.log(minimumBribes([1,2,5,3,7,8,6,4]))