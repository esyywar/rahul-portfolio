function getPreviewText(arrStr, maxLen) {

    /* Add sentences till uncut output longer than the maximum length */
    let i = 0, output = ""
    while (output.length < maxLen && i < arrStr.length)
    {
        output += arrStr[i++] + " "
    }

    /* Cut string to maximum length */
    output = output.substring(0, maxLen)

    /* Get last space character */
    let n = output.lastIndexOf(" ")

    /* Cut to end with last word and add ellipses */
    output = output.substring(0, n)

    output += " ... "

    return output
}

const arrStr = ["This is short sentence.", "Whoa a longer sentence over here man!", "Extra sauce sentence"]

const result = getPreviewText(arrStr, 40)

console.log(result)