const userData = [
  {
    name: "Tanya Sinclair",
    profession: "UX Engineer",
    statement: ` "I’ve been interested in coding for a while but never taken the jump, until now I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "`,
    img: "images/image-tanya.jpg",
  },
  {
    name: "  John Tarkpor",
    profession: " Junior Front-end Developer",
    statement: `"If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`,
    img: "images/image-john.jpg",
  },
];
const sliderButton = document.querySelectorAll(".slider-button");
const statement = document.querySelector(".statement");
const individualName = document.querySelector(".name");
const profession = document.querySelector(".profession");
const currentImage = document.querySelector(".current-image");

sliderButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (button == sliderButton[0]) {
      statement.textContent = userData[0].statement;
      individualName.textContent = userData[0].name;
      profession.textContent = userData[0].profession;
      currentImage.src = userData[0].img;
    } else {
      statement.textContent = userData[1].statement;
      individualName.textContent = userData[1].name;
      profession.textContent = userData[1].profession;
      currentImage.src = userData[1].img;
    }
  });
});
