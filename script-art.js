window.addEventListener("DOMContentLoaded", getData)

function getData(){
    //console.log("getData")

    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/artwork?_embed")
    .then(res=>res.json())
    .then(handleData)
}

function handleData(myData){
    console.log(myData)
    myData.forEach(showPost)
}

function showPost(post){
    console.log(post)
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
