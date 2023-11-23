let bakiye = 1000


let isim = prompt("Kullanıcı adı giriniz.")
let sifre = prompt("Şifrenizi giriniz.")


let isimBasHarf = isim.slice(0,1)
let isimBuyukBasHarf = isimBasHarf.toUpperCase()
let isimGeriKalan = isim.slice(1, isim.length)
let isimGeriKalanKucuk = isimGeriKalan.toLowerCase()
let isimTamami = isimBuyukBasHarf + isimGeriKalanKucuk

alert(" Hoşgeldiniz, " + isimTamami )
function islemler(){ 
let islemSecimi= Number(prompt("Yapmak istediğiniz işlemi seçin \n1. Bakiye Kontrolü \n2. Para Yatır \n3. Para çek "))
if(islemSecimi === 1){
    bakiyeKontrolu()
}if(islemSecimi === 2){
    paraYatir()
}if(islemSecimi === 3){
    paraCek()
}
}

islemler()


function bakiyeKontrolu(){
        alert(`Değerli kullanıcımız bakiyeniz ${bakiye}TL'dir. `)
        return cikis()
   
}


function paraYatir(){
        let yatirmaYeri = Number(prompt("Nereye para yatırmak istiyorsunuz?\n1. Yatırım hesabıma\n2. Banka hesabıma"))
            if(yatirmaYeri === 1 || yatirmaYeri === 2){ 
               yatirimMiktari = Number(prompt("Yatırmak istediğiniz tutarı giriniz."))
               alert("Para yatırma işleminiz başarıyla gerçekleşti.")
               bakiye = bakiye + yatirimMiktari
               return cikis()
                }else{
                    alert("Geçersiz işlem")
                    paraYatir()
                }
}


function paraCek(){
        let cekmeMiktari = Number(prompt("Çekmek istediğiniz miktarı giriniz."))
            if(bakiye >= cekmeMiktari){
                alert("Para çekme işleminiz başarıyla tamamlandı.")
                bakiye = bakiye - cekmeMiktari
                return cikis()
                    }else{
                         alert("Yetersiz bakiye lütfen tekrar deneyin.")
                            return paraCek()
                            }
}


function cikis(){
   let onayla = confirm("Çıkış yapmak ister misiniz?")
    if(onayla === true){
        alert("İyi günler.")
    }else{
        islemler()
    }
}