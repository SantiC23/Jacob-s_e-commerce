const firstName = document.getElementsByClassName("first-name")[0]; /*Tomo el imput cn DOM*/
const secondName = document.getElementsByClassName("second-name")[0];
const apellido = document.getElementsByClassName("apellido")[0];
const secondApellido = document.getElementsByClassName("segundo-apellido")[0];
const email = document.getElementsByClassName("email")[0];
const telefonoContacto = document.getElementsByClassName("telefono")[0];

/*Array de inputs*/

 const inputsArray = [firstName, secondName, apellido, secondApellido, email, telefonoContacto]
 console.log(inputsArray);

 const infoUser = {
    firstName: "",
    secondName:"",
    apellido: "",
    secondApellido: "",
    email: "",
    infoUser: "",
}
 


inputsArray.forEach(input => {
    input.addEventListener("input", (e) => {
     /*   infoUser[input.id] = e.target.value;
        console.log(infoUser)*/
        for(let key in infoUser) {
            infoUser[key] = input[0].
            console.log(key)

        }
        console.log(infoUser)
     })
    
});

 

 // Supongamos que tienes varios botones en tu HTML
let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('Button clicked:', button);
    });
});
