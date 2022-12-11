const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients");
const fragList = document.createDocumentFragment();

const markup = ingredients.forEach(ingredient =>
{
  const li = document.createElement("li");
  li.textContent = `${ingredient}`;
  li.classList.add("item");
  fragList.append(li);
});

listOfIngredients.append(fragList)





