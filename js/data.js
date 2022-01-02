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