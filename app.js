// 1
const portillos = document.getElementById(`portillos`);

// 2
const images = document.getElementsByTagName(`img`);

// 3
const centered = document.getElementsByClassName(`center`);

// 4
const ginosEast = document.querySelector(`ginos`);

// 5
const pTags = document.querySelectorAll(`p`);

// 6A
const h1 = document.querySelector(`h1`);

//6B
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

// 7A
const others = document.getElementById(`others`);

// 7B
others.innerHTML = `<h3>Other favorites</h3>`;

// 8A
const atag = document.getElementsByTagNameNS(`a`);

// 8B
atag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);

// 10
h1.classList.remove(`background`);

// 11A
const h4 = document.createElement(`h4`);

// 11B
h4.innerText = "CHICAGO: A great place to eat!";

// 11C
const bodySection = document.querySelector(`body`);
bodySection.prepend(h4);

// 12A
const h5 = document.createElement(`h5`);

// 12B
h5.innerText = "See you in the Windy City Sometime!";

// 12C
atag.insertAdjacentElement(`afterend`, h5);

// 13
document.querySelector(`ul > li`).remove();