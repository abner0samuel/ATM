const leftbtnone =document.querySelector("#leftbtno");
const leftbtntwo = document.querySelector("#leftbtn2");
const leftbtnthree = document.querySelector("#leftbtn3");
const leftbtnfour = document.querySelector("#leftbtn4");
const rightbtnone = document.querySelector("#rightbtn1");
const rightbtntwo = document.querySelector("#rightbtn2");
const rightbtnthree = document.querySelector("#rightbtn3");
const rightbtnfour = document.querySelector("#rightbtn4");
const li_i =document.querySelector("#li1");
const li_ii = document.querySelector("#li2");
const li_iii = document.querySelector("#li3");
const li_iv = document.querySelector("#li4");
const sli_i =document.querySelector("#s_li1");
const sli_ii = document.querySelector("#s_li2");
const sli_iii = document.querySelector("#s_li3");
const sli_iv = document.querySelector("#s_li4");
const text = document.querySelector(".text");
const ul_left =document.querySelector(".ul_left");
const ul_right = document.querySelector(".ul_right");
function go_back(){
    li_i.innerText = 'withdraw money'
    li_ii.innerText = 'CHECK BALANCE'
    li_iii.innerText = 'TRANSFER'
    li_iv.innerText = 'PAYS BILLS'
    sli_i.innerText = 'BUY AIRTIME'
    sli_ii.innerText = 'buy date'
    sli_iii.innerText = 'ACCOUNT SITTING'
    sli_iv.innerText = 'create Account'
}

leftbtnone.addEventListener("click",()=>{
        li_i.innerText = '#10,000'
        li_ii.innerText = '#5,000'
        li_iii.innerText = '#1000'
        li_iv.innerText = 'back'
        sli_i.innerText = '#50,000'
        sli_ii.innerText = '#40,000'
        sli_iii.innerText = '#30,000'
        sli_iv.innerText = 'other Amount'
    
    leftbtnone.addEventListener("click",()=>{
        text.innerText='take your cash'
    })
    leftbtntwo.addEventListener("click", () => {
        text.innerText = 'take your cash'
    })
    leftbtnthree.addEventListener("click", () => {
        text.innerText = 'take your cash'
    })
    rightbtnone.addEventListener("click", () => {
        text.innerText = 'take your cash'
    })
    rightbtntwo.addEventListener("click", () => {
        text.innerText = 'take your cash'
    })
    rightbtnthree.addEventListener("click", () => {
        text.innerText = 'take your cash'
    })
    rightbtnfour.addEventListener("click", () => {
        
    })
})
leftbtnfour.addEventListener("click", () => {
    go_back()
})
leftbtntwo.addEventListener('click',()=>{
    
    document.createElement('input');
    document.createAttribute('id','num1')
    text.innerText(num1)
    document.createElement('input');
    document.createAttribute('id', 'num2')
    text.append(num2)
    document.createElement('input');
    document.createAttribute('id', 'num3')
    text.append(num3)
    document.createElement('input');
    document.createAttribute('id', 'num4')
    text.append(num4)
})