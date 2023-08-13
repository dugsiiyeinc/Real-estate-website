// const welcomeMsg= document.querySelector(".welcomeMsg");
const userbtn =document.querySelector(".userbtn")



 const loginForm =document.querySelector("#loginForm")


let userName=document.querySelector(".userName")


// localStorage.getItem("Currentusername", currentUser.name);

 let get =localStorage.getItem("CurrentName");

console.log(get)
   userName.innerHTML+= `<h5 class="usercurentname">${get}</h5>`


   function saveData(){
    let email, password ;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
   

   let user_Record =   new Array();
   user_Record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if(user_Record.some((v) => {
    return v.email == email && v.password == password  
   }))
   {
       swal("Good job!", "Welcome with open hands!", "success");
    let currentUser = user_Record.filter((v)=>{
       return v.email == email && v.password == password;
       
       
    })[0] 
   //  window.location.href = 'userpage.html';
   window.open('index2.html');
// location.href("index2.html")
    window.location.href = 'index2.html';


     localStorage.setItem("CurrentEmail", currentUser.email);
     localStorage.setItem("CurrentName", currentUser.name);
     localStorage.setItem("password", currentUser.password);


                      
     // titleTex.textContent += Users.name;  

   
    
   } else  {
       alert("Your are not registered")

   }

 
  
};


           

