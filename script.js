//JavaScript Problem #11
function firstLast6(array) {
    if (array.length == 0) {
        return false;
    }
    return array[0] == 6 || array[array.length - 1] == 6;
}

//JavaScript Problem #12
function has23(array) {
    if (array[0] == 2 || array[0] == 3) {
        return true;
    }
    if (array[1] == 2 || array[1] == 3) {
        return true;
    } else {
        return false;
    }
}

//JavaScript Problem #13
function fix23(array) {
    if (array[0] == 2 && array[1] == 3) {
        array[1] = 0;
        return array;
    }
    if (array[1] == 2 && array[2] == 3) {
        array[2] = 0;
        return array;
    }
    return array;
}

//JavaScript Problem #14
function countYZ(string) {
    if (string.length == 0) {
        return 0;
    }
    var count = 0;
    for (var i = 1; i < string.length; ++i) {
        if (string[i] == " ") {
            var c = string[i - 1];
            if (c == "z" || c == "y" || c == "Z" || c == "Y") {
                count += 1;
            }
        }
    }
    var c = string[string.length - 1];
    if (c == "z" || c == "y" || c == "Z" || c == "Y") {
        count += 1;
    }
    return count;
}

//JavaScript Problem #15
function endOther(stringOne, stringTwo) {
    if (stringOne.length < stringTwo.length) {
        //swap strings so that stringOne is longer than stringTwo
        var temp = stringOne
        stringOne = stringTwo;
        stringTwo = temp;
    }
    stringTwo = stringTwo.toLowerCase();
    //shorten longer string
    stringOne = stringOne.substring(stringOne.length - stringTwo.length)
    stringOne = stringOne.toLowerCase();
    return stringOne == stringTwo;
}

//JavaScript Problem #16
function starOut(string) {
    // find all sequences of one or more "*"s
    for (var start = 0; start < string.length; start++) {
        // check for start of sequence of one or more "*"s
        if (string[start] == "*") {
            // find the end of the sequence of "*"s
            var end = start + 1;
            while (end < string.length && string[end] == "*") {
                end++;
            }

            // move the start left one character (if possible)
            if (start > 0) {
                start--;
            }

            // move the end right one character (if possible)
            if (end < string.length) {
                end++;
            }

            // chop-out the "*"s and one character on each side
            string = string.substring(0, start) + string.substring(end, string.length);
        }
    }
    return string;
}

//JavaScript Problem #17 Get Sandwich
function getSandwich(string) {
    //find the first occurrence of "bread"
    var start = -1;
    for (var i = 0; i < string.length - "bread".length; i++) {
        if (string.substring(i, i + "bread".length) == "bread") {
            start = i + "bread".length;
            break;
        }
    }
    if (start == -1) {
        //bread was not found at all
        return "";
    }

    //find the last occurrence of "bread"
    var end = -1;
    for (var j = string.length - "bread".length; j > start; j--) {
        if (string.substring(j, j + "bread".length) == "bread") {
            end = j;
            break;
        }
    }
    if (end == -1) {
        //no second occurrence of bread found
        return "";
    }

    //return string between first and last "bread"
    return string.substring(start, end);
}

//JavaScript Problem #18
function canBalance(array) {
    //count the sum of the array
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    //check to see if array can be split into two equal sums
    if (sum % 2 != 0) {
        //sum is odd
        return false;
    }

    //the left and right pieces should be half of the total sum
    var halfSum = sum / 2;

    //try all lengths for left piece
    var leftSum = 0;
    for (var j = 0; j < array.length; j++) {
        leftSum += array[j];
        if (leftSum == halfSum) {
            //left & right pieces have the same sum
            return true;
        }
    }

    //no length can fit half sum
    return false;
}

//JavaScript Problem #19 Count Clumps
function countClumps(array) {
    var clumpCount = 0;
    for (var i = 0; i < array.length - 1; i++) {
        var element = array[i];
        var clumpLength = 0;
        while (i < array.length && element == array[i + 1]) {
            i++;
            clumpLength++;
        }
        if (clumpLength >= 1) {
            clumpCount += 1;
        }
    }
    return clumpCount;
}

//JavaScript Problem #20 Evenly Spaced
function evenlySpaced(a, b, c) {
    return (a - b == c - a) || (b - a == c - b) || (c - b == a - c);
}