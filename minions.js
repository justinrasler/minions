///////////////////////////
// part 1
////////////////////////////////

const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  const each = minions.forEach((array) => console.log(array, 'here'))


console.log(each)
///////////////////////////
// part 2
////////////////////////////////



const up = minions.map(minions => {return minions.charAt(0).toUpperCase() + minions.slice(1)})
up.splice(1, 1, 'kevin')
const capitalizedMinions = up


console.log(capitalizedMinions)
///////////////////////////
// part 3
////////////////////////////////



const actuallyCapitalizedMinions = capitalizedMinions.filter((item, index) => {
    const first = item.charAt(0)
   return first === first.toLocaleLowerCase()
})

console.log(actuallyCapitalizedMinions)

consteveryCapMin = actuallyCapitalizedMinions.every((item, index) => {return item.toLocaleUpperCase()})

console.log(everyCapMin)

