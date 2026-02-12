const list=document.getElementById("list");
const form=document.getElementById("form");
const text=document.getElementById("text");
const amount=document.getElementById("amount");
const balance=document.getElementById("balance");
const income=document.getElementById("income");
const expense =document.getElementById("expense");

let transaction=
    localStorage.getItem("transaction")!==null
    ? JSON.parse(localStorage.getItem("transaction"))
    :[];

function addTransaction(e){
    e.preventDefault();

    if(text.value==="" || amount.value=="") return;

    const transaction={
        id:Math.floor(Math.random()*100000),
        text:text.value,
        amount:+amount.value
    };

    transaction.push(transaction);

    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    text.value="";
    amount.value="";
};

form.addEventListener("submit",addTransaction);

function addTransactionDom(transaction){
    const sign=transaction.amount<0?"-":"+";

    const item=document.createElement("li");
    item.classList.add(transaction.amount<0?"minus":"plus");

    item.innerHTML=`
    ${transaction.text}
    <span>${sign}৳${Math.abs(transaction.amount)}</span>
    <button onclick="removeTransaction(${transaction.id})";
    `
    list.appendChild(item);
};