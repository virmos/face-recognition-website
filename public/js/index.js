import mainScreen from "./views/app.js"

function setScreen(screen) {
    document.getElementById("app").innerHTML = screen.content
    screen.onload()
}
setScreen(mainScreen)

export default setScreen;