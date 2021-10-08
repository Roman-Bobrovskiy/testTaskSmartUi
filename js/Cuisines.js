const arrImages = [
  {
    num: "1437",
    src: "../assets/images/cuisines/american.png",
    alt: "american.png",
    theNameOfCuisines: "AMERICAN",
  },
  {
    num: "145",
    src: "./img/cuisines/chinese.png",
    alt: "chinese.png",
    theNameOfCuisines: "CHINESE",
  },
  {
    num: "27",
    src: "./img/cuisines/french.png",
    alt: "french.png",
    theNameOfCuisines: "FRENCH",
  },
  {
    num: "856",
    src: "./img/cuisines/indian.png",
    alt: "indian.png",
    theNameOfCuisines: "INDIAN",
  },
  {
    num: "327",
    src: "./img/cuisines/italian.png",
    alt: "italian.png",
    theNameOfCuisines: "ITALIAN",
  },
  {
    num: "529",
    src: "./img/cuisines/mexican.png",
    alt: "mexican.png",
    theNameOfCuisines: "MEXICAN",
  },
  {
    num: "327",
    src: "./img/cuisines/pazza.png",
    alt: "pazza.png",
    theNameOfCuisines: "PIZZA",
  },
  {
    num: "731",
    src: "./img/cuisines/seafood.png",
    alt: "seafood.png",
    theNameOfCuisines: "SEAFOOD",
  },
  {
    num: "174",
    src: "./img/cuisines/steakhouse.png",
    alt: "steakhouse.png",
    theNameOfCuisines: "STEAKHOUSE",
  },
  {
    num: "237",
    src: "./img/cuisines/sushi.png",
    alt: "sushi.png",
    theNameOfCuisines: "SUSHI",
  },
];

let gallery = document.querySelector(".cuisinesGallery");
let scrollPosition = 0;
let ticking = false;

//sort
let sortArr = () => {
  if (arrImages.length > 5) {
    arrImages.sort((a, b) => {
      return a.num - b.num;
    });
  }
};

//Markup
let createMarkupGallery = (obj) => {
  return `<li>
    <a class="cuisinesGalleryItems" href="/" 
    style="background: url(${obj.src}) center center no-repeat;">
    <label class="cuisinesGalleryItemsNumber">  ${new Intl.NumberFormat(
      "en-US"
    ).format(obj.num)} Recipes </label> 
    <label class="cuisinesGalleryItemsName"> ${obj.theNameOfCuisines}</label> 
    </a>
    </li>`;
};

const addImages = () => {
  sortArr();
  return arrImages.map((obj) => {
    return createMarkupGallery(obj);
  });
};

document.addEventListener("scroll", () => {
  scrollPosition = window.scrollY; //listen to the scroll,

  let galleryPosition = gallery.offsetTop; // get counter position

  if (!ticking && galleryPosition < scrollPosition + window.innerHeight) {
    window.requestAnimationFrame(function () {
      gallery.insertAdjacentHTML("afterbegin", addImages().join("")); //add img
    });
    ticking = true; //stop restarting the function
  }
});
