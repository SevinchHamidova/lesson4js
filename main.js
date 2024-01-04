// domdan querySelector orqali form chaqirilib elForm o'zgaruvchiga olingan
var elForm = document.querySelector(".js-formFizzBuzz");
// domdan querySelector orqali input chaqirilib elInput o'zgaruvchiga olingan
var elInput = document.querySelector(".js-FizzBuzz-input");
// domdan querySelector orqali output chaqirilib elresult o'zgaruvchiga olingan
var elresult = document.querySelector(".js-result");
//elformni submit xodisasini eshtilmoqda va funksiya ochilmoqda 
//funksiya ichiga xodisa oladi unga event deb yozishimiz mumkin emas chunki shunday kalit so'z mavjud shuning uchun evt so'zidan foydalandik.
elForm.addEventListener("submit", function(evt){
    //hodisani qayta yangilanishini to'xtamiz
    evt.preventDefault();
    //inputga berilayotgan valueni numberga aylantirilgan holatda olamiz va boshqa o'zgaruvchida solamz. 
    var inpValue = Number(elInput.value);
    //if else orqali shart beramiz, inputga kelayotgan valueni qoldiqli bo'lamiz 3ga uning qoldiga teng bo'lsa 0 ga va inputdagi valueni bolamz qoldirqli 5ga teng bolsa 0ga 
    if(inpValue % 3 == 0 && inpValue % 5 == 0){
        //outputda texti fizbuz chiqsin
        elresult.textContent= "FizzBuzz";
        //yoki agar inputning value 3ga qoldiqli bolinganda teng bolsa 0ga
    }else if (inpValue % 3 == 0){
        //outputda texti Fizz chiqsin
        elresult.textContent = "Fizz";
        //yoki agar inputning value 3ga qoldiqli bolinganda teng bolsa 0ga
    }else if (inpValue % 5 ==0){
        //outputda texti Bizz chiqsin
        elresult.textContent = "Buzz";
        //yoki
    }else {
        //outputda textiga inputda kirilgan value chaqirilsin va bu son 3ga ham 5ga ham bo'linmasligi ma'lum bo'lsn
        elresult.textContent = `${inpValue} soni 3 ga ham 5 ga ham bo'linmaydi!`;
    }
    // if else ishi yakunlanb outputga natija chiqqanida inputning ichi o'chirilib bo'shliq hosil qilinsin
    elInput.value = " ";
});