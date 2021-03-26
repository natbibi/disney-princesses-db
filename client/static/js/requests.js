async function getAllPosts() {
    try {
        const options = {
            headers: new Headers({ 'Authorization': localStorage.getItem('token') }),
        }
        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json();
        if (data.err) {
            console.warn(data.err);
            logout();
        }
        return data;
    } catch (err) {
        console.warn(err);
    }
}
