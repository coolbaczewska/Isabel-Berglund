window.addEventListener("DOMContentLoaded", init)

function init(){
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");

    const id = urlParams.get("id");

    if(search){
        console.log("this is a search result");
        getSearchData();
    }else if(id){
        getSingleArt();
    }else{
        console.log("Not searching")
         getArtData();
    }
}
function getSearchData(){

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");

    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/artwork?_embed&search="+search)
    .then(res=>res.json())
    .then(handleData)
}
function getArtData(){
    //console.log("getData")

    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/artwork?_embed")
    .then(res=>res.json())
    .then(handleData)
}

function getSingleArt(){
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
}

function handleData(myData){
    //console.log(myData)
    myData.forEach(showPost)
}

function showPost(post){
    //console.log(post)
    const template = document.querySelector(".artTemplate").content;
    const postCopy = template.cloneNode(true);

    const artTitle = postCopy.querySelector(".art-title");
    artTitle.textContent = post.title.rendered;

    const a = postCopy.querySelector("a");
    a.href="sub-art.html?id="+post.id;


    const img = postCopy.querySelector("img.artworks-cover");
    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Poster for event" + post.title.rendered)

    document.querySelector("#artworks").appendChild(postCopy)
}