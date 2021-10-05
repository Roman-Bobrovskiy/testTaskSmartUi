const arrStatistics = [
  { text: "Recipes Available", data: 23567 },
  { text: "Active Users", data: 431729 },
  { text: "Positive Reviews", data: 892173 },
  { text: "Photos & Videos", data: 56581 },
  { text: "Spices and Herbs", data: 3182 },
];

let cuisinesCounter = document.querySelector(".wrapCuisinesCounter");
let scrollPosition = 0;
let ticking = false;

function startCounter() {
  //render
  const renderSatatistics = (arr) => {
    return arr
      .map((obj) => {
        return createMarkupStatistics.apply(obj);
      })
      .join("");
  };

  //Markup
  function createMarkupStatistics() {
    let obj = this;
    return `<li class="cuisinesCounterItems">
              <label class="cuisinesCounterNumber">${0}</label><br>
              <label class="cuisinesCounterText">${obj.text}</label>
          </li>`;
  }

  cuisinesCounter.insertAdjacentHTML(
    "afterbegin",
    renderSatatistics(arrStatistics)
  );

  //Fill data
  let counter = document.querySelectorAll(".cuisinesCounterNumber");

  arrStatistics.forEach(({ data }, index) => {
    imitationCalculation(data, index);
  });

  function imitationCalculation(data, index) {
    let concat = Math.floor(data / 30);
    let count = 0;
    let lable = counter[index];

    let timer = setInterval(() => {
      count += concat;
      if (count >= data) {
        clearInterval(timer);
        lable.innerText = new Intl.NumberFormat("en-US").format(data);
        return;
      }

      lable.innerText = count;
    }, 90);
  }
}

document.addEventListener("scroll", () => {
  scrollPosition = window.scrollY; //listen to the scroll,

  let cuisinesCounterPosition = cuisinesCounter.offsetTop; // get counter position

  if (
    !ticking &&
    cuisinesCounterPosition < scrollPosition + window.innerHeight
  ) {
    window.requestAnimationFrame(function () {
      startCounter();
    });
    ticking = true; //stop restarting the function
  }
});
