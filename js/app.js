
///to bring all the section here
var sections = document.querySelectorAll("section");

///to show where i am now in wich section? (scrollPosition)
onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  ///to target each section (forEach)
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

///to remove the active class from the first section, to be added in the active id (removeAllActiveClasses)
var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

///to add the active class which take the current id(addActiveClass)
var addActiveClass = function (id) {
  // console.log(id);
  //to determine which one i have selecte?
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
 

    //smooth scroll 
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});




///getBoundingClientRect();
///for the section of nav sections
//get refercence to the elemet
const mainsection=document.querySelector("div.mainsection");
console.log(mainsection);
///DOM which contain the information about the rect surrounding the div
const rect=mainsection.getBoundingClientRect();
console.log(rect);

window.addEventListener("scroll", function () {
  console.log(window.innerHeight);
  console.log(mainsection.getBoundingClientRect().top);
});


//for the nav bar
//get refercence to the elemet
const navbar=document.querySelector("div.navbar");
console.log(navbar);
///DOM which contain the information about the rect surrounding the div
const rect1=navbar.getBoundingClientRect();
console.log(rect1);

window.addEventListener("scroll", function () {
  console.log(window.innerHeight);
  console.log(navbar.getBoundingClientRect().top);
});

