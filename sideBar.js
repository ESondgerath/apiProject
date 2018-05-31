/* =================================
Sidebar
   ================================= */

// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });

// $document.GetElementByID("menu-toggle").onclick = 
//     (function(i) {
//         i.preventDefault();
//         $document.GetElementByID("wrapper").toggleClass("toggled");
// });

document.getElementById("menu-toggle").click(function(i) {
    i.preventDefault();
    document.getElementById("wrapper").toggleClass("toggled");
});