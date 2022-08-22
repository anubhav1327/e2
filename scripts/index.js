// Add the coffee to local storage with key "coffee"
function append(data){
    let menu = document.getElementById("menu");
    menu.innerHTML = "";
    // document.getElementById("coffee_count").innerText = coffeeArr.length;
    data.map(function(elem){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.image;

        let h3 = document.createElement("h3");
        h3.innerText = elem.title;

        let h3n = document.createElement("h3");
        h3n.innerText = elem.price;

        let button = document.createElement("button");
        button.innerText = "Add to bucket"
        button.setAttribute("id", "add_to_bucket");
        button.addEventListener("click", function(){
            addtoBucket(elem);
        })
        div.append(image, h3, h3n, button);
        menu.append(div);
    });
}
getapi();
async function getapi(){
    let res = await fetch(`https://masai-api.herokuapp.com/coffee/menu`);
    let res1 = await res.json();
    console.log(res1.menu.data);
    append(res1.menu.data)
}