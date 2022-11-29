
import { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const routerProductos = Router();
const products = [
  {
    title: "Lenovo Legion",
    price: 500,
    thumbnail:
      "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    id: 1,
  },
  {
    title: "AMD ryzen 7",
    price: 300,
    thumbnail:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    id: 2,
  },
  {
    title: "mochila",
    price: 80,
    thumbnail:
      "https://media.istockphoto.com/id/1224374453/es/foto/volver-al-concepto-de-la-escuela-mochila-con-material-escolar-sobre-fondo-azul-vista-superior.jpg?b=1&s=170667a&w=0&k=20&c=05lr8WjQg25RLdLFAktZp6j8Q1zVWGe4_2-VGaWkIFY=",
    id: 3,
  },
  {
    title: "ipad",
    price: 1000,
    thumbnail:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    id: 4,
  },
];


routerProductos.get("/", (req, res) => {
  res.render("products", { products });
});


routerProductos.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  const obj = {
    title,
    price,
    thumbnail,
    id: products.length + 1,
  };
  products.push(obj);
  res.render("products", { products });
});


routerProductos.get("/:id", (req, res) => {
  const { id } = req.params;
  const verify = products.some((e) => e.id == Number(id));
  let result;
  let status;
  verify
    ? ((result = products.find((e) => e.id == Number(id))), (status = 200))
    : ((result = { error: "producto no encontrado" }), (status = 404));
  res.status(status).render("product", result);
});


routerProductos.put("/:id", (req, res) => {
  const { id } = req.params;
  const { tittle, price, thumbnail } = req.body;
  const verify = products.some((e) => e.id === Number(id));
  let result;
  let status;
  if (verify) {
    result = products.find((e) => e.id == Number(id));
    const index = products.indexOf(result);
    result = {
      tittle,
      price,
      thumbnail,
      id: Number(id),
    };
    products.splice(index, 1, result);
    status = 200;
  } else {
    result = { error: "producto no encontrado" };
    status = 404;
  }
  res.status(status).json(result);
});


routerProductos.delete("/:id", (req, res) => {
  const { id } = req.params;
  const verify = products.some((e) => e.id === Number(id));
  let result;
  let status;
  if (verify) {
    result = products.find((e) => e.id == Number(id));
    const index = products.indexOf(result);
    products.splice(index, 1);
    result = products;
    status = 200;
  } else {
    result = { error: "producto no encontrado" };
    status = 404;
  }
  res.status(status).json(result);
});

export default routerProductos;
