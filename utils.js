const findPermutation = (data) => {
    data = data.split("");
    let used = data.map(_ => 0);
    let result = [];

    const permutation = (candidates) => {
        if (candidates.length == data.length) {
            result.push(candidates.join(''))
            return;
        }

        for (let i = 0; i < data.length; i++)
        {
            if (used[i] < 1) {
                candidates.push(data[i]);
                used[i] = 1;
                permutation(candidates);
                candidates.splice(candidates.length - 1, 1);
                used[i] = 0;
            } 
        }
    }

    //call permutation function
    permutation([]);

    //remove duplicate
    return [...new Set(result)];
}

const findOddInt = (numberList) => {
    let stack = [];

    //add stat
    for (number of numberList) {
        if (stack[number] != undefined) {
            stack[number] += 1;
        } else {
            stack[number] = 1;
        }
    }
    
    //check odd stat
    for (let index = 0; index < stack.length; index++) {
        if (stack[index] % 2 > 0) {
            return index;
        }
    }
}

const countSmile = (faceList) => {
    const validEye = [":", ";"];
    const validNose = ["-", "~"];
    const validMouth = [")", "D"];
    let count = 0;

    for (let face of faceList) {
        //convert to array
        face = face.split("");

        //check face incorrect
        if (face.length < 2) {
            continue;
        }

        //validate eye
        if (!validEye.includes(face[0])) {
            continue;
        }

        //validate nose and mouth
        if (!(validNose.includes(face[1]) || validMouth.includes(face[1]))) {
           continue;
        }

        //validate mouth
        if (face[2] != undefined) {
            if (!validMouth.includes(face[2])) {
                continue;
            }
        }

        count += 1;
    }

    return count;
}

module.exports = {findPermutation, findOddInt, countSmile};