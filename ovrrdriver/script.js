const fileInput = document.getElementById('file-input');

const images = document.getElementById('images');

const num_of_file = document.getElementById('num_of_file');

function preview() {
    images.innerHTML = "";
    num_of_file.textContent = `${fileInput.files.length} Files Selected`;

    for(i of fileInput.files) {
        let render = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");

        figCap.innerHTML = i.name;
        figure.appendChild(figCap);
        render.onload=() => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img,figCap);
        }

        images.appendChild(figure);
        render.readAsDataURL(i);
    }
}
