let obj = [
  {
    name: "dog",
    url: "./img/img-1.jpg",
  },
  {
    name: "fish",
    url: "./img/img-2.jpg",
  },
  {
    name: "raccoon",
    url: "./img/img-3.jpg",
  },
  {
    name: "dog",
    url: "./img/img-4.jpg",
  },
  {
    name: "cat",
    url: "./img/img-5.jpg",
  },
  {
    name: "bird",
    url: "./img/img-6.jpg",
  },
  {
    name: "cat",
    url: "./img/img-7.jpg",
  },
  {
    name: "fish",
    url: "./img/img-8.jpg",
  },
  {
    name: "bird",
    url: "./img/img-9.jpg",
  },
  {
    name: "cat",
    url: "./img/img-10.jpg",
  },
  {
    name: "fish",
    url: "./img/img-11.jpg",
  },
  {
    name: "dog",
    url: "./img/img-12.jpg",
  },
];

// ========================

function initiateBodyContent() {
  document.body.innerHTML = `
  <div id="wrapper">
    <div id="filter"></div>
    <div id="gallery"></div>
  </div>
  <div id="modal"><img src="" alt=""/></div>`;
}

initiateBodyContent();

// ========================

function populateGallery(obj) {
  let gallery = document.querySelector("#gallery");

  for (let i = 0; i < obj.length; i++) {
    gallery.innerHTML += `
    <div class="box all ${obj[i]["name"]}" id="box-${i}" filter="${obj[i]["name"]}">
      <img src="${obj[i]["url"]}" alt="${obj[i]["name"]} picture"/>
      <div class="screen"></div>
    </div>
  `;
  }
}

populateGallery(obj);
// ========================

let filter = ["all"];

// ========================
function getFilterAttricute(filter) {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    if (!filter.includes(box.getAttribute("filter")))
      filter.push(box.getAttribute("filter"));
  });
}

getFilterAttricute(filter);

// ========================
function createFilterMenu(filter) {
  let filterMenu = document.querySelector("#filter");

  filter.forEach((word) => {
    filterMenu.innerHTML += `<span>${word}</span>`;
  });
}

createFilterMenu(filter);

// ========================
function filterDisplayedImages() {
  let filterWords = document.querySelectorAll("#filter > span");

  filterWords.forEach((word) => {
    word.addEventListener("click", () => {
      let boxes = document.querySelectorAll(".box");

      boxes.forEach((box) => {
        if (!box.classList.contains(word.innerHTML)) box.style.display = "none";
        if (box.classList.contains(word.innerHTML)) box.style.display = "block";
      });
    });
  });
}

filterDisplayedImages();

// ========================
function fadeImages() {
  let boxes = document.querySelectorAll(".box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", () => {
      let screens = document.querySelectorAll(".box > .screen");

      screens.forEach((screen) => (screen.style.display = "block"));

      let currentHoveredBoxScreen = boxes[i].querySelector(".screen");

      currentHoveredBoxScreen.style.display = "none";
    });
  }
}

fadeImages();

// ========================

function fadeInImageWhenMouseLeavesGallery() {
  let gallery = document.querySelector("#gallery");

  gallery.addEventListener("mouseleave", () => {
    let boxes = document.querySelectorAll(".box > .screen");

    boxes.forEach((box) => (box.style.display = "none"));
  });
}

fadeInImageWhenMouseLeavesGallery();

// ========================

function showModel() {
  let boxes = document.querySelectorAll(".box");
  let modal = document.querySelector("#modal");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      let img = box.querySelector("img").src;

      modal.style.display = "flex";
      modal.querySelector("img").src = img;
    });
  });
}

showModel();

// ========================

function closeModal() {
  let close = document.querySelector("#modal");

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

closeModal();
