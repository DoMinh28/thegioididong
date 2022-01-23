let listAccount = []
class Account{
    constructor(userName,passWord,fullName,role){
     this.userName = userName
     this.passWord = passWord
     this.fullName = fullName
     this.role = role
    }
}
let account1 = new Account("dominh","123","Đỗ Minh","admin")
let account2 = new Account("ngoclinh","123","Ngọc Linh","admin")
listAccount.push(account1,account2)
let account3
let button1 = document.getElementById("button1")
button1.addEventListener("click", (e) =>{
    e.preventDefault();
   let userName = document.getElementById("tk").value
   let passWord = document.getElementById("mk").value
   let fullName = document.getElementById("name").value
   account3 = new Account(userName,passWord,fullName,"admin")
   listAccount.push(account3)
   document.getElementById("tk").value = ""
   document.getElementById("mk").value = ""
   document.getElementById("name").value = ""
   Swal.fire({
    icon: 'success',
    title: 'Chúc Mừng',
    text: 'Đăng kí tk admin thành công',
  })
})
const troVe = () => {
    window.location.href = "../page/login.html"
}