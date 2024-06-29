// $(document).ready(function () {

//     var v = $(".dashboard").height();

//     $(".accordian-menu").height(v);

// });
// $(document).ready(function() {
//         $(".toggle-menu").click(function() {
//             $(".accordian-menu").toggleClass("accordian-toggle");
//         })

//     })
//     // $(document).ready(function(){
//     // $(".games > li").click(function(){
//     //     $("li.badge").addClass("active-badge");
//     //     alert("sbj");
//     // })

// // })
// $(document).ready(function() {
//     $("input").keyUp(function() {

//         alert("jdhfjdbg");
//     })
// })
// $(document).ready(function() {
//     $(".games").children("li").click(function() {

//         $(this).children(".badge-play").children(".badge").toggleClass("active-badge");
//         $(this).children(".badge-play").children(".badge").children(".badge-img").toggleClass("r-90");
//         $(this).children(".badge-play-football").children(".badge").toggleClass("active-badge");
//         $(this).children(".badge-play-football").children(".badge").children(".badge-img").toggleClass("r-90");
//         $(this).children(".badge-play-tennis").children(".badge").toggleClass("active-badge");
//         $(this).children(".badge-play-tennis").children(".badge").children(".badge-img").toggleClass("r-90");

//     })
// })
// $(document).ready(function() {
//     $("#nav-toggle").click(function() {
//         $(this).toggleClass("active")
//         $(".accordian-menu").toggleClass("active-nav");

//     })
// })
// $(document).ready(function() {
//         $("div[header] div[headerBg] .navbar .container-fluid ul li:nth-child(3)").click(function() {
//             $(".arrow_box").toggleClass("active-box");

//         })
//     })
// $(document).ready(function () {
// $("#fromdate").onclick(function(){
// $("#fromdate").datepicker('show');

// })

// })
// // $(document).ready(function(){
//    var v = $(".container-main-history").height();

//    $(".accordion-profile").height(v);
// })
function toggleMenu($this) {
  document
    .querySelector(".dashboard.dashboard-bg")
    .classList.toggle("move_dashboard");
  document
    .querySelector(".dashboard.dashboard-bg .accordian-menu.accordian-menu-bg")
    .classList.toggle("toggle_menu");
  $this.classList.toggle("active");
}
