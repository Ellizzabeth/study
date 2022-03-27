const login = prompt('введіть свій логін');
if(login=='Admin'){
    const password = prompt('введіть свій пароль');
    if(password=='12345') alert('Ласкаво просимо!');
    else alert('Невірний пароль');
}
else{
    alert('Доступ заборонено');
}