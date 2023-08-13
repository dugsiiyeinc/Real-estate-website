
document.querySelectorAll('.required-singin').forEach(item => {
     item.addEventListener('click', event => {
          swal("You have to sign in!", "or create new account ", "error");
     })
   })