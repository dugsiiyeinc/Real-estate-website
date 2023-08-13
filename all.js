
let properties =document.querySelector(".properties_pro");
const Searchbtn =document.querySelector('.Search-btn');
const SearchInput =document.querySelector('.Search-input');
const bed =document.querySelector('.bed');

async function NewVeiwPro(elment){

    let url =`realstate/properties.json`;
    

    const response = await fetch(url);

    let result = await response.json();
    




result.properties.forEach(element => {
    properties.innerHTML +=`
    
    <div class="property">
               <div class="property-img">
               <p class="id">${element.id}</p>
                    <img src="${element.image}" alt="" class="Image">
               </div>
               <div class="property-details">
                <h3 class="title title-name">${element.title}</h3>
                <div class="property-location">
                    <i class="icon uil uil-map-marker"></i>
                    <p class="paragraph1">${element.location.city}</p>
                        <p class="paragraph2">${element.location.state}</p>
                        <p class="paragraph3">${element.location.country}</p>
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
               <button class="btn  veiw-property">View Property</button>
           </div> 
                    
               </div>
               
          </div>
    
    `;
    // console.log(element.id)
});



   

}


NewVeiwPro();










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








properties.addEventListener("click" ,(e) =>{
    if(e.target.classList.contains("btn")){

        let parent = e.target.parentElement.parentElement.parentElement

        let id =parent.querySelector(".id").innerText
        console.log(id)

        setInputId(id)

     
    }
})


function setInputId(id){
  let urlSearch = new URLSearchParams();
  urlSearch.set("id",id);
  let data = urlSearch.toString();
  let url ="viewproperty1.html?" + data;
  window.location.href = url;
}