import view from '../views/posts.html';

const getPosts = async () => { //función para devolver posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const postsElement = divElement.querySelector('#posts')
    let totalPost = divElement.querySelector('#total') //si se seleccionan id's es importante que se pongan las almohadillas

    //devolver posts de una api (esto hay que anotarlo)
    const posts = await getPosts();
    totalPost.innerHTML = posts.length;

    posts.forEach(post => {
        postsElement.innerHTML += `
        <div class="container">
        <div class="card border-primary " style="max-width: auto; color: #303030; margin: 20px;">
            <h5 class=" card-header">${post.title}</h5>
            <p class="m-2 card-body">${post.body}</p>
        </div>
        </div>
        `
    });

    return divElement;
};