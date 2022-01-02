let buttonTag = document.getElementById("button")
buttonTag.addEventListener("click", (e) =>{
    e.preventDefault();
    let userName = document.getElementById("username").value
    let passWord = document.getElementById("password").value
    let account = listAccount.filter(function(account){
       return account.userName == userName 
       && account.passWord == passWord
    })
   if(account.length == 0){
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
    Swal.fire({
        icon: 'error',
        title: 'thông báo',
        text: 'tài khoản không tồn tại',
      })
   }else{
       let accountJson = JSON.stringify(account[0])
       sessionStorage.setItem("account", accountJson)
       window.location.href = "../page/admin.html"
   }
})