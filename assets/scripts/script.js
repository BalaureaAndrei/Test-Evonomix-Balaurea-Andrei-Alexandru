"use strict";

const slides = [
  {
    title: "Oferta saptamanii",
    description: "Description for slide 1",
    buttonText:
      "<img src='./assets/img/star.svg' alt='star' /><span>Detalii</span>",
    buttonLink: "/detalii",
    buttonClass: "btn-primary",
    background: {
      backgroundImage: "./assets/img/mountain.jpg",
      backgroundColor: "#000",
    },
  },
  {
    title: "Oferta de neratat",
    buttonText: "Vezi locatie",
    buttonLink: "/locatie-plaja",
    buttonClass: "btn-primary",
    background: {
      backgroundColor: "#000",
    },
  },
  {
    description: "Description for slide 3",
    buttonText: "Detalii",
    buttonLink: "/detalii",
    buttonClass: "btn-secondary",
    background: {
      backgroundImage: "./assets/img/beach.jpg",
      backgroundColor: "#000",
    },
  },
  {
    title: "Oferta saptamanii",
    description: "Description for slide 4",
    background: {
      backgroundImage: "./assets/img/mountain.jpg",
      backgroundColor: "#000",
    },
  },
];

$(document).ready(function () {
  /*--------------------------------------------------------------
  # CAROUSEL
  --------------------------------------------------------------*/
  /*--------------------------------------------------------------
  # INSERARE HTML IN CARUSEL
  --------------------------------------------------------------*/

  slides.forEach((slide) => {
    const html = `
    <div class="item" style="${
      slide.background.backgroundImage
        ? `background : url(${slide.background.backgroundImage})`
        : `background-color:${slide.background.backgroundColor}`
    }">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col">
            <div class="carousel-item-inner">
              <div class="carousel-item-header">
                ${slide.title ? `<h2>${slide.title}</h2>` : ""}
              </div>
              <div class="carousel-item-text">       
                ${slide.description ? `<p>${slide.description}</p>` : ""}
              </div>
              <div class="carousel-item-button">
              ${
                slide.buttonText
                  ? `<a href="${slide.buttonLink}" class="btn ${slide.buttonClass}">${slide.buttonText}</a>`
                  : ``
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    $(".owl-carousel").append(html);
  });

  /*--------------------------------------------------------------
  # INSERARE HTML IN CARUSEL
  --------------------------------------------------------------*/
  /*--------------------------------------------------------------
  # INITIALIZARE CARUSEL SI ADAUGARE SAGETI
  --------------------------------------------------------------*/

  const owl = $(".owl-carousel");
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
  });
  // Go to the next item
  $(".arrow-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  // Go to the previous item
  $(".arrow-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  /*--------------------------------------------------------------
  # INITIALIZARE CARUSEL SI ADAUGARE SAGETI
  --------------------------------------------------------------*/
  /*--------------------------------------------------------------
  # CAROUSEL
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # VIDEO
  --------------------------------------------------------------*/

  $(".video-overlay .overlay").click(function () {
    $(".video-overlay").addClass("d-none");
  });

  $(".close-video").click(function () {
    $(".video-overlay").addClass("d-none");
  });

  $(".play-button").click(() => {
    $(".video-overlay").removeClass("d-none");
  });

  /*--------------------------------------------------------------
  # VIDEO
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # FORMULAR
  --------------------------------------------------------------*/

  $(".form").submit(function (e) {
    e.preventDefault();
    const destinatie = $("#input1");
    const buget = $("#input2");
    const nume = $("#input3");
    const email = $("#input4");

    alert(
      `Destinatie: ${destinatie.val()} \n Buget: ${buget.val()} \n Nume: ${nume.val()} \n Email: ${email.val()}`
    );

    destinatie.val("");
    buget.val("");
    nume.val("");
    email.val("");
  });

  /*--------------------------------------------------------------
  # FORMULAR
  --------------------------------------------------------------*/
});
