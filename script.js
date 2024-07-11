function showWelcome() {
  // Verificar si la cookie ya se ha establecido
  if (document.cookie.indexOf('welcomeShown=true') === -1) {
      // Mostrar el alert solo si la cookie no está establecida
      alert("¡Bienvenido a Jacob's!");
      
      // Establecer la cookie para indicar que el alert ha sido mostrado
      document.cookie = 'welcomeShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  }
}

showWelcome();


// Fetch para traer productos
const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("¡No hay chance, compa!");
    }
    return response.json();
  })
  .then((data) => {
    const clothesCont = document.querySelector(".clothesCont");

    // Función para mostrar productos
    function showProducts() {
      data.forEach((element) => {
        clothesCont.innerHTML += `
          <div class="col border border-dark" >
            <div class="p-3">
              <h1>${element.title}</h1>
              <img class="img-products" src="${element.image}">
              <p>${element.category}</p>
              <p>${element.description}</p>
              <p>$${element.price}</p>
            </div>
            <button class="button-cart" data-id=${element.id}>Mas info</button>
          </div>`;
      });
    }

    showProducts();

    // Configuración de event listener después de mostrar los productos
    const btnCart = document.querySelectorAll(".button-cart");
    console.log(btnCart);

    function getInfoById() {
      btnCart.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          console.log("BtnClick");
          const productId = event.target.getAttribute("data-id");
          window.location.href = `Productos.html?id=${productId}`;
          console.log(productId);
        });
      });
    }

    getInfoById();
    console.log(data);
  })
  .catch((error) => {
    console.error("Hubo un problema con tu operación de fetch:", error);
  });


