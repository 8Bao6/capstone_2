function ProductService() {
  this.getListProduct = function () {
    return axios({
      url: "https://6380c31c8efcfcedac0e45c1.mockapi.io/api/capstone",
      method: "GET",
    })
  };
  this.deleteProduct = function (id) {
    return axios({
      url: `https://6380c31c8efcfcedac0e45c1.mockapi.io/api/capstone/${id}`,
      method: "DELETE",
    })
  }
  this.addProduct = function (product) {
    return axios({
      url: "https://6380c31c8efcfcedac0e45c1.mockapi.io/api/capstone",
      method: "POST",
      data: product,
    })
  }
  this.getListID = function (id) {
    return axios({
      url: `https://6380c31c8efcfcedac0e45c1.mockapi.io/api/capstone/${id}`,
      method: "GET",
    })
  }
  this.updateProduct = function (product) {
    return axios({
      url: `https://6380c31c8efcfcedac0e45c1.mockapi.io/api/capstone/${product.id}`,
      method: "PUT",
      data: product,
    })
  }
}