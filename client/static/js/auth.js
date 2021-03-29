async function requestLogin(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`http://localhost:3000/auth/login`, options)
        const data = await r.json()
        if (!data.success) { throw new Error('Login not authorised'); }
        login(data.token);
    } catch (err) {
        console.warn(err);
    }
}

async function requestRegistration(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`http://localhost:3000/auth/register`, options)
        const data = await r.json()
        if (data.err) { throw Error(data.err) }
        requestLogin(e);
    } catch (err) {
        console.warn(err);
    }
}

function login(token) {
    const princess = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", princess.username);
    localStorage.setItem("userEmail", princess.email);
    localStorage.setItem("userID", princess.userid);
    window.location.hash = '#feed';
}


function logout() {
    localStorage.clear();
    window.location.hash = '#login';
}

function currentUser() {
    const username = localStorage.getItem('username')
    return username;
}

function currentUserID() {
    const userID = localStorage.getItem('userID')
    return userID;

}
