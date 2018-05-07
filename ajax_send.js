export function tryFetch() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const url = 'login.php';
    let json_upload = 'json_name=' + JSON.stringify({
        'login': '1',
        'emailPHP': email,
        'passwordPHP': password });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache': 'no-cache',
        },
        credentials: 'same-origin',
        body: json_upload
    })
    .then(function (response) {
        if(response.ok)
            return response.text();
        else 
            throw Error(response.status);
    })
    .then(function(data) {
        document.getElementById("response").innerHTML = data;
        window.location = 'hidden.php';
    })
    .catch(error => {
        console.log('Request failed', error);
    });
}

export function tryFetch2() {
    let email = document.getElementById('emailIN').value;
    let password = document.getElementById('passwordIN').value;
    const url = 'register.php';
    let json_upload = 'json_name=' + JSON.stringify({
        'login': '1',
        'emailPHP': email,
        'passwordPHP': password });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache': 'no-cache',
        },
        credentials: 'same-origin',
        body: json_upload
    })
    .then(response => {
        if (response.ok)
            return response.text();
        else
            throw Error(response.status);
    })
    .then(data => {
        document.getElementById('responseIN').innerHTML = data;
    })
    .catch(error => {
        console.log('Request failed', error);
    });
}
