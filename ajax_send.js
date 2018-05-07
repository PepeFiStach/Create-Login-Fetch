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
        })
        .then(function(data) {
            document.getElementById("response").innerHTML = data;
            window.location = 'hidden.php';
    });
}
export function tryFetch2() {
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
    .then(response => {
        if (response.ok) {
            window.location = 'hidden.php';
        } else {
            throw Error(response.status);
        }
    })
    .catch(error => {
        console.log('Request failed', error);
    });
}
