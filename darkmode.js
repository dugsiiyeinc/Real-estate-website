let darkMode = localStorage.getItem('darkMode'); 
const  mode = document.querySelector("#mode")





const enableDarkMode = () => {

  document.body.classList.add('darkMode');

  mode.src="Images/sun.png";

  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('darkMode');

  mode.src="Images/moon.png";

  localStorage.setItem('darkMode', "disabled");
}
 

if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
mode.addEventListener('click', () => {

//   console.log("fff");
  darkMode = localStorage.getItem('darkMode'); 

  if (darkMode !== 'enabled') {
    enableDarkMode();
  
  } else {  
    disableDarkMode(); 
  }
});
