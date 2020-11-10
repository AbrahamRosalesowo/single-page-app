import view from '../views/users.html';

const getUsers = async () => { //función para devolver products
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const usersElement = divElement.querySelector('#users')
    let totalUser = divElement.querySelector('#total') //si se seleccionan id's es importante que se pongan las almohadillas

    const users = await getUsers();
    totalUser.innerHTML = users.length;

    users.forEach(user => {
        usersElement.innerHTML += `
        <li class="list-group-item border-primary bg-dark text-white">
            <h5>${user.name}</h5>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.website}</p>
        </li>
        `
    });

    return divElement;
};