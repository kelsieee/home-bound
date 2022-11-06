let products = {
    data: [
      {
        productName: "1 bedroom hostel",
        category: "Accommodation",
        price: "750 per month",
        // image: "../images/room/room1.jpg",
        location: "37 Defu Lane (East)"
      },
      {
        productName: "2 bedroom HDB",
        category: "Accommodation",
        price: "750 per month",
        // image: "../images/room/room1.jpg",
        location: "37 Defu Lane (East)"
      },
      {
        productName: "Jamie",
        category: "Accommodation",
        price: "750 per month",
        // image: "../images/room/room1.jpg",
        location: "37 Defu Lane (East)"
      },
      {
        productName: "1 bedroom hostel",
        category: "Accommodation",
        price: "750 per month",
        // image: "../images/room/room1.jpg",
        location: "37 Defu Lane (East)"
      },
      {
        productName: "1 bedroom hostel",
        category: "Accommodation",
        price: "750 per month",
        // image: "../images/room/room1.jpg",
        location: "37 Defu Lane (East)"
      },
      {
        productName: "1 bedroom hostel",
        category: "Accommodation",
        price: "750 per month",
        // image: "../images/room/room1.jpg",
        location: "37 Defu Lane (East)"
      }
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {

  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input12").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  