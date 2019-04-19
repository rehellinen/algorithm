const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const uniqueMorseRepresentations = (words) => {
  const set = new Set()
  for (let word of words) {
    let morse = ''
    for (let letter of word) {
      morse += morseCode[letter.charCodeAt(0) - 97]
    }
    set.add(morse)
  }
  return set.size
}
