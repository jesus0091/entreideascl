/*----------------------------------------------------------------------------------------*/ 
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
    path: "/budget",
    action: "budget"
},
];
/*----------------------------------------------------------------------------------------*/
const router = () => {
let currentPath = location.hash.slice(1);
let pathToGo = routes.find((p) => p.path == currentPath);
switch (pathToGo.action) {
    case routes[0].action:
        $.get("./views/home.html", function (data) {
            $("#app").html(data);
        });
        break;
    case routes[1].action:
        $.get("./views/home.html", function (data) {
            $("#app").html(data);
        });
        break;
    case routes[2].action:
        $.get("./views/about.html", function (data) {
            $("#app").html(data);
        });
        break;
    case routes[3].action:
        $.get("./views/contact.html", function (data) {
            $("#app").html(data);
        });
        break;
    case routes[4].action:
        $.get("./views/budget.html", function (data) {
            $("#app").html(data);
        });
    break;
    default:
        break;
}
};
/*----------------------------------------------------------------------------------------*/