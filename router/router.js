/*----------------------------------------------------------------------------------------*/ 

const URLARREGLOS = "json/arreglos.json";
const URLPAPEL = "json/papeleria.json";


const routes = [{
    path: "",
    action: "home"
},
{
    path: "/home",
    action: "home"
},
{
    path: "/about",
    action: "about"
},
{
    path: "/contact",
    action: "contact"
},
{
    path: "/arreglos",
    action: "arreglos"
},
{
    path: "/papeleria",
    action: "papeleria"
},
{
    path: "/budget",
    action: "budget"
}
];
/*----------------------------------------------------------------------------------------*/
const router = () => {
let currentPath = location.hash.slice(1);
let pathToGo = routes.find((p) => p.path == currentPath);
switch (pathToGo.action) {
    case routes[0].action:
        $.get("./views/home.html", function (data) {
            $("#app").html(data);
            $(".scrolling-navbar").removeClass("navbar-light");
            $(".scrolling-navbar").addClass("navbar-dark");
        });
        break;
    case routes[1].action:
        $.get("./views/home.html", function (data) {
            $("#app").html(data);
            $(".scrolling-navbar").removeClass("navbar-light");
            $(".scrolling-navbar").addClass("navbar-dark");
        });
        break;
    case routes[2].action:
        $.get("./views/about.html", function (data) {
            $("#app").html(data);
            $(".scrolling-navbar").removeClass("navbar-dark");
            $(".scrolling-navbar").addClass("navbar-light");
        });
        break;
    case routes[3].action:
        $.get("./views/contact.html", function (data) {
            $("#app").html(data);
            $(".scrolling-navbar").removeClass("navbar-dark");
            $(".scrolling-navbar").addClass("navbar-light");
        });
        break;
    case routes[4].action:
        $.get("./views/productos.html", function (data) {
            $("#app").html(data);
            if(window.screen.width > 767){
                $(".scrolling-navbar").removeClass("navbar-light");
                $(".scrolling-navbar").addClass("navbar-dark");
            }
            else {
                $(".scrolling-navbar").removeClass("navbar-dark");
                $(".scrolling-navbar").addClass("navbar-light");
            }
            $(".banner-container").removeClass("banner-bg-color-2");
            $(".banner-container").addClass("banner-bg-color-1");
            $.getJSON(URLARREGLOS, function (respuesta, estado) {
                if(estado === "success"){
                    const arrayDecoracion = respuesta;
                    renderizarTituloBanner('banner', 'Arreglos de\neventos')
                    renderizarCards(arrayDecoracion, 'cards-container');
                }
            });
        });
        break;
    case routes[5].action:
        $.get("./views/productos.html", function (data) {
            $("#app").html(data);
            if(window.screen.width > 767){
                $(".scrolling-navbar").removeClass("navbar-light");
                $(".scrolling-navbar").addClass("navbar-dark");
            }
            else {
                $(".scrolling-navbar").removeClass("navbar-dark");
                $(".scrolling-navbar").addClass("navbar-light");
            }
            $(".banner-container").removeClass("banner-bg-color-1");
            $(".banner-container").addClass("banner-bg-color-2");
            $.getJSON(URLPAPEL, function (respuesta, estado) {
                if(estado === "success"){
                  const arrayPapeleria = respuesta;
                  renderizarTituloBanner('banner', 'Papelería\ncreativa')
                  renderizarCards(arrayPapeleria, 'cards-container');
                }
            });
        });
        break;
    case routes[6].action:
        $.get("./views/budget.html", function (data) {
            $("#app").html(data);
            $(".scrolling-navbar").removeClass("navbar-dark");
            $(".scrolling-navbar").addClass("navbar-light");
        });
    break;
    default:
        break;
}
};
/*----------------------------------------------------------------------------------------*/