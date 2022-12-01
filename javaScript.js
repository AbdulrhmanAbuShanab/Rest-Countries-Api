let container = document.querySelector(".cardsContainer");



let getCountries = fetch("https://restcountries.com/v3.1/all");
getCountries
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((json) => {
      json.forEach((element) => {
      let cards = document.createElement("div");
      cards.className = "cards";
      let img = document.createElement("img");
      img.src = element.flags.png;
      
      let countryName = document.createElement("h4");
      let nodeCname = document.createTextNode(element.altSpellings[0]);
      countryName.append(nodeCname);
      
      let texts = document.createElement("div");
      texts.className = "texts";
    
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

      container.append(cards);
      cards.append(img);
      cards.append(countryName);
      cards.append(texts);
      texts.append(population);
      texts.append(region);
      texts.append(capital);
    });
  });