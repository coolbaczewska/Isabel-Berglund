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
