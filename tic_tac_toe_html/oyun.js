const oyunTahtasi = ["","","","","","","","",""];
const oyuncuKazananDizi = "XXX";
const bilgisayarKazananDizi = "OOO";

const kazanmaKontrolEt = (kontrolEdilecekHamle) => {

    let kazananVar = false;

    // yatay ve dikey kontrol çözüm 
    for(let i = 0; i < 3; i++){
        if (kontrolEdilecekHamle === (oyunTahtasi[i * 3] + oyunTahtasi[i * 3 + 1] + oyunTahtasi[i * 3 + 2])){
            
        }

        if (kontrolEdilecekHamle === (oyunTahtasi[i] + oyunTahtasi[i + 3] + oyunTahtasi[i + 3 * 2])){
            
        }
    }
    // yatay kontrol çözüm 2
    for(let i = 0; i < 9; i+=3){
        if (kontrolEdilecekHamle === (oyunTahtasi[i] + oyunTahtasi[i + 1] + oyunTahtasi[i + 2])){
            
        }
    }
    // dikey kontrol çözüm 
    for(let i = 0; i < 3; i++){
        if (kontrolEdilecekHamle === (oyunTahtasi[i] + oyunTahtasi[i + 3] + oyunTahtasi[i + 3 * 2])){
            
        }
    }


    // çapraz kontrol
    if (kontrolEdilecekHamle===(oyunTahtasi[0] + oyunTahtasi[4] + oyunTahtasi[8])
        || kontrolEdilecekHamle===(oyunTahtasi[2] + oyunTahtasi[4] + oyunTahtasi[6])) {

            kazananVar = true;

    setTimeout(function(){
        if (kontrolEdilecekHamle === oyuncuKazananDizi) {
        alert("Oyuncu kazandı");
    } else {
        alert("Bilgisayar kazandı");
    }
    }, 500
    )   
}
    return kazananVar;
}

const hamleYap = buttonId => { // arrow function
    let tiklananButtonIndex = Number(buttonId);

    let tiklananButton = document.getElementById(buttonId);
    tiklananButton.innerHTML = "X";
    tiklananButton.disabled = true; // button tekrar tıklanamaz hale geldi
    tiklananButton.style.color="black";

    oyunTahtasi[tiklananButtonIndex] = "X";

    let kazandimi = kazanmaKontrolEt(oyuncuKazananDizi);

    if(kazandimi === true){
        return;
    }

    // kullanıcı bir hamle yaptıktan sonra başka bir hamle yapmöasını engellemek için
    for(let i = 0; i < 9 ; i++){
        document.getElementById(i).disabled = true;
    }

    while(true){

        // oyun tahtasında hamle yapılabilecek tek bir yer kaldığını aşağıdaki index karşılaştırmasıyla anlıyoruz
        // aşağıdaki if aynı zamanda zamanda oyunun performansını artırır.
        /*
        if(oyunTahtasi.indexOf("") === oyunTahtasi.lastIndexOf("")){
            let bilgisayaHamleButton = document.getElementById(rastgeleSayi);
            bilgisayaHamleButton.innerHTML = "O";
            bilgisayaHamleButton.disabled = true; // button tekrar tıklanamaz hale geldi
            bilgisayaHamleButton.style.color="black";

            oyunTahtasi[rastgeleSayi] = "O";

            break;
        }
        */

        let rastgeleSayi = (Math.random() * 10) % 9;
        rastgeleSayi = Math.floor(rastgeleSayi);
      
        let mesaj = document.getElementById("mesaj");
        mesaj.innerHTML = "Düşünüyorum...";
 
        if(oyunTahtasi[rastgeleSayi] === ""){
            setTimeout(function(){// bilgisayar hamle yapmadan önce 1 sn beklesin
               
            let bilgisayaHamleButton = document.getElementById(rastgeleSayi);
            bilgisayaHamleButton.innerHTML = "O";
            bilgisayaHamleButton.disabled = true; // button tekrar tıklanamaz hale geldi
            bilgisayaHamleButton.style.color="black";

            oyunTahtasi[rastgeleSayi] = "O";
            

            mesaj.innerHTML = "";


            // kullnaıcının tekrar hamle yapabilmesi için
            for(let i = 0; i < 9 ; i++){
                document.getElementById(i).disabled = false;
            }

            }, 3000);

           
            break; // oyun tahtasında boş bir yer bulup hamle yapılınca döngüden çıkıyoruz.
        }
    }


    kazandimi =  kazanmaKontrolEt(bilgisayarKazananDizi);

    if(kazandimi === true){
            return;
    }

    

   // console.log(oyunTahtasi);
}