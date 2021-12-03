import { data } from "./data/day1"

// part 1
let count = 0;
data.reduce((previous: number, current: number) => {
    if (current > previous) {
        count ++;
    }
    return current;
});

console.log(count);

//part 2
let count2 = 0;
let previousWindow;
for (let i = 2; i < data.length; i++) {
    const currentWindow = data[i-2] + data[i-1] + data[i];
    
    if (previousWindow && currentWindow > previousWindow) {
            count2 ++;
    }
    previousWindow = currentWindow;
}

console.log(count2);