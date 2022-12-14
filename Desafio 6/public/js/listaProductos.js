const socket = io();
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("nameProduct");
const priceInput = document.getElementById("price");
const imgInput = document.getElementById("imgUrl");
const listProducts = document.getElementById("listProducts");


const sendProduct = (productInfo) => {
 
  socket.emit("product:info", productInfo);
};

const renderProduct = (productData) => {
  const html = productData.map((productInfo) => {
    console.log(productInfo);
    return `<li>
              <span>${productInfo.name}</span>
              <span>${productInfo.price}</span>
              <img src=${productInfo.thumbnail} />
            </li>`;
  });

  listProducts.innerHTML = html.join(" ");
};


const submitHandler = (event) => {
  
  event.preventDefault();

  
  const productInfo = {
    name: productInput.value,
    price: priceInput.value,
    thumbnail: imgInput.value,
  };

  
  sendProduct(productInfo);

 
  productForm.reset();
};

productForm.addEventListener("submit", submitHandler);

socket.on("server:product", renderProduct);
