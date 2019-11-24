// Iteration 1: Names and Input

const hacker1 = 'Rafael'
const hacker2 = 'Eli'


console.log(`The Driver name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

const newDriver = [].map.call(hacker1, (x) => x).join(' ').toUpperCase()
console.log(newDriver)

const newNavigator = [].map.call(hacker2, (x) => x).reverse().join('')
console.log(newNavigator)

const arr = [hacker1, hacker2].sort()

if (arr[0] === arr[1]) {
  console.log("What?! You both have the same name?")
} else if (arr[0] === hacker1) {
  console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
}

// BONUS

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor posuere urna, at mattis lorem maximus quis. Praesent luctus nunc sed mi ultrices feugiat. Praesent tristique tempus risus vitae lobortis. Phasellus placerat, tellus nec fermentum scelerisque, felis enim hendrerit libero, eget semper ligula nunc vitae neque. Mauris posuere sagittis est, in bibendum urna rutrum quis. Nulla facilisi. Aliquam nulla elit, rhoncus id posuere et, tristique sit amet est. Praesent blandit quis purus sit amet pulvinar. Etiam tellus ante, vestibulum sed risus et, suscipit ultricies est. Etiam et rhoncus purus. Duis sit amet pharetra sem. Proin ipsum est, pharetra sit amet accumsan non, feugiat sit amet nulla. Nunc nec lectus ac lectus dapibus volutpat. Ut accumsan, leo quis congue ornare, mauris augue faucibus enim, ut dignissim nisi lorem id tellus. Curabitur hendrerit tortor est, ac blandit purus ultrices ac.
Fusce pharetra ultricies feugiat. Nullam rhoncus ut nisi vel fringilla. Fusce sollicitudin dolor a consectetur porttitor. Nullam at ornare elit. Praesent eget porttitor ligula, a suscipit metus. Maecenas lobortis lacus vitae turpis interdum tincidunt. Curabitur sed lectus id erat eleifend venenatis.
Ut blandit faucibus odio nec lobortis. Cras elit sem, gravida sit amet scelerisque sed, posuere ut nulla. Nunc tempor, leo lobortis tempor consectetur, erat massa congue massa, vitae lobortis justo leo et diam. Sed iaculis, sapien vitae eleifend porttitor, nisi lacus congue nulla, a tincidunt justo risus vel nulla. Proin eget libero pharetra lacus mattis gravida. Suspendisse ullamcorper ex et ligula dictum sollicitudin. Morbi diam dolor, ornare sit amet risus sit amet, fermentum pharetra est. Sed hendrerit efficitur mi id tempor. Phasellus non metus sem. Morbi varius imperdiet urna et tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`

const words = lorem.split(' ')

console.log(words.length)


const phraseToCheck = ["A man, a plan, a canal, Panama!",
  "Amor, Roma", "race car",
  "stack cats", "step on no pets",
  "taco cat", "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon"
]

const wordsPolindrome = phraseToCheck.forEach((elem) => {
  const frase = elem.split('').join(' ')
  const polindrome = elem.split('').reverse().join(' ')
  frase === polindrome ? console.log(`${elem} é um polindrome`) : console.log(`${elem} não é um polindrome`)
})

console.log(wordsPolindrome)