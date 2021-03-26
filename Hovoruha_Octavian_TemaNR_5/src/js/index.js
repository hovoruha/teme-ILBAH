const topics = [
  {
    image: "assets/molding.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/3d-modeling.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/3d-printing.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/automation.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/development.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/six-sigma.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/lean.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/5S.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/excel.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
  {
    image: "assets/vba.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor unde libero repudiandae? Fugit, tempora.",
  },
];

const navBar = document.querySelectorAll("header.nav")[0];
const burgerBtn = document.querySelectorAll("div.nav_burger-btn")[0];
const mainSection = document.getElementsByClassName("section")[0];
const footer = document.getElementsByClassName("footer")[0];
const linkIcons = document.querySelectorAll("span.nav-links-item_icon");
const intro = document.getElementsByClassName("intro")[0];
const hideNavbarChain = [mainSection, footer, intro];

burgerBtn.addEventListener("click", showNavbar);

hideNavbarChain.forEach((link) => {
  link.addEventListener("click", hideNavbar);
});

linkIcons.forEach((icon) => {
  icon.addEventListener("click", hideNavbar);
});

(() => {
  topics.forEach((topic) => {
    mainSection.innerHTML += `<div class="card">
    <div class="card-img"><img src="${topic["image"]}" /></div>
    <div class="card-content">${topic["content"]}</div>
    <div class="card-input">
      <a class="card-input_btn" href="#">
        <span><i class="far fa-arrow-alt-circle-right"></i></span>Follow
        topic
      </a>
    </div>
  </div>`;
  });
})();

const cards = document.querySelectorAll("div.card");

cards.forEach((card) => {
  card.addEventListener("click", openInput);
});

function showNavbar() {
  this.classList.add("show");
  navBar.classList.add("show");
}

function hideNavbar() {
  navBar.classList.remove("show");
  burgerBtn.classList.remove("show");
}

function openInput() {
  const activeCardInput = this.querySelectorAll("div.card-input")[0];
  const activeBtn = activeCardInput.getElementsByClassName("card-input_btn")[0];

  if (activeCardInput.classList[1] !== "show") {
    activeCardInput.classList.add("show");
    activeBtn.classList.add("show");
  } else {
    activeCardInput.classList.remove("show");
    activeBtn.classList.remove("show");
  }
}
