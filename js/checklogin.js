let acccountLogin = sessionStorage.getItem("account")
let accountObject = JSON.parse(acccountLogin)
if(acccountLogin == null || accountObject.role != "admin"){
    window.location.href = "../page/login.html"
}