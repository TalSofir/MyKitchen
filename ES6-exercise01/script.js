const IngredientArr=[];
const DishRecipeArr=[];
function showDiv1() {
    let x = document.getElementById("div1");
    let y = document.getElementById("div2");
    if (x.style.display === "none") {
      x.style.display = "block";
        y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
function showDiv2() {
    let x = document.getElementById("div2");
    let y = document.getElementById("div1");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function clearDiv3(){
    document.getElementById("div3").innerHTML="";
    IngredientRender(IngredientArr);
  }


  



