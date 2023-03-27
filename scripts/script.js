// function greet(name, time = "day") {              // function
//     console.log(`Good ${time}, ${name}!`);
// }

// let greet = function(name) {        // function expression
//     console.log(`Hello ${name}!`);
// }

// let greet = (name) => {             //arrow function
//     console.log(`Hello ${name}!`);
// }

// greet("Chris", "Night");


// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara)
// const resultPara = document.querySelector("#result");
// console.log(resultPara)

// let user_input = prompt("Enter a radius of the circle: ");
// radiusPara.textContent += user_input;

// function circleArea(input) 
// {
//     if(isNaN(input)) {
//         resultPara.textContent = "Error";
//     }
    
//     else {
//         let radius = Math.PI * input**2; 
//         return radius;
//     }
// }

// if (circleArea(user_input) !== undefined) {
//     let raidus_result = circleArea(user_input).toFixed(2);
//     resultPara.textContent = `The area of a circle with radius ${user_input} is ${raidus_result}`;
// }

const ullist = document.querySelector(".shopping");

function populatelist(shoppingListArray) 
{
    for (let item of shoppingListArray)
    {
        let product = document.createElement("li");
        product.textContent = item;
        ullist.appendChild(product);
    }
}

let myShoppingList = ["cheese", "bread", "green pepper"];
populatelist(myShoppingList);



function squareListMaker()
{
    ullist.classList.add("squareList");
    ullist.classList.remove("circleList");
}

squareListMaker()


// HTMLElement.style
// Element.setAttribute()

//week11_more_practice

function updateImage()
{
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/263/263142.png");
    image.setAttribute("alt", "shoppingCart");
    image.setAttribute("width", "50");
    image.setAttribute("height", "50");

    // image.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
}
updateImage();

function makeListGreen()
{
    const liArray = document.querySelectorAll("li")
    for (i = 0; i < liArray.length; i++)
    {
        const arrayContent = liArray[i]
        const text = arrayContent.textContent;
        console.log(text);
        if (text.includes("green"))
        {
            // arrayContent.style.color = "green";
            arrayContent.setAttribute("class", "greenText");
            // arrayContent.classList.add("greenText")
        };
    };
    
};

makeListGreen();