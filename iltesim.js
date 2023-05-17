
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
  function validateExactCharacterCount(tele, expectedLength) {
   return tele.length === expectedLength;
 }

function kontrol(){
var isim=document.getElementById("adı").value;
var soy=document.getElementById("soyadı").value;
var meseg=document.getElementById("mesaj").value;
var email = document.getElementById("email").value;
var dosya=document.getElementById("dosya").value;
var tele=document.getElementById("telefon").value;
if(isim==""){
   alert("Lütfen Adınızı Giriniz.");
}
 if(soy==""){
    alert("Lütfen Soyadınızı Giriniz.");
 }
 if (!validateEmail(email)) {
   alert("Lütfen Geçerli bir e-posta adresi giriniz.");
}
if (!validateExactCharacterCount(tele, 11)) {
   alert("Lütfen Geçerli 11 Haneli Cep Telefonu Giriniz.");
 }
 if(meseg==""){
    alert("Lütfen Mesej Alanını Doldurunuz.");
 }
 if(dosya==""){
    alert("Lütfen Bir dosya Seçiniz.");
 }
else{
   alert("MESAJINIZ ALINDI TEŞEKÜRLER.");
}
}
