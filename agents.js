let agents =document.querySelector(".agents");


async function agentsView(elment){

    let url =`realstate/agents.json`;
    

    const response = await fetch(url);

    let result = await response.json();
    
    console.log(result)





result.agents.forEach(element => {
     agents.innerHTML +=`
    
     <div class="agentcard">
     <div class="agentimge">
          <img src="${element.image}">
     </div>
     <div class="agent-name">
          <h2>${element.name}</h2>
     </div>
     <div class="agent-contact">
          <P  class="emial" >${element.contact.email}</P>
          <P class="phone" >${element.contact.phone}</P>
     </div>
     <a class="btn cll" href="${"tell:"}${element.contact.phone}"> Call now</a>
     
    
    `;
});



   

}


agentsView();