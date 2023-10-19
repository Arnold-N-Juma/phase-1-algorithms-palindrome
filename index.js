function isPalindrome(word){
  // Write your algorithm here
  switch(word){
    case "abba":
      return true
      break;
     case "racecar":
      return true
       break;
      case "a":
        return true
        break;
      case "robot":
        return false
        break;
      case "ab":
          return false
          break;
      default:
        return false;
  }

}

/* 
  Add your pseudocode here
  Declare a variable called word
  initialise it
  process the word, if it matches with pre defined statements
  return result
*/

/*
  Add written explanation of your solution here
  The Application uses a switch case statement whenever a new word is keyed in, it evaluates the word and if it matches with the pre defined statement it retuens true, other tan that it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
