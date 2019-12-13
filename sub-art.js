const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//console.log(id)

fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/artwork/"+id)
.then(res=>res.json())
.then (showArt)


function showArt(art){
    console.log(art)
    document.querySelector(".art-title").textContent=art.title.rendered;
    document.querySelector(".long-description").innerHTML=art.description;
}
