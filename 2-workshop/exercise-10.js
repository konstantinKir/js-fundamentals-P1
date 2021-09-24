function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let number = 0; number <= 7; number++) {
    if (number === 1) {
      console.log('#');
    } else if (number === 2) {
        console.log('##');
      } else if (number === 3) {
        console.log('###');
      }else if (number === 4) {
        console.log('####');
      }else if (number === 5) {
        console.log('#####');
      }else if (number === 6) {
        console.log('######');
      }else if (number === 7) {
        console.log('#######');
      }
  }


  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
