let buttons = document.querySelectorAll(".btn");
let people = [
  {
    image: "img/person1.jpg",
    name: "James Thomson",
    job: "U/X DESIGNER",
    info: "Designing seamless experiences through intuitive interfaces, user-centric layouts, and accessible visuals, ensuring engagement, satisfaction, and conversion.",
  },
  {
    image: "img/person2.jpg",
    name: "Arnold Blueman",
    job: "Software Developer",
    info: "Building robust applications with efficient code, scalable architectures, and seamless integrations, ensuring performance, reliability, and user satisfaction.",
  },
  {
    image: "img/person3.jpg",
    name: "Benjamin Kumson",
    job: "DEVOPS Engineer",
    info: "Automating workflows, optimizing CI/CD pipelines, ensuring seamless deployments, monitoring systems, and enhancing collaboration between development and operations teams.",
  },
];
let currentIndex = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let element = e.currentTarget.classList;
    console.log(element);
    if (element.contains("next")) {
      NextPerson();
    }
    if (element.contains("previous")) {
      PreviousPerson();
    }
  });
});

function NextPerson() {
  let images = document.querySelector(".image");
  let name = document.querySelector(".name");
  let job = document.querySelector(".job");
  let info = document.querySelector(".info");
  let person = people[currentIndex];

  images.src = person.image;
  name.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.info;
  currentIndex += 1;
  if (currentIndex > people.length - 1) {
    currentIndex = 0;
  }
}

function PreviousPerson() {
  let images = document.querySelector(".image");
  let name = document.querySelector(".name");
  let job = document.querySelector(".job");
  let info = document.querySelector(".info");
  let person = people[currentIndex];

  images.src = person.image;
  name.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.info;
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = people.length - 1;
  }
}
