import { data } from "./data/day2";

let horizontal = 0;
let vertical = 0;

data.forEach((x) => {
  const direction = x.split(" ")[0];
  const amount = parseInt(x.split(" ")[1]);
  switch (direction){
    case "up":
      vertical -= amount;
      break;
    case "down":
      vertical += amount;
      break;
    default:
      horizontal += amount;
  }
})

console.log(horizontal * vertical);

// part 2

horizontal = 0;
vertical = 0;
let aim = 0;

data.forEach((x) => {
  const direction = x.split(" ")[0];
  const amount = parseInt(x.split(" ")[1]);
  switch (direction){
    case "up":
      aim -= amount;
      break;
    case "down":
      aim += amount;
      break;
    default:
      horizontal += amount;
      vertical = vertical + (aim * amount);
  }
})

console.log(horizontal);
console.log(vertical);
console.log(horizontal * vertical)
