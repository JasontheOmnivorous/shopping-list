const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

//addEventListener method automatically adds the object "event" inside the handler function's parameter
let productId = 1;
const handleChange = (event) => {   
    const inputValue = event.target.value; //shows the value user enters inside the text field
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    //  <i class="fa-solid fa-trash-can"></i> 
    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("purchased"); //checks the input class exist in the selected element or not, returns a boolean 
        if (classExist) {
            parentDiv.classList.remove("purchased");
        } else {
            parentDiv.classList.add("purchased");
        }
    })
    const spanTag = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    trashIcon.addEventListener("click", (event) => {
          productContainer.remove();
    })
    spanTag.id = productId;
    const product = productId.toString() + ". " + inputValue; //change the id numbers to strings and concatenate with values the user put in  
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(productContainer);
    inputTag.value = "";
    productId += 1;
}

inputTag.addEventListener("change", handleChange); //this event activates when the user clicks enter or clicks on the other part of the page
