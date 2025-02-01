//11-topshiriq
let ism = 'Shahzod'
let yosh = 20
let ball = 7

//12-topshiriq
console.log(ism);
console.log(yosh);
console.log(ball);

//13-topshirq
// console.log(); => bu ma'lumotlarni Console ekranida chiqaradi 
let me = "Me"
console.log(me);
// alert => esa ma'lumotni bilidirshnoma singari aks ettiradi 
alert(me)

//14-topshiriq
function Talaba() {
    if (ball > 6) {
        console.log("qabul qilindi");
    }
    else {
        console.log("Qabul qilinmadi");
    }
}

//15-topshiriq
let sinf = ['Mubina', 'Omina', 'Gulshan']
console.log(sinf);

//16-topshiriq
let user = {
    ismi: "Mubinaxon",
    familiya: "Rasuljonova",
    yosh: 16,
    manzil: "Andijon",
    oqish: {
        nomi: "Meta IT School",
        yonalish: "Frontend",
        davomiyligo: "7 oy"
    },
    aloqa: {
        telegram: "@Mubina_dev",
        telefon: "+(998) 94 729 17 19"
    }

}
//17-topshiriq
console.log(user.ismi);

//18-topshiriq
let meva = ['olma', 'nok', 'anor', 'behi', 'xurmo']
console.log(meva);
meva.pop()
console.log(meva);

//19-topshiriq
let meva1 = ['olma', 'nok', 'anor', 'behi', 'xurmo']
console.log(meva1);
meva1.splice(2, 1)
console.log(meva1);

//20-topshiriq
let yoshi = 9
let natija = (yoshi > 10) ? 'Katta' : 'Kichik'
console.log(natija);

//21-topshiriq
//576px-telefon yombosh shaklidagi
//400px-o'zini razmeri

//22-topshiriq
let btn = document.querySelector('.btn1')
let txt = document.querySelector('.txt1')
btn.addEventListener('click', () => {
    txt.innerHTML = 'salom'
})

//23-topshirq
let btn1 = document.querySelector('.btn2')
btn1.addEventListener('click', () => {
    txt.style.color = 'red'
})

//24-topshiriq
let btn2 = document.querySelector('.btn3')
let body = document.querySelector('body')
btn2.addEventListener('click', () => {
    body.style.backgroundColor = 'green'
})

//25-topshiriq
let img2 = document.querySelector('.img2')
let btn3 = document.querySelector('.btn4')
btn3.addEventListener('click', () => {
    img2.style.borderRadius = '50%'
})

//26-topshiriq
let btn5 = document.querySelector('.btn5')
btn5.addEventListener('click', () => {
    img2.style.display = 'none'
})

//27-topshiriq
let btn6 = document.querySelector('.btn6')
let p = document.querySelector('p')
btn6.addEventListener('click', () => {
    p.innerHTML = ''
})

//28-topshiriq
let btn7 = document.querySelector('.btn7')
btn7.addEventListener('click', () => {
    btn7.style.display = 'none'
})

//29-topshiriq
let btn8 = document.querySelector('.btn8')
btn8.addEventListener('click', () => {
    body.style.display = ' none'
})

//30-topshiriq
let btn9 = document.querySelector('.btn9')
let h2 = document.querySelectorAll('h2')
btn9.addEventListener('click', () => {
    for(value of h2){
        value.classList.add('stil3')
    }
})

//32-topshiriq
$(".jq1").click(function (e) {
    e.preventDefault();
    $("body").css("background-color", "red")
});

//33-topshirq
$(".jq2").click(function (e) { 
    e.preventDefault();
    $(".jqrasm").css("display", "none")
});

//34-topshiriq
$(".jq3").click(function (e) { 
    e.preventDefault();
    $(".jqrasm1").css("border-radius", "50%")
    $(".jqrasm2").css("border-radius", "50%")
});

//35-topshiriq
$(".jq4").click(function (e) { 
    e.preventDefault();
    $(".jq4").css("display", "none")
});






