class Employee {
  constructor(id, fullName, baseSalary, productQuantity) {
    (this.id = id),
      (this.fullName = fullName),
      (this.baseSalary = baseSalary),
      (this.productSalary = 30),
      (this.productQuantity = productQuantity);
  }
  set setId(id) {
    this.id = id;
  }
  get getId() {
    return (this.id = id);
  }
  set setFullName(fullName) {
    this.fullName = fullName;
  }
  get getFullName() {
    return (this.fullName = fullName);
  }
  set setBaseSalary(baseSalary) {
    this.baseSalary = baseSalary;
  }
  get getBaseSalary() {
    return (this.baseSalary = baseSalary);
  }
  set setProductSalary(productSalary) {
    this.productSalary = productSalary;
  }
  get getProductSalary() {
    return (this.productSalary = productSalary);
  }
  set setProductQuantity(productQuantity) {
    this.productQuantity = productQuantity;
  }
  get getProductQuantity() {
    return (this.productQuantity = productQuantity);
  }
}


export default Employee;