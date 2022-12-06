const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");

//memanggil ejs
app.set("view engine", "ejs");
app.use(morgan("dev"));
//menampilkan gambar
app.use(express.static("public"));

// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

//memanggil express layouts
app.use(expressLayouts);
app.get("/", (req, res) => {
  res.render("index", { nama: "Anifa", layout: "layout/main", title: "Halaman Home" }); //menambahkan objek
});

app.get("/about", (req, res) => {
  res.render("about", { layout: "layout/main", title: "Halaman About" });
});

app.get("/contact", (req, res) => {
  const contact = [
    {
      name: "Anifa",
      email: "anifa@gmail.com",
    },
    {
      name: "Aulia",
      email: "aulia@gmail.com",
    },
    {
      name: "Abdari",
      email: "abdari@gmail.com",
    },
  ];
  res.render("contact", { layout: "layout/main", title: "Halaman Contact", contact });
});

app.get("/product/:id", (req, res) => {
  // res.send("product id:" + req.params.id + '<br></br>'
  // + 'category id : ' + req.params.idCat)
  res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`);
});

//untuk req apapun
app.use("/", (req, res) => {
  res.status(404);
  res.send("Page Not Found 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
