let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petImg");

petSelectEl.addEventListener("change", function(event) {
    let petsImageUrls = {
        dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
        cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
        parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
        spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
        rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
    }
    let t = event.target.value.toLowerCase();
    console.log(t);
    console.log(petsImageUrls[t]);


    petImgEl.src = petsImageUrls[t];

});