function asciiFind(s) {
    result = ""
    asciiArr = []

    for (i = 0; i < s.length; i++) {
        asciiArr.push(s.charCodeAt(i))
    }

    for (i = 0; i < asciiArr.length; i++) {
        asciiValue = asciiArr[i]

        if (asciiValue % 2 === 0 && i < s.length - 1) {
            newAscii = asciiArr[i + 1] + (asciiValue % 7)
            newAscii = (newAscii < 0 || newAscii > 127) ? 83 : newAscii
            asciiArr[i + 1] = newAscii
            result += String.fromCharCode(newAscii)
        }
        else if (asciiValue % 2 !== 0 && i > 0) {
            newAscii = asciiArr[i - 1] - (asciiValue % 5)
            newAscii = (newAscii < 0 || newAscii > 127) ? 83 : newAscii
            asciiArr[i - 1] = newAscii
            result += String.fromCharCode(newAscii)
        }
        else {
            asciiArr[i] = asciiValue
            result += String.fromCharCode(asciiValue)
        }
    }

    console.log(asciiArr)
    return result
}

inputString = "sHQen}"
console.log(asciiFind(inputString))
