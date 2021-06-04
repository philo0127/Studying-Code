const bg = document.querySelector(".bg");
const contents = document.querySelector(".contents")
const colors = ["#FF0000","#FFFF00","#008000","#1242F7","#8977AD"];

function widthchanging() {
    let width = window.innerWidth;
    if (width < 700) {
        bg.style.backgroundColor = colors[0];
        contents.innerHTML = "Width is smaller than 700 pixels.";
        contents.style.color = colors[1];
    }
        else if (width >= 700 && width < 900) {
            bg.style.backgroundColor = colors[1];
            contents.innerHTML = "Width is between 700 pixels and 900 pixels.";
            contents.style.color = colors[2];
        }
            else if (width >= 900 && width < 1100) {
                bg.style.backgroundColor = colors[2];
                contents.innerHTML = "Width is between 900 pixels and 1100 pixels.";
                contents.style.color = colors[3];
            }
                else if (width >= 1100 && width < 1300) {
                    bg.style.backgroundColor = colors[3];
                    contents.innerHTML = "Width is between 1100 pixels and 1300 pixels.";
                    contents.style.color = colors[4];
                }
                    else {
                        bg.style.backgroundColor = colors[4];
                        contents.innerHTML = "Width is larger than 1300 pixels.";
                        contents.style.color = colors[0];
                    }
}

function init() {
    window.addEventListener("resize",widthchanging)
}
init();