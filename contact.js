function sendMail(){
     let params ={
          name:document.getElementById("name").value,
          email:document.getElementById("email").value,
          massage:document.getElementById("message").value,

     }

     const serverID="service_k17th6i";
     const templateID = "template_z3tosm7";
    
     
     
     
     emailjs.send(serverID, templateID, params)
     .then(
        res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("massage sent ")
        }
     ).catch(err=> console.log(err)) ;  
}

