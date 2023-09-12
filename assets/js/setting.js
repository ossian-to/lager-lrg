// Slick

$(document).on("ready", function () {
  // $(".center").slick({
  //   dots: true,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  // });
  $(".variable").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: "960",
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 500,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 500,
        },
      },
    ],
    // slidesToShow: 5,
    // slidesToScroll: 1,
  });
});

// POPUP

function popup(a, b) {
  const modal = document.getElementById(a);
  const modalBtn = document.getElementById(b);
  const closeBtn = document.querySelector(`#${a} .close`);

  const openModal = () => {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("fade-in");
    }, 10);
  };

  const closeModal = () => {
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 300);
  };

  const closeModalIfClicked = (event) => {
    if (event.target === modal) {
      closeModal();
    }
  };

  modalBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", closeModalIfClicked);
}

