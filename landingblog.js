const containerrblogs = document.querySelector(".container-rblogs")
async function NewVeiwProblog(elment){

    let url =`realstate/blogshome.json`;

    const response = await fetch(url);

    let result = await response.json();
    
    console.log(result)

result.forEach(element => {
   containerrblogs.innerHTML +=`
   <div class="rblog">
   <div class="image">
        <img src="${element.coverPhoto}" alt="" >

   </div>
   <div class="title">
        <h3>
        ${element.title}
        </h3>
   </div>
   <div class="blog-details">
        <i class="uil uil-user"></i>
        <h5>${element.name}</h5>
        <i class="uil uil-clock-nine"></i>
        <h5>${element.date}</h5>
   </div>
   <div class="discription">
        <p>Integer luctus diam ac scerisque consectetur. Vimus dotnetact euismod lacus sit amet. Aenean interdus mid vitae maximus...</p>
   </div>
</div>
   
   `
});

}

NewVeiwProblog()