const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log(productId);
const apiUrl = `https://fakestoreapi.com/products/${productId}`;
const descripcion = document.getElementById("descripcion");
let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    descripcion.innerHTML = `<div class="col border border-dark" >
        <div class="p-3">
          <h1>${data.title}</h1>
          <img class="img-products" src="${data.image}">
          <p>${data.category}</p>
          <p>${data.description}</p>
          <p>$${data.price}</p>
        </div>
        <button class="button-add_cart" data-id=${data.id}>Agregar al carrito</button>
      </div>`;

    // Configuración de localStorage
   

    const btnaddCollection = document.getElementsByClassName("button-add_cart");
   const vistaModal = document.getElementById("vista-modal");

    console.log(btnaddCollection);
for (let i = 0; i < btnaddCollection.length; i++) {
  const btnadd = btnaddCollection[i];

    btnadd.addEventListener("click", () => {

      console.log(cartArray);

      cartArray.push(data);

      console.log(cartArray);

      localStorage.setItem("cartArray", JSON.stringify(cartArray));
    
        // Re-renderiza el modal para forzar su visualización
        void vistaModal.offsetWidth;
        vistaModal.classList.add("show");
      
        // Mostrar la alerta
      vistaModal.classList.add("show");
      vistaModal.classList.remove("fade");

      // Ocultar la alerta después de unos segundos
      setTimeout(() => {
        vistaModal.classList.add("fade");
        vistaModal.classList.remove("show");
      }, 1000); // Ajusta el tiempo según sea necesario
     
    });
    
  }
  })

  .catch((error) => {
    console.log("There was a problem with the fetch operation:", error);
  });

