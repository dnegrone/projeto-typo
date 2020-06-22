const fontSelect = document.getElementById("font-select")
const head = document.getElementsByTagName("head")[0]
const body = document.getElementsByTagName("body")[0]

const node = document.createElement("link")
node.rel = "stylesheet"

const addFont = (googleFont, fontClassName) => {
    removeFont()
    if(fontClassName !== "default") {
        node.href = "https://fonts.googleapis.com/css2?family=" + googleFont + ":wght@400;500;600;700&display=swap"
        head.appendChild(node)
        body.classList.add(fontClassName)
    }
}

const removeFont = () => {
    while (body.classList.length > 0) {
        body.classList.remove(body.classList.item(0))
    }
}

fontSelect.addEventListener("change", (event) => {
    const font = event.target.value
    const googleFont = font.replace(/ /g,"+")
    const fontClassName = font.toLowerCase().replace(/ /g,"-")
    
    addFont(googleFont, fontClassName)
})