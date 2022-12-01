let container = document.querySelector(".cardsContainer");
let baseURL = "https://restcountries.com/v3.1/name/";
//api call for all countries
let getCountries = fetch("https://restcountries.com/v3.1/all");
getCountries
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((json) => {
    let input = document.querySelector("input");
    json.forEach((element) => {
      //creating countries cards
      let cards = document.createElement("div");
      cards.className = "cards";
      //creatin flag image
      let img = document.createElement("img");
      img.src = element.flags.png;
      //adding country name
      let countryName = document.createElement("h4");
      let nodeCname = document.createTextNode(element.altSpellings[0]);
      countryName.append(nodeCname);
      //create paragraphs div
      let texts = document.createElement("div");
      texts.className = "texts";
      //creating paragraphs
      let mySpan0 = document.createElement("span");
      mySpan0.innerText = element.population;
      let population = document.createElement("p");
      let nodeP = document.createTextNode("Population:");
      population.append(nodeP);
      population.appendChild(mySpan0);
      let mySpan1 = document.createElement("span");
      mySpan1.innerText = element.region;
      let region = document.createElement("p");
      let nodeR = document.createTextNode("Region:");
      region.append(nodeR);
      region.appendChild(mySpan1);
      let mySpan2 = document.createElement("span");
      mySpan2.innerText = element.capital;
      let capital = document.createElement("p");
      let nodeC = document.createTextNode("Capital:");
      capital.append(nodeC);
      capital.appendChild(mySpan2);
      //appending elements into container
      container.append(cards);
      cards.append(img);
      cards.append(countryName);
      cards.append(texts);
      texts.append(population);
      texts.append(region);
      texts.append(capital);
          
      
    });
  });
let select = document.querySelector("select");
//declaring function to filter africa
africa = () => {
  let card = document.querySelectorAll(".cards");
  card.forEach((element) => {
    let text = element.innerHTML;
    if (!text.includes("Africa")) {
      element.setAttribute("style", "display: none");
    } else {
      element.setAttribute("style", "display: flex");
    }
  });
};
//declaring function to filter america
america = () => {
  let card = document.querySelectorAll(".cards");
  card.forEach((element) => {
    let text = element.innerHTML;
    if (!text.includes("America")) {
      element.setAttribute("style", "display: none");
    } else {
      element.setAttribute("style", "display: flex");
    }
  });
};
//declaring function to filter asia
asia = () => {
  let card = document.querySelectorAll(".cards");
  card.forEach((element) => {
    let text = element.innerHTML;
    if (!text.includes("Asia")) {
      element.setAttribute("style", "display: none");
    } else {
      element.setAttribute("style", "display: flex");
    }
  });
};
//declaring function to filter europe
europe = () => {
  let card = document.querySelectorAll(".cards");
  card.forEach((element) => {
    let text = element.innerHTML;
    if (!text.includes("Europe")) {
      element.setAttribute("style", "display: none");
    } else {
      element.setAttribute("style", "display: flex");
    }
  });
};
//declaring function to filter oceania
oceania = () => {
  let card = document.querySelectorAll(".cards");
  card.forEach((element) => {
    let text = element.innerHTML;
    if (!text.includes("Oceania")) {
      element.setAttribute("style", "display: none");
    } else {
      element.setAttribute("style", "display: flex");
    }
  });
};
//filter event
select.addEventListener("change", (event) => {
  switch (select.value) {
    case "africa":
      africa();
      break;
    case "america":
      america();
      break;
    case "asia":
      asia();
      break;
    case "europe":
      europe();
      break;
    case "oceania":
      oceania();
      break;
  }
});
