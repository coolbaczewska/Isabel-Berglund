window.addEventListener("DOMContentLoaded", getData)

function getData(){
    //console.log("getData")

    fetch("http://dredesigns.dk/MyWordpress/wp-json/wp/v2/news?_embed")
    .then(res=>res.json())
    .then(handleData)
}

function handleData(myData){
    console.log(myData)
    myData.forEach(showPost)
}

function showPost(post){
    console.log(post)
    const template = document.querySelector(".newsTemplate").content;
    const postCopy = template.cloneNode(true);

    const newsTitle = postCopy.querySelector(".news-title");
    newsTitle.textContent = post.title.rendered;

    const newsInstitution = postCopy.querySelector(".institution");
    newsInstitution.textContent = post.institution;

    const newsPlace = postCopy.querySelector(".place");
    newsPlace.textContent = post.place;

    const newsStartDate = postCopy.querySelector(".starting_date");
    newsStartDate.textContent = "Start: " + post.starting_date;

    const newsEndDate = postCopy.querySelector(".ending_date");
    newsEndDate.textContent = "End: " + post.ending_date;

    const imgNews = postCopy.querySelector(".news-img");
    imgNews.innerHTML = post.content.rendered;

    //const img = postCopy.querySelector("img.news-cover");
    //const imgPath = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    //img.setAttribute("src", imgPath)
   //img.setAttribute("alt", "Poster for event" + post.title.rendered)



    document.querySelector("#news").appendChild(postCopy)
}
