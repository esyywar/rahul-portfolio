/* Returns maximum character length of string allowable for the screen size */
function getMaxStrLength() {
    if (window.screen.width >= 1024) {
        return 30
    }
    else if (window.screen.width >= 425)
    {
        return 100
    }
    else {
        return 60
    }
}


/* Takes a string input and maximum character length - outputs the string cut off to length with no incomplete words */
export function getPreviewText(string) {
    let maxLength = getMaxStrLength()

    /* Cut string to maximum length */
    let maxStr = string.substring(0, maxLength)

    /* Get last space character */
    let n = maxStr.lastIndexOf(" ")

    /* Cut to end with last word and add ellipses */
    let output = maxStr.substring(0, n) + " ... "

    return output
}