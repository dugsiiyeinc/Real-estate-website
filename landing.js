
let properties =document.querySelector(".properties");
const Searchbtn =document.querySelector('.Search-btn');
const SearchInput =document.querySelector('.Search-input');
const bed =document.querySelector('.bed');

async function NewVeiwPro(elment){

    let url =`realstate/propertieshome.json`;
    

    const response = await fetch(url);

    let result = await response.json();
    
    console.log(result)





result.properties.forEach(element => {
    properties.innerHTML +=`
    
    <div class="property">
               <div class="property-img">
                    <img src="${element.image}" alt="" class="Image">
               </div>
               <div class="property-details">
                <h3 class="title title-name">${element.title}</h3>
                <div class="property-location">
                    <i class="icon uil uil-map-marker"></i>
                    <p class="paragraph1">${element.location.city}</p>
                        <p class="paragraph2">${element.location.state}</p>
                        <p class="paragraph3">${element.location.city}</p>
                </div>
 
                <div class="property-info">
                    <div class="size">
                         <p>Sqft</p>
                         <div class="p-i-d " ><i class="uil   uil-expand-arrows-alt"></i>
                         <h4 >${element.squareFootage} sqft</h4></div>
                    </div>
                    <div class="Beds">
                         <p >Beds</p>
                        <div class="p-i-d"> <i class="uil uil-bed"></i>
                         <h4 class="Bed">${element.bedrooms}</h4></div>
                    </div>
                    <div class="Baths">
                         <p>Baths</p>
                        <div class="p-i-d"> <i class="uil uil-bath"></i>
                         <h4 class="Bath">${element.bathrooms}</h4></div>
                    </div>
 
                    
                    
 
                </div>
 
                <div class="Property-footer">
                   <div class="property-price"><p>Price</p>
                    <h4 class="price">$${element.price}</h4>
                   
               </div>
               <button class="btn veiw-property"> Sell Property</button>
           </div> 
                    
               </div>
          </div>
    
    `;
});



   

}


NewVeiwPro();





// const Buttos = document.querySelectorAll(".veiw-property");


// Buttos.forEach(btn => {
     

//      btn.addEventListener("click" ,(e)=>{
//           console.log("waa btn")



//          let parent = e.target.parentElement.parentElement.parentElement

//          console.log(parent)



// let GetNewParent ={
//       Image : parent.querySelector(".Image").getAttribute("src"),
//       title: parent.querySelector(".title").innerText,
//       paragraph1: parent.querySelector(".paragraph1").innerText,
//       paragraph2: parent.querySelector(".paragraph2").innerText,
//       paragraph3: parent.querySelector(".paragraph3").innerText,
//       Bed: parent.querySelector(".Bed").innerText,
//       Bath: parent.querySelector(".Bath").innerText,
//       price: parent.querySelector(".price").innerText,
// }
//           // window.open("viewproperty.html")

//           // location.href("viewproperty.html")
//           console.log(GetNewParent)



//      })


// });






properties.addEventListener("click" ,(e) =>{
    if(e.target.classList.contains("veiw-property")){


        let parent = e.target.parentElement.parentElement.parentElement

        let GetNewParent ={
            Image : parent.querySelector(".Image").getAttribute("src"),
            title: parent.querySelector(".title").innerText,
            paragraph1: parent.querySelector(".paragraph1").innerText,
            paragraph2: parent.querySelector(".paragraph2").innerText,
            paragraph3: parent.querySelector(".paragraph3").innerText,
            Bed: parent.querySelector(".Bed").innerText,
            Bath: parent.querySelector(".Bath").innerText,
            price: parent.querySelector(".price").innerText,
      }

      console.log(GetNewParent)


    }
})




SearchInput.addEventListener("keyup", (e)=>{
    let value = SearchInput.value.toLowerCase();
     
    document.querySelectorAll(".title-name").forEach(function(items){
       const item =items.firstChild.textContent;
       if(item.toLowerCase().indexOf(value) != -1){
           let itemNew=items.parentElement.parentElement;
           itemNew.style.display = "flex";

        console.log(items)
       }else{
           let itemNew=items.parentElement.parentElement;

           itemNew.style.display = "none";
           // console.log(items)

       }
    })  
})




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







let agents =document.querySelector(".container-agents");


async function agentsView(elment){

    let url =`realstate/agentshome.json`;
    

    const response = await fetch(url);

    let result = await response.json();
    
    console.log(result)





// result.agents.forEach(element => {
//      agents.innerHTML +=`
    
//      <div class="agentcard">
//      <div class="agentimge">
//           <img src="${element.image}">
//      </div>
//      <div class="agent-name">
//           <h2>${element.name}</h2>
//      </div>
//      <div class="agent-contact">
//           <P  class="emial" >${element.contact.email}</P>
//           <P class="phone" >${element.contact.phone}</P>
//      </div>
//      <button class="btn cll" > Call agent</button>
// </div>
    
//     `;
// });



   

}


agentsView();
