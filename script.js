function showWelcome() {
  alert("¡Bienvenido a Jacob's!"); // Alerta que debe aparecer solo una vez
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
          <div class="col border border-dark" data-id=${element.id}>
            <div class="p-3">
              <h1>${element.title}</h1>
              <img class="img-products" src="${element.image}">
              <p>${element.category}</p>
              <p>${element.description}</p>
              <p>$${element.price}</p>
            </div>
            <button class="button-cart">Agregar al carrito</button>
          </div>`;
      });
    }

    showProducts();

    // Configuración de event listener después de mostrar los productos
    const btnCart = document.querySelector(".button-cart");

    btnCart.addEventListener("click", () => {
      console.log("BtnClick");
      window.location = "Productos.html";
    });

    console.log(data);
  })
  .catch((error) => {
    console.error("Hubo un problema con tu operación de fetch:", error);
  });

// Configuración de localStorage
const voidArray = JSON.stringify([]);
localStorage.setItem("cartArray", voidArray);
