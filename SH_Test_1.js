function Substring_Shortest(s, x) {
    result = []
    for (i = 0; i < s.length - x + 1; i++) {
        startLtr = s[i]
        sameLtrIn = s.indexOf(startLtr, i + 1)

        if (sameLtrIn !== -1 && sameLtrIn - i + 1 >= x) {
            result.push(s.slice(i, sameLtrIn + 1))
        }
    }

    return result.length > 0 ? result : "not Found"
}

s = "abccdbacca";

[3, 4, 5, 6, 7, 8].forEach(x => {
    console.log(`For ${x}, the shortest substring is: ` + Substring_Shortest(s, x));
});