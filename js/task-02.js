const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  return ingredientsEl;
});
ingredientsListEl.append(...makeIngredientsList);
