//  document.getElementById("welcome").textContent = "Hello "+accountObject.fullName
let id = 0
let fullName = document.getElementById("nameAccount")
fullName.textContent = accountObject.fullName+" "
fullName.style.fontFamily = "'Roboto', sans-serif"
fullName.style.fontWeight = "700"
 const logOut = () => {
     sessionStorage.removeItem("account")
     window.location.href = "../page/login.html"
 }
 const changeContent = (id,tabId) =>{
let listContent = document.getElementsByClassName("body__right__content")
let listTab = document.getElementsByClassName("body__left__item")
for(let i=0;i<listContent.length;i++){
    listContent[i].classList.remove("active")
}
for(let i=0;i<listTab.length;i++){
    listTab[i].classList.remove("active")
}
document.getElementById(tabId).classList.add("active")
document.getElementById(id).classList.add("active")
 }
 const addInfo = () => {
     document.getElementById("addInfo").style.transform = "translateY(0)"
     document.getElementById("overlay").style.display = "block"
     document.getElementById("button3").style.display = "block"
     document.getElementById("button4").style.display = "none"
     
 }
 const outAddInfo = () =>{
    document.getElementById("addInfo").style.transform = "translateY(110%)"
    document.getElementById("overlay").style.display = "none"
    clearForm()
 }
 let listPhone = []
 class Phone {
     constructor(ten,gia,moTa,soLuong,year,hang,tinhTrang,chip,ram,image){
       this.ten = ten
       this.gia = gia
       this.moTa = moTa
       this.soLuong = soLuong
       this.year = year
       this.hang = hang
       this.tinhTrang = tinhTrang
       this.chip = chip
       this.ram = ram
       this.image = image
     }
 }
const fillItem = (id,ten,gia,moTa,soLuong,year,hang,tinhTrang,chip,gam,image) =>{
return `<tr class="table-primary" onclick="showInfo('${id}')">
<th scope="row" width="70px">
  <img src="${image}" alt="" width="70px" >
</th>
<td class="table-light">${ten}</td>
<td class="table-secondary">${gia}</td>
<td class="table-success soLuong"">${soLuong}</td>
<td class="table-danger">${moTa}</td>
<td class="table-warning">${year}</td>
<td class="table-info">${hang}</td>
<td class="table-light">${tinhTrang}</td>
<td class="table-primary">${chip}</td>
<td class="table-success">${gam}</td>
</tr>`
}
const clearForm = () => {
  document.getElementById("ten").value = ""
  document.getElementById("gia").value = ""
  document.getElementById("moTa").value = ""
  document.getElementById("soLuong").value = ""
  document.getElementById("year").value = ""
  document.getElementById("hang").value = ""
  document.getElementById("tinhTrang").value = ""
  document.getElementById("chip").value = ""
  document.getElementById("ram").value = ""
  document.getElementById("image").value = ""
}

 const addPhone = () => {
   let ten = document.getElementById("ten").value
   let gia = document.getElementById("gia").value
   let moTa = document.getElementById("moTa").value
   let soLuong = document.getElementById("soLuong").value
   let year = document.getElementById("year").value
   let hang =  document.getElementById("hang").value
   let tinhTrang = document.getElementById("tinhTrang").value
   let chip =  document.getElementById("chip").value
   let ram = document.getElementById("ram").value
   let image = document.getElementById("image").value
   let phone = new Phone(ten,gia,moTa,soLuong,year,hang,tinhTrang,chip,ram,image)
   listPhone.push(phone) 
   html = fillItem(id,listPhone[id].ten,listPhone[id].gia,listPhone[id].moTa,listPhone[id].soLuong,listPhone[id].year,listPhone[id].hang,listPhone[id].tinhTrang,listPhone[id].chip,listPhone[id].ram,listPhone[id].image)
   document.getElementById("tbody").innerHTML += html;
   id = id + 1
   clearForm()
   outAddInfo()
   Swal.fire({
    icon: 'success',
    title: 'Chúc Mừng',
    text: 'Add phone thành công',
  })
 }
 const showInfo = (id) => {
  addInfo()
  document.getElementById("button3").style.display = "none"
  document.getElementById("button4").style.display = "block"
  document.getElementById("ten").value = "" + listPhone[id].ten
  document.getElementById("gia").value = "" + listPhone[id].gia
  document.getElementById("moTa").value = "" + listPhone[id].moTa
  document.getElementById("soLuong").value = "" + listPhone[id].soLuong
  document.getElementById("year").value = "" + listPhone[id].year
  document.getElementById("hang").value = "" + listPhone[id].hang
  document.getElementById("tinhTrang").value = "" + listPhone[id].tinhTrang
  document.getElementById("chip").value = "" + listPhone[id].chip
  document.getElementById("ram").value = "" + listPhone[id].ram
  document.getElementById("image").value = "" + listPhone[id].image
 }