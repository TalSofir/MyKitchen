class DishRecipe{
    name;
    ingredients=[];
    time;
    cookingMethod;
    image;

    constructor(name, ingredients, time, cookingMethod, image){
      this.name = name;
      this.ingredients = ingredients;
      this.time = time;
      this.cookingMethod = cookingMethod;
      this.image = image;
    }
}


function addRecipeToArr(){
    let name = document.getElementById("recipeName").value;
    let cookingMethod = document.getElementById("cookingMethod").value;
    let time = document.getElementById("recipeCookingTime").value;
    let image = document.getElementById("recipeImageURL").value;
    let checked= document.querySelectorAll("input[type=checkbox]:checked");
    let ingredients=[];
    for(let i=0;i<checked.length;i++){
      ingredients.push(parseInt(checked[i].value));
    };   
    DishRecipeArr.push({"id":name,"name":name,"ingredients":ingredients,"time":time,"cookingMethod":cookingMethod,"image":image});
    document.getElementById("recipeName").value="";
    document.getElementById("cookingMethod").value="";
    document.getElementById("recipeCookingTime").value="";
    document.getElementById("imageURL").value="";
    console.log(DishRecipeArr);
    alert("Recipe added successfully");
  }

  function TotalCalories(arr){
    let totalCalories=0;
    for(let i=0;i<arr.length;i++){
      totalCalories+=IngredientArr[arr[i]-1].calories;
        }
           return totalCalories;
    }
  function DishRecipeRender(arr){
    let str="";
    
    for(let i=0;i<arr.length;i++){
        str+=`<div>
        <h1>${arr[i].id}</h1>
        <img src="${arr[i].image}" alt="${arr[i].name}">
        <h3>${arr[i].name}</h3>
        <p>Calories: ${TotalCalories(arr[i].ingredients)}</p>
        <p>Time: ${arr[i].time}</p>
        <p>Cooking Method: ${arr[i].cookingMethod}</p>
        <button onclick="f1(${arr[i].ingredients})">Click to see ingredients</button>
        </div>`;
        document.getElementById("div3").innerHTML="";
    document.getElementById("div4").innerHTML=str;
    }
    }

    function f1(arr){
      console.log(arr);

      for(let i=0;i<arr.length;i++){
        alert(arr[i]);
      }
  }