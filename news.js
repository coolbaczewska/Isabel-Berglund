window.addEventListener("DOMContentLoaded", getData)

function getData(){
    console.log("getData")
    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/news?_embed")
    .then(res=>res.json())
    .then(handleData)
}

function handleData(myData){
    //console.log(myData)
    myData.forEach(showPost)
}

function showPost(post){
    console.log(post)
    const template = document.querySelector(".newsTemplate").content;
    const postCopy = template.cloneNode(true);

    const title = postCopy.querySelector(".news-title");
    title.textContent = post.title.rendered;

//    const a = postCopy.querySelector("a");
//    a.href="sub-projects.html?id="+post.id;

    const img = postCopy.querySelector("img.cover");
    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Poster for event" + post.title.rendered)

    document.querySelector("#posts").appendChild(postCopy)
}
