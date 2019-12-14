window.addEventListener("DOMContentLoaded", init)

function init(){

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");

    const id = urlParams.get("id");

    if(search){
        console.log("this is a search result")
        getSearchData();
    }else if (id){
        getSingleProject();
    }else{
        console.log("not a search result")
        getProjectData();
    }

}

function getSearchData(){
    console.log("getData")

    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");

    //fetch("http://georgianadancu.com/wordpress/wp-json/wp/v2/movies?_embed")
    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/project?_embed&search="+search)
    .then(res=>res.json())
    .then(handleData)
}

function getProjectData(){
    console.log("getData")
    //fetch("http://georgianadancu.com/wordpress/wp-json/wp/v2/movies?_embed")
    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/project?_embed")
    .then(res=>res.json())
    .then(handleData)
}

function getSingleProject(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    //console.log(id)

    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/project/"+id)
    .then(res=>res.json())
    .then (showProject)


function showProject(project){
    console.log(project)
    document.querySelector(".project-title").textContent= project.title.rendered;
    document.querySelector(".long-description").innerHTML=project.description;
}
}

function handleData(myData){
    //console.log(myData)
    myData.forEach(showPost)
}

function showPost(post){
    console.log(post)
    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);

    const title = postCopy.querySelector(".project-title");
    title.textContent = post.title.rendered;

    const a = postCopy.querySelector("a");
    a.href="sub-projects.html?id="+post.id;

    const img = postCopy.querySelector("img.cover");
    const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Poster for event" + post.title.rendered)

    document.querySelector("#posts").appendChild(postCopy)
}
