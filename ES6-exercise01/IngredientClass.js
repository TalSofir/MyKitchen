class Ingredient{
    id;
    name;
    calories;
    image;

    constructor(name, calories, image){
      this.id=IngredientArr.length+1;
      this.name = name;
      this.calories = calories;
      this.image = image;
    }
  }

function addIngredientToArr(){
  let name = document.getElementById("IngredientName").value;
  let calories = document.getElementById("calories").value;
  let image = document.getElementById("imageURL").value;
  let ingredient = new Ingredient(name, calories, image);
  IngredientArr.push({"id":ingredient.id,"name":name,"calories":parseInt(calories),"image":image});
  console.log(IngredientArr);
  alert("Ingredient added successfully");
  document.getElementById("IngredientName").value="";
  document.getElementById("calories").value="";
  document.getElementById("imageURL").value="";
}
function IngredientRender(arr){
  let str="";
  for(let i=0;i<arr.length;i++){
      str+=`<div>
      <h1>${arr[i].id}</h1>
      <input type="checkbox" name="${arr[i].id}" value="${arr[i].id}">
      <label for="${arr[i].id}">Add to dish</label><br>
      <img src="${arr[i].image}" alt="${arr[i].name}">
      <h3>${arr[i].name}</h3>
      <p>Calories: ${arr[i].calories}</p>
      </div>`;
  document.getElementById("div3").innerHTML=str;
  }
  }
