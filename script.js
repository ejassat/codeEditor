const htmlCode = document.getElementById("html-code")
const cssCode = document.getElementById("css-code")
const jsCode = document.getElementById("js-code")
const output = document.getElementById("output")

function runCode() {
    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>"
    output.contentDocument.eval(jsCode.value)
}