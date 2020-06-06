/* Returns maximum character length of string allowable for the screen size */
function getMaxStrLength() {
    if (window.innerHeight >= 1440)
    {
        return 140
    }
    else if (window.innerWidth >= 1024) 
    {
        return 120
    }
    else if (window.innerWidth >= 768)
    {
        return 110
    }
    else if (window.innerWidth >= 375)
    {
        return 70
    }
    else if (window.innerWidth >= 360)
    {
        return 55
    }
    else if (window.innerWidth >= 320)
    {
        return 50
    }
    else 
    {
        return 40
    }
}


/* Takes an array of strings and maximum character length - outputs the string cut off to length with no incomplete words */
export function getPreviewText(arrStr) {
    let maxLength = getMaxStrLength()

    /* Add sentences till uncut output longer than the maximum length */
    let i = 0, output = ""
    while (output.length < maxLength && i < arrStr.length)
    {
        output += arrStr[i++] + " "
    }

    /* Cut string to maximum length */
    output = output.substring(0, maxLength)

    /* Get last space character */
    let n = Math.max(output.lastIndexOf(" "), output.lastIndexOf("-"))

    /* Cut to end with last word and add ellipses */
    output = output.substring(0, n)

    output += " ... "

    return output
}