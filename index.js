function evenInArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            console.log(arr[i] + " is an even number");
            count++
        }
        else {
            continue;
        }
    }
    console.log("There are total " + count + " even numbers");
}

let randomArr = [2, 17, 9, 10, 36, 64, 93, 92]
evenInArray(randomArr)