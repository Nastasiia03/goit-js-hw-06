const numberOfCategories = document.querySelector("#categories"); 
console.log("Number of categories:", numberOfCategories.children.length)

const listOfTitles = document.querySelectorAll("h2");
const listOfCategories = listOfTitles.forEach(title => {
    console.log("Category:", title.textContent),
    console.log("Elements:", title.nextElementSibling.children.length)
});



