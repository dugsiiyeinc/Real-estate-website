let Bigviewcontainer =document.querySelector(".Bigviewcontainer");
let property =document.querySelector(".property");







property.addEventListener("click" ,(e) =>{
     if(e.target.classList.contains("check")){
 
         console.log("hhhh");
 
      
     }
 })






 const getData = async()=>{
    let urlSearch = new URLSearchParams(window.location.search);
    let ValueId = urlSearch.get("id");
    console.log(ValueId)





    let url =`realstate/properties.json`;
    const response = await fetch(url);

    let result = await response.json();
    let items = result.properties;

    const data= items.filter((item) =>item.id == ValueId) 


    data.forEach(element => {
       Bigviewcontainer.innerHTML =`
       <div class="viewcontainer">

   
       <div class="property">
                    <div class="property-img">
                    <img src="${element.image}" alt="" class="">
                    </div>
                    <div class="property-details">
                     <h3 class="title">LUXURY VILLA WITH POOL</h3>
                     <div class="property-location">
                         <i class="uil uil-map-marker"></i>
                         <p>Miami</p>
                             <p> Florida</p>
                             <p> Miami</p>
                     </div>
      
                     <div class="property-info">
                         <div class="size">
                              <p>Sqft</p>
                              <div class="p-i-d " ><i class="uil   uil-expand-arrows-alt"></i>
                              <h4 >${element.squareFootage} sqft</h4></div>
                         </div>
                         <div class="Beds">
                              <p>Beds</p>
                             <div class="p-i-d"> <i class="uil uil-bed"></i>
                              <h4>${element.bedrooms}</h4></div>
                         </div>
                         <div class="Baths">
                              <p>Baths</p>
                             <div class="p-i-d"> <i class="uil uil-bath"></i>
                              <h4>${element.bathrooms}</h4></div>
                         </div>
      
                         
                         
      
                     </div>
      
                     <div class="Property-footer">
                        <div class="property-price"><p>Price</p>
                         <h4>${element.price}</h4>
                        
                    </div>
                    <button class="btn check  veiw-property"> Sell</button>
                </div> 
                         
                    </div>
               </div>
      
        <div class="property-images">
          <div class="propertyImage">
           <img src="./images/realestate-image  (24).jpg" alt="">
          </div>
          <div class="propertyImage">
           <img src="./images/realestate-image  (25).jpg" alt="">
          </div>
          <div class="propertyImage">
           <img src="./images/realestate-image  (26).jpg" alt="">
          </div>
          <div class="propertyImage">
           <img src="./images/realestate-image  (27).jpg" alt="">
          </div>
      
      
        </div>
        
        <div class="property-desc">
           <div class="discription">
                <h3> description </h3>
                <h4>
                     A luxurious penthouse suite with floor-to-ceiling windows and stunning city skyline views.
                </h4>
                <h4>
                     <span class="availability">availability</span>: availabale 
                </h4>
           </div>
        </div>
        
      
        <div class="agent-star">
      
        <div class="ageent">
           <div class="a-img">
                <img src="./Agentsimages/agentimage  (12).jpg" alt="">
           </div>
           <div class="name-phone">
                <h2>James Wilson
                </h2>
                <p>+1 222-333-4444</p>
           </div>
        </div>
      
        <div class="stars">
           <i class="uis uis-star"></i>
           <i class="uis uis-star"></i>
           <i class="uis uis-star"></i>
           <i class="uis uis-star"></i>
           <i class="uis uis-star"></i>
          
        </div>
         
      </div>
      
      
      
      </div>
       `
        console.log(element);

    });



  }
  getData();