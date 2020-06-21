function fontValue () {
    const fontSelect = document.getElementById("font-select")
    console.log(fontSelect.length)
    const font = fontSelect.value
    let $head = document.getElementsByTagName("head")[0]
    let node = document.createElement("link")
    node.rel = "stylesheet"
    const addFont = font => {
        node.href = "https://fonts.googleapis.com/css2?family=" + font + ":wght@400;500;700&display=swap"
    }
    const removeFont = () => {
        for(let i=0;i<fontSelect.length;i++){
            //console.log(fontSelect[i].value)
            if(fontSelect[i].value !== "") {
                document.getElementsByTagName("body")[0].classList.remove(fontSelect[i].value)
            }
        }
    }
    switch (font) {
        case "Roboto":
            removeFont()
            addFont(font)
            $head.appendChild(node)
            document.getElementsByTagName("body")[0].classList.add("roboto")
            break;
        case "Inter":
            removeFont()
            node.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            $head.appendChild(node)
            document.getElementsByTagName("body")[0].classList.add("roboto")
            break;
    
        default:
            removeFont()
            break;
    }
}