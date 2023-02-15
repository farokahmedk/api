const btn = document.getElementById("btn");
const main = document.getElementById("main");
const heroTitle = document.getElementById("heroTitle");
const description = document.getElementById("description");
const kanyeAPI = "https://api.kanye.rest/";
const randomUserAPI = "https://randomuser.me/api/?results=200";
const restCountries = "https://restcountries.com/";
const URL = "https://jsonplaceholder.typicode.com/todos/1";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// btn.addEventListener("click", function () {
//   fetch(randomUserAPI)
//     .then((response) => response.json())
//     .then((data) => randomUser(data.results));
// });
function loadData() {
  fetch(randomUserAPI)
    .then((response) => response.json())
    .then((data) => randomUser(data.results));
}

loadData();
// const arr = [];
// let number = 0;
// function jsonPlaceholder(data) {
//   for (let i of data) {
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//     h1.innerHTML = 'hello';
//     p.innerText = i.description;
//     main.appendChild(h1);
//     console.log(i)
//     if (number < 100) {
//       number++;
//       const h1 = document.createElement("h1");
//       h1.innerText = `${i.id} ${i.title}`;
//       const p = document.createElement("p");
//       p.innerText = i.body;
//       main.appendChild(h1);
//       main.appendChild(p);
//     }
//   }
// }

// console.log(arr);

const randomUser = (data) => {
  for (let user of data) {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const gender = user.gender;

    const location = `
    ${user.location.street.number}, ${user.location.street.name}, 
    ${user.location.city}, ${user.location.state}, ${user.location.postcode}
    ${user.location.country}
    `;

    const email = user.email;
    const phone = user.phone;
    const cell = user.cell;
    const picture = user.picture.large;

    const div = document.createElement("div");
    div.classList.add("profile");

    div.innerHTML = `
    <img src="${picture}" alt="${fullName}">
    <h1>${fullName}</h1>
    <p>${gender}</p>
    <p>${email}</p>
    <p>${phone}</p>
    <p>${cell}</p>
    <address>${location}</address>
    `;
    main.appendChild(div);
  }
};
