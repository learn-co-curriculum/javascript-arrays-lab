var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

const destructivelyAppendKitten = (name) => {
  return kittens.push(name);
}

const destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);
}

const destructivelyRemoveLastKitten = (name) => {
  return kittens.pop(name);
}

const destructivelyRemoveFirstKitten = (name) => {
  return kittens.shift(name)
}

const appendKitten = (name) => {
  return [...kittens, name];
}

const prependKitten = (name) => {
  return [name, ...kittens]
}

const removeFirstKitten = (name) => {
  return kittens.slice(1);
}

const removeLastKitten = (name) => {
  return kittens.slice(0, kittens.length -1);
}




