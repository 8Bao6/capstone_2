function Validation() {
  this.checkSpace = function name(value, errorID) {
    if (value === "") {
      getEle(errorID).style.display = "block";
      return false
    }
    getEle(errorID).style.display = "none";
    return true;
  }
  this.checkSelect = function name(idSelect, errorID) {
    if (getEle(idSelect).selectedIndex !== 0) {
      getEle(errorID).style.display = "none"
      return true;
    }
    getEle(errorID).style.display = "block";
    return false;
  }
}
