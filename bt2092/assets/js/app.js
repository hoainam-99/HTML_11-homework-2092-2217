
const notify = document.querySelector('.notify')
var accountTag = document.getElementById('account_id')
var pwdTag = document.getElementById('pwd_id')

function showNotify(){
    if(accountTag.value != '' && pwdTag.value != ''){
        notify.classList.remove('hide')
    }
    return false

}

function hideNotify(){
    notify.classList.add('hide')
    accountTag.value = ''
    pwdTag.value = ''
}