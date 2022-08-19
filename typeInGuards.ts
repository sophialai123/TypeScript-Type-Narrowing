type Bunny = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseBunny = {
  name: 'Proxie',
  run: () => 'pitter pat'
}

const bettaFish = {
  name: 'Neptune',
  swim: () => 'bubble blub'
}

function move(pet: Bunny | Fish) {
  if ("run" in pet) {
    return pet.run();
  }

  if ("swim" in pet) {
    return pet.swim()
  }

}

console.log(move(siameseBunny));
console.log(move(bettaFish));