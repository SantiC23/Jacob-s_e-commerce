function showCart() {
  let getArray = JSON.parse(localStorage.getItem("cartArray"));
  console.log("este es un array de productos", getArray);
  let getClassCart = document.getElementById("divCart");

  getArray.forEach((element) => {
    console.log(element.price);
    getClassCart.innerHTML += `<div id=${element.id} ><p>${element.title}</p>
    <img src =${element.image}>
    <p>${element.price}</p><button onclick="removeFromCart('${element.id}')"> Eliminar artículo </button></div>    
    `;

    console.log("este es un objeto", element);
  });
}
showCart();

/*Funcion para sacar articulos*/

function removeFromCart(articleId) {
  let getArray = JSON.parse(localStorage.getItem("cartArray"));
  const articleElement = document.getElementById(articleId);
  articleElement.remove();

  //Borramos el producto del local storage.
  for (const product of getArray) {
    if (product.id == articleId) {
      let indice = getArray.indexOf(product);
      getArray.splice(indice, 1);
      localStorage.setItem("cartArray", JSON.stringify(getArray));
    }
  }
}
