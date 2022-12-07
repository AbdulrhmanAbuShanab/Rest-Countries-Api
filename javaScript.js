let container = document.querySelector(".cardsContainer");
let container2 = document.querySelector(".ctryPage");
let but = document.querySelector(".button");
let searchFilter = document.querySelector(".searchFilter");
//api call for all countries
let getCountries = fetch("https://restcountries.com/v3.1/all");
getCountries
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((json) => {
    console.log(json);
    json.forEach((element) => {
      //creating countries cards
      let cards = document.createElement("div");
      cards.className = "cards";
      //creatin flag image
      let img = document.createElement("img");
      img.className = "images";
      img.src = element.flags.png;
      //adding country name
      let countryName = document.createElement("h4");
      let nodeCname = document.createTextNode(element.name.common);
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
      //creating anchor
      let names = document.createElement("a");
      //appending elements into container
      container.append(cards);
      cards.append(img);
      cards.append(names);
      names.append(countryName);
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
//declaring search function
search = (value) => {
  let countryName = document.querySelectorAll("h4");
  for (let i = 0; i < countryName.length; i++) {
    if (countryName[i].innerHTML.toLowerCase().includes(value.toLowerCase())) {
      countryName[i].parentElement.parentElement.setAttribute(
        "style",
        "display: flex"
      );
    } else if (value == "") {
      countryName[i].parentElement.parentElement.setAttribute(
        "style",
        "display: flex"
      );
    } else {
      countryName[i].parentElement.parentElement.setAttribute(
        "style",
        "display: none"
      );
    }
  }
};
//declaring country page function
countryPage = () => {};
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
//using setTimeout so the function works after the dom elements load
setTimeout(function () {
  let input = document.querySelector("input");
  //search event
  input.addEventListener("input", (event) => {
    search(input.value);
  });
  let clickableNames = document.querySelectorAll("a");
  console.log(clickableNames[1].innerHTML);
  for (let y = 0; y < clickableNames.length; y++) {
    clickableNames[y].addEventListener("click", (event) => {
      clickableNames[y].parentElement.parentElement.setAttribute(
        "style",
        "display: none"
      );
      searchFilter.setAttribute("style", "display: none");
      but.setAttribute("style", "display: flex");
      let path = event.path[0].innerHTML;
      let clickName = fetch(
        "https://restcountries.com/v3.1/name/" + path + "?fullText=true"
      );
      clickName
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log();
          json.forEach((element) => {
            //creating the big div
            let flag = document.createElement("div");
            flag.className = "flag";
            //creating img
            let img1 = document.createElement("img");
            img1.src = element.flags.png;
            //creating details div
            let details = document.createElement("div");
            details.className = "details";
            //adding country name
            let countryName1 = document.createElement("h2");
            countryName1.className = "cName";
            let nodeCname1 = document.createTextNode(element.name.common);
            countryName1.append(nodeCname1);
            //creating details second div
            let cDetails = document.createElement("div");
            cDetails.className = "cDetails";
            //creating paragraphs
            let Span0 = document.createElement("span");
            Span0.innerText = element.name.common;
            let nativeName = document.createElement("p");
            let nodeNn = document.createTextNode("Native Name:");
            nativeName.append(nodeNn);
            nativeName.appendChild(Span0);

            let Span1 = document.createElement("span");
            Span1.innerText = element.population;
            let population = document.createElement("p");
            let nodeP = document.createTextNode("Population:");
            population.append(nodeP);
            population.appendChild(Span1);

            let Span2 = document.createElement("span");
            Span2.innerText = element.region;
            let region = document.createElement("p");
            let nodeR = document.createTextNode("Region:");
            region.append(nodeR);
            region.appendChild(Span2);

            let Span3 = document.createElement("span");
            Span3.innerText = element.subregion;
            let subRegion = document.createElement("p");
            let nodeSr = document.createTextNode("Sub Region:");
            subRegion.append(nodeSr);
            subRegion.appendChild(Span3);

            let Span4 = document.createElement("span");
            Span4.innerText = element.capital;
            let capital = document.createElement("p");
            let nodeC = document.createTextNode("Capital:");
            capital.append(nodeC);
            capital.appendChild(Span4);

            let Span5 = document.createElement("span");
            Span5.innerText = element.tld;
            let tld = document.createElement("p");
            let nodeTld = document.createTextNode("Top Level Domain:");
            tld.append(nodeTld);
            tld.appendChild(Span5);

            let Span6 = document.createElement("span");
            let currency = element.currencies;
            Span6.innerText = currency[Object.keys(currency)[0]].name;
            let currencies = document.createElement("p");
            let nodeCu = document.createTextNode("Currencies:");
            currencies.append(nodeCu);
            currencies.appendChild(Span6);

            let Span7 = document.createElement("span");
            let language = element.languages;
            Span7.innerText = language[Object.keys(language)[0]];
            let languages = document.createElement("p");
            let nodeL = document.createTextNode("Languages:");
            languages.append(nodeL);
            languages.appendChild(Span7);
            //creating border div
            let border = document.createElement("div");
            border.className = "border";
            //creating borders
            let bordersC = document.createElement("p");
            let nodeB = document.createTextNode("Border Countries:");
            bordersC.append(nodeB);
            border.append(bordersC);
            //creatin buttons
            for (let s = 0; s < element.borders.length; s++) {
              let button = document.createElement("BUTTON");
              let nodeButton = document.createTextNode(element.borders[s]);
              button.className = "borderName";
              button.appendChild(nodeButton);
              border.append(button);
            }
            //appending elements into container
            container2.append(flag);
            flag.append(img1);
            flag.append(details);
            details.append(countryName1);
            details.append(cDetails);
            cDetails.append(nativeName);
            cDetails.append(population);
            cDetails.append(region);
            cDetails.append(subRegion);
            cDetails.append(capital);
            cDetails.append(tld);
            cDetails.append(currencies);
            cDetails.append(languages);
            details.append(border);
          });
        });
    });
  }
}, 2000);
