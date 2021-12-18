// smooth scrolling // 
$(".ss a").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 100);
  });

  ScrollReveal().reveal('.pTxt', {
    delay: 500, 
    easing: 'ease-in-out',
  });