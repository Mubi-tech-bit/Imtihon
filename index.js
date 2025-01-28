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
btn2.addEventListener('click', ()=>{
    body.style.backgroundColor = 'green'
})

//25-topshiriq
let img2 = document.querySelector('.img2')
let btn3 = document.querySelector('.btn4')
btn3.addEventListener('click', ()=>{
    img2.style.borderRadius = '50%'
})









