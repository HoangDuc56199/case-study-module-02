import Employee from './Employee.js'

let employees = [];

const main = () => {
 
    employees =[
        new Employee(1, "Huy Quan Hoa", 500, 50),
        new Employee(2, "Huan Rose", 500, 55),
        new Employee(3, "Kha Banh", 500, 40),
    ]

  console.log("mảng khởi tạo");
  showEmp(employees);
  inputEmp(employees);
  console.log("mảng sau khi thêm nhân viên");
  showEmp(employees);
  console.log("mảng sau khi tính tổng lương của từng nhân viên");
  totalSalaryArr(employees);
  showEmp(employees);
  console.log("mảng sau khi sắp xếp");
  sortArr(employees);
  showEmp(employees);
  console.log("những nhân viên có mức lương cao nhất là:");
  console.log(findMaxOfTotalSalaryEmp(employees));
  console.log("mảng sau khi thay đổi thông tin nhân viên");
  editItemArr(employees);
  showEmp(employees);
  console.log("mảng sau khi xóa nhân viên");
  employees = deleteItem(employees);
  showEmp(employees);
};

const showEmp = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};

const addEmp = (index) => {
  let employee = {};
  let lengthArrOrigin = employees.length;
  employee.id = lengthArrOrigin + index;
  employee.fullName = prompt(`nhập tên nhân viên thứ ${employee.id}`);
  employee.baseSalary = Number(
    prompt(`nhập lương cơ bản của nhân viên thứ ${employee.id}`)
  );
  employee.productSalary = 30;
  employee.productQuantity = Number(
    prompt(`nhập số lượng sản phẩm của nhân viên thứ ${employee.id}`)
  );
  return employee;
};
const inputEmp = (arr) => {
  let n = Number(prompt("nhập số nhân viên muốn thêm:"));
  for (let i = 0; i < n; i++) {
    arr.push(addEmp(i + 1));
  }
};
const totalSalary = (employee) => {
  let totalSalary =
    employee.baseSalary + employee.productSalary * employee.productQuantity;

  if (employee.productQuantity > 50) {
    totalSalary =
      totalSalary +
      (employee.productQuantity - 50) * employee.productSalary * 0.1;
  } else if (employee.productQuantity < 50) {
    totalSalary = totalSalary * 0.9;
  }

  return (employee.totalSalary = totalSalary);
};
const totalSalaryArr = (arr) => {
  arr.map((index) => {
    totalSalary(index);
  });
};
const sortArr = (arr) => {
  arr.sort((index1, index2) => index1.totalSalary - index2.totalSalary);
};
const findMaxOfTotalSalaryEmp = (arr) => {
  arr.sort((index1, index2) => index1.totalSalary - index2.totalSalary);
  let newArr = [];
  let maxTotalSalary = arr[arr.length - 1].totalSalary;
  newArr = arr.filter((item) => item.totalSalary == maxTotalSalary);
  return newArr;
};
const editItem = (item) => {
  item.fullName = prompt("nhập tên muốn thay đổi");
  item.baseSalary = Number(prompt("nhập lương cơ bản muốn thay đổi"));
  item.productQuantity = Number(prompt("nhập số lượng sản phẩm muốn thay đổi"));
};
const editItemArr = (arr) => {
  let n = Number(prompt("nhập id muốn chỉnh sửa"));

  while (n > arr.length || n < 0) {
    alert("vui lòng nhập id có trong mảng");
    n = Number(prompt("nhập id muốn chỉnh sửa"));
  }

  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === n) {
      index = i;
    }
  }
  editItem(arr[index]);
};
const deleteItem = (arr) => {
  let n = Number(prompt("nhập id nhân viên muốn xóa"));

  while (n > arr.length || n < 0) {
    alert("vui lòng nhập id có trong mảng");
    n = Number(prompt("nhập id muốn chỉnh sửa"));
  }

  let newArr = arr.filter((item) => item.id !== n);
  return newArr;
};

main();