const btn = document.querySelector('#register');
const dateTime = document.querySelector('#date-time');
const loginArea = document.querySelector('#login-area');
const nameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#email');
const date = new Date();


dateTime.innerHTML = `${date.getDate()} - ${(date.getMonth()+1)< 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1)} - ${date.getFullYear()} :: ${date.toTimeString()}`;


btn.addEventListener('click',e=>{
    // loginArea.remove();
    loginArea.style.display = 'none';
    const transactionArea = document.querySelector('.transaction-area');
    transactionArea.style.display = 'block';
    const trTime = document.querySelector('#tr-time');
    const depositBtn = document.querySelector('#deposit-btn');
    const withdrawBtn = document.querySelector('#withdraw-btn');
    let depositValue = document.querySelector('#deposit-value');
    let withdrawValue = document.querySelector('#withdraw-value');
    const showDeposit = document.querySelector('#show-deposit');
    let showBalance = document.querySelector('#show-balance');
    let showWithdraw = document.querySelector('#show-withdraw');
    const userName = document.querySelector('#userName');
    const userEmail = document.querySelector('#userEmail');
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click',()=>{
        transactionArea.style.display = 'none';
        loginArea.style.display = 'block';
    })
    trTime.innerHTML = `${date.getDate()} - ${(date.getMonth()+1)< 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1)} - ${date.getFullYear()}:: ${date.toTimeString()}`;
    userName.textContent = nameInput.value.toString() || 'annonymus-user';
    userEmail.textContent = emailInput.value.toString() || 'guest@bank.com';

    depositBtn.addEventListener('click',e=>{
        let deposit = parseFloat(depositValue.value);
        if(!deposit || deposit < 0){
            alert('Not a valid Input,try again!');
            depositValue.value = '';
        }else{
            showDeposit.innerHTML = Number((parseFloat(showDeposit.innerHTML) + deposit).toFixed(4));
            showBalance.innerHTML = Number((parseFloat(showBalance.innerHTML) + deposit).toFixed(4));
            depositValue.value = '';
        }
    });

    withdrawBtn.addEventListener('click',e=>{
        let withdraw = parseFloat(withdrawValue.value);
        if(!withdraw || withdraw < 0){
            alert('Invalid Input,Try Again!');
            withdrawValue.value = '';
        }else{
            showWithdraw.innerHTML = Number((parseFloat(showWithdraw.innerHTML) + withdraw).toFixed(4));
            showBalance.innerHTML = Number((parseFloat(showBalance.innerHTML) - withdraw).toFixed(4));
            withdrawValue.value = '';
        }
    })

});
