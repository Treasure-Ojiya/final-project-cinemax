// document.addEventListener("DOMContentLoaded", function () {
//   // Toggle between menu and close icons
//   const menuToggle = document.getElementById("menuToggle");
//   const menuClose = document.getElementById("menuClose");
//   const navbarCollapse = document.getElementById("mobileNavbar");

//   navbarCollapse.addEventListener("show.bs.collapse", function () {
//     menuToggle.classList.add("d-none");
//     menuClose.classList.remove("d-none");
//   });

//   navbarCollapse.addEventListener("hide.bs.collapse", function () {
//     menuToggle.classList.remove("d-none");
//     menuClose.classList.add("d-none");
//   });

//   menuClose.addEventListener("click", function () {
//     const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
//       toggle: false,
//     });
//     bsCollapse.hide();
//   });

//   // Toggle mobile search form
//   const searchToggleMobile = document.getElementById("searchToggleMobile");
//   const mobileSearchForm = document.getElementById("mobileSearchForm");

//   if (searchToggleMobile && mobileSearchForm) {
//     searchToggleMobile.addEventListener("click", function (e) {
//       e.preventDefault();
//       mobileSearchForm.classList.toggle("d-none");
//     });
//   }

//   // Close mobile search when menu closes
//   navbarCollapse.addEventListener("hide.bs.collapse", function () {
//     if (mobileSearchForm) {
//       mobileSearchForm.classList.add("d-none");
//     }
//   });
// });
