document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".navegacao a");
  const socialLinks = document.querySelectorAll(".links a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToTarget(link);
    });
  });

  socialLinks.forEach(function (link) {
    link.addEventListener("click", function () {

      window.open(link.href, '_blank');
    });
  });

  function scrollToTarget(link) {
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      let offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

      // Ajuste específico para a seção "sobremim"
      if (targetId === "sobremim") {
        offset = window.innerHeight / 4; //ajustar esse valor conforme necessário
      }

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }
});