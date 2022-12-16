// var checkVali = new Validation();
var productServices = new ProductService();
function getEle(id) {
  return document.getElementById(id);
}
function getList() {
  productServices.getListProduct()
    .then(function name(result) {
      if (result.statusText === "OK") {

        renderHTML(result.data);
      }
    })
    .catch(function name(error) {
      console.log(error);
    })
}
getList();
function renderHTML(data) {
  var content = "";
  if (data && data.length > 0) {
    data.forEach(function (product, index) {
      content += `
    <tr>
    <td>${index + 1}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.screen}</td>
    <td>${product.backCamera}</td>
    <td>${product.frontCamera}</td>
    <td><img src="${product.img}" alt="" width="90px" height="80px"></td>
    <td>${product.desc}</td>
    <td>${product.type === "iphone" ? "Iphone" : "Samsung"}</td>
    <td>
    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="editProduct('${product.id}')">Edit</button>
    <button class="btn btn-info" onclick="deleteProduct('${product.id}')">Delete</button>
    </td>
    </tr>
    `
    })
  }
  getEle("tblDanhSachSP").innerHTML = content;
}
function deleteProduct(id) {
  productServices.deleteProduct(id)
    .then(function () {
      getList();
    })
    .catch(function (error) {
      console.log(error);
    })
}
getEle("btnThemSP").addEventListener("click", function (params) {
  // getEle("suaSP").style.display = "none";
  // getEle("themSP").style.display = "block";
  // getEle("errorMaSP").style.display = "none";
  // getEle("errorTenSP").style.display = "none";
  // getEle("errorGiaSP").style.display = "none";
  // getEle("errorManHinh").style.display = "none";
  // getEle("errorBackCmr").style.display = "none";
  // getEle("errorFrontCmr").style.display = "none";
  // getEle("errorMoTa").style.display = "none";
  // getEle("errorHinhAnh").style.display = "none";
  // getEle("maSP").value = "";
  // getEle("TenSP").value = "";
  // getEle("GiaSP").value = "";
  // getEle("manHinhSP").value = "";
  // getEle("backCamera").value = "";
  // getEle("frontCamera").value = "";
  // getEle("hinhAnhSP").value = "";

  // getEle("moTaSP").value = "";
  // getEle("loaiSP").value = "";
})

function getProduct() {
  var productID = getEle("maSP").value;
  var productName = getEle("TenSP").value;
  var productPrice = getEle("GiaSP").value;
  var productScreen = getEle("manHinhSP").value;
  var productBackcmr = getEle("backCamera").value;
  var productFrontcmr = getEle("frontCamera").value;
  var productImg = getEle("hinhAnhSP").value;

  var productDesc = getEle("moTaSP").value;
  var productType = getEle("loaiSP").value;
  // var isValid = true;
  // isValid &= checkVali.checkSpace(productID, "errorMaSP");
  // isValid &= checkVali.checkSpace(productName, "errorTenSP");
  // isValid &= checkVali.checkSpace(productPrice, "errorGiaSP");
  // isValid &= checkVali.checkSpace(productScreen, "errorManHinh");
  // isValid &= checkVali.checkSpace(productBackcmr, "errorBackCmr");
  // isValid &= checkVali.checkSpace(productFrontcmr, "errorFrontCmr");
  // isValid &= checkVali.checkSpace(productImg, "errorHinhAnh");
  // isValid &= checkVali.checkSpace(productDesc, "errorMoTa");
  // // isValid &= checkVali.checkSelect("LoaiSP", "errorLoaiSP");
  // if (!isValid) return;


  var product = new Product(productID, productName, productPrice, productScreen, productBackcmr, productFrontcmr, productImg, productDesc, productType);
  return product;
}
getProduct();
getEle("themSP").addEventListener("click", function (params) {
  var product = getProduct();
  productServices.addProduct(product)
    .then(function (params) {
      getList();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    })

})
function editProduct(id) {
  getEle("modalTitle").innerHTML = "Edit Products";
  getEle("themSP").style.display = "none";
  getEle("suaSP").style.display = "block";
  productServices.getListID(id)
    .then(function (result) {
      var product = result.data;
      console.log(product);
      getEle("maSP").value = product.id;
      getEle("TenSP").value = product.name;
      getEle("GiaSP").value = product.price;
      getEle("manHinhSP").value = product.screen;
      getEle("backCamera").value = product.backCamera;
      getEle("frontCamera").value = product.frontCamera;
      getEle("hinhAnhSP").value = product.img;
      getEle("moTaSP").value = product.desc;
      getEle("loaiSP").value = product.type;
    })
    .catch(function (error) {
      console.log(error);
    })
}

getEle("suaSP").addEventListener("click", function (params) {
  var product = getProduct();
  console.log(product);
  productServices.updateProduct(product)
    .then(function name() {
      getList();
      document.getElementsByClassName("close")[0].click();

    })
    .catch(function name(error) {
      console.log(error);
    })
})

getEle("filterProduct").addEventListener("change", function name(params) {
  var select = getEle("filterProduct").value;
  productServices.getListProduct()
    .then(function name(result) {
      var data = result.data
      var filter = data;
      if (select !== "all") {
        filter = data.filter(function name(product) {
          return product.type === select;
        })
      }
      console.log(filter);
      renderHTML(filter);
    })
    .catch(function name(error) {
      console.log(error);
    })
})
