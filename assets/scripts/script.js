backgroundColor = localStorage.getItem("backgroundColor") ? localStorage.getItem("backgroundColor") : localStorage.setItem("backgroundColor", "#202020");
primaryColor = localStorage.getItem("primaryColor") ? localStorage.getItem("primaryColor") : localStorage.setItem("primaryColor", "#853FCC");
fontColor = localStorage.getItem("fontColor") ? localStorage.getItem("fontColor") : localStorage.setItem("fontColor", "#FFFFFF");
panelsColor = localStorage.getItem("panelsColor") ? localStorage.getItem("panelsColor") : localStorage.setItem("panelsColor", "#1D1D1D");


async function onLoad() {
    document.documentElement.style.setProperty('--background', backgroundColor);
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--font', fontColor);
    document.documentElement.style.setProperty('--panels', panelsColor);
}



function changeTheme(theme) {
    if (theme == "dark") {
        document.documentElement.style.setProperty('--background', "#202020");
        document.documentElement.style.setProperty('--primary', "#853FCC");
        document.documentElement.style.setProperty('--font', "#FFFFFF");
        document.documentElement.style.setProperty('--panels', "#1D1D1D");
        localStorage.setItem("backgroundColor", "#202020")
        localStorage.setItem("primaryColor", "#853FCC")
        localStorage.setItem("panelsColor", "#1D1D1D")
        localStorage.setItem("fontColor", "#FFFFFF")
    }

    else if (theme == "white") {
        document.documentElement.style.setProperty('--background', "#C2C2C2");
        document.documentElement.style.setProperty('--primary', "#AB5CFB");
        document.documentElement.style.setProperty('--font', "#000000");
        document.documentElement.style.setProperty('--panels', "#CDCDCD");
        localStorage.setItem("backgroundColor", "#C2C2C2")
        localStorage.setItem("primaryColor", "#AB5CFB")
        localStorage.setItem("panelsColor", "#CDCDCD")
        localStorage.setItem("fontColor", "#000000")
    }
}