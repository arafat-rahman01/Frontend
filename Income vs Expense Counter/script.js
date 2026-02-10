let amounts=[];

const incomeEl=document.getElementById("income");
const expenseEl=document.getElementById("expense");

document.getElementById("addIncome").onclick= ()=>{
    amounts.push(500);
    update();
};

document.getElementById("addExpense").onclick= ()=>{
    amounts.push(-200);
    update();
};

function update(){
    const income=amounts.filter(a=>a>0).reduce((a,b)=>a+b,0);
    const expense=amounts.filter(a=>a<0).reduce((a,b)=>a+b,0);
    incomeEl.innerText=`Income: ${income}`;
    expenseEl.innerText=`Expense: ${Math.abs(expense)}`;
}

// let amounts=[];
// const incomeEl=document.getElementById("income");
// const expenseEl=document.getElementById("expense");

// document.getElementById("addIncome").onclick=()=>{
//     amounts.push(500);
//     update();
// }
// document.getElementById("addExpense").onclick=()=>{
//     amounts.push(-200);
//     update();
// }

// function update(){
//     const income=amounts.filter(a=>a>0).reduce((a,b)=>a+b,0);
//     const expense=amounts.filter(a=>a<0).reduce((a,b)=>a+b,0);

//     incomeEl.innerText=`Income: ${income}`;
//     expenseEl.innerText=`Expense: ${expense}`;
// }