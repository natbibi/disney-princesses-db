function renderHomepage() {
    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = 'https://mickeyblog.com/wp-content/uploads/2018/01/Disney-Princesses-Facts.png';
    logo.alt = 'disney princesses'
    main.appendChild(logo);
}


function renderLoginForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
}

function renderRegisterForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestRegistration)
    main.appendChild(form);
}

async function renderFeed() {
    const feed = document.createElement('section')
    feed.className = "post-holder"
    feed.id = 'feed';
    const posts = await getAllPosts();
    if (posts.err) { return }
    const renderPost = postData => {
        const post = document.createElement('div');
        post.className = 'post';
        feed.appendChild(post);

        // profile pic
        const profilepic = document.createElement('img')
        profilepic.className = 'profilepic'
        profilepic.src = `${postData.profilePic}`
        post.appendChild(profilepic)

        // title and post content 
        const rightSide = document.createElement('div')
        rightSide.className = 'right-side'
        post.appendChild(rightSide)
        const user = document.createElement('h3');
        user.className = 'user-title'
        const body = document.createElement('p');
        body.className = 'user-post'
        user.textContent = postData.username;
        body.textContent = postData.body;
        rightSide.appendChild(user);
        rightSide.appendChild(body);

    }
    posts.forEach(renderPost);
    main.appendChild(feed);
}


// Open textarea to write new Post
const clickIcon = document.querySelector('.new-post-icon');
clickIcon.addEventListener('click', () => {
    const clickIcon = document.querySelector('.new-post-area')
    if (clickIcon.style.display === 'none') {
        clickIcon.style.display = 'flex';
    } else {
        clickIcon.style.display = 'none';
    }
    clickIcon.focus()
})

// submit new post
// const submitPost = document.querySelector('.sub-btn');
// submitPost.addEventListener('click', () => {

// })


function renderProfile() {
    const profile = document.createElement('section');
    const greeting = document.createElement('h3');
    greeting.textContent = `Hi there, Princess ${localStorage.getItem('username')}!`;
    profile.appendChild(greeting);
    main.appendChild(profile);
}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}

