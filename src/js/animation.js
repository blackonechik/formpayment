/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import gsap from "gsap";

export default function formAnimation(bankcard) {
  const bankcardContainer = bankcard.parentNode;
  let isCardOpen = false;

  const tl = gsap.timeline({ paused: true });

  tl.to(bankcardContainer, {
    height: 600,
    duration: 0.7,
  })
    .to(
      bankcardContainer.querySelector(".selection__icon"),
      {
        x: 40,
        display: "none",
        opacity: 0,
        duration: 0.8,
      },
      "<",
      0.5,
    )
    .to(bankcardContainer.querySelector(".form"), {
      display: "block",
      opacity: 1,
      duration: 0.8,
    })
    .from(
      bankcardContainer.querySelector(".form__left"),
      {
        ease: "power1.inOut",
        y: 60,
        opacity: 0,
        duration: 0.8,
      },
      "<",
    )
    .from(
      bankcardContainer.querySelector(".card"),
      {
        ease: "power1.inOut",
        opacity: 0,
        x: 20,
        duration: 0.9,
      },
      "<",
    )
    .from(
      bankcardContainer.querySelector(".form__info"),
      {
        ease: "power1.inOut",
        opacity: 0,
      },
      "<",
    )
    .from(
      bankcardContainer.querySelector(".form__button"),
      {
        ease: "power1.inOut",
        opacity: 0,
      },
      "<",
    );

  bankcard.addEventListener("click", (e) => {
    e.preventDefault();
    if (isCardOpen) {
      tl.reverse();
      isCardOpen = false;
      return;
    }
    tl.play();
    isCardOpen = true;
  });
}
