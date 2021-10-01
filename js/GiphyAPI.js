let inputTexst = document.querySelector(".inputTexst")
let Giphy__btn = document.querySelector(".Giphy__btn")

let Giphy__content = document.querySelector(".Giphy__content")

const APIKEY = "SxcnHPgLU2ZjUEMBVWDcsEEUG57DqILy";



Giphy__btn.onclick = async function () {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${inputTexst.value}`;

    let response = await fetch(url)
    let result = await response.json()



    let SRC = result.data[0].images.downsized.url
    console.log(SRC)


    var img = new Image();
    img.src = SRC;

    Giphy__content.prepend(img);

}





