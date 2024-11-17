function findEvenInArray(arrays) {
    let count = 0;
    for (let i = 0; i < arrays.length; i++) {

        if (arrays[i] % 2 === 0) {
            console.log(arrays[i] + " is an even number");
            count++
        }
        else {
            continue;
        }
    }
    console.log("There are total " + count + " even numbers");
}

let randomArr = [2, 17, 9, 10, 36, 64, 93, 92]
findEvenInArray(randomArr)