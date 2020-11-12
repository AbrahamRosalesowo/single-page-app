import view from '../views/users.html';

const getUsers = async () => { //función para devolver products
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const usersElement = divElement.querySelector('#users')
    let totalUser = divElement.querySelector('#total') 

    const users = await getUsers();
    totalUser.innerHTML = users.length;

    users.forEach(user => {
        usersElement.innerHTML += `
        <div class="card bg-primary mb-3 text-center container" style="max-width: 20rem; color: #fff;">
            <h5 class="card-header">${user.name}</h5>
            <div>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.website}</p>
            </div>
        </div>
        `
    });

    return divElement;
};