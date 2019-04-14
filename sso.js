var div = document.createElement("div");
div.setAttribute("id", "sso-div");
div.classList.add("topright");

var button = document.createElement("a");

fetch("https://auth.ruso-facil.com/user.json", {
  method: "GET",
  credentials: "include",
  cache: "no-cache"
})
  .then(function(response) {
    return response.json();
  })
  .then(user => {
    console.log("USER", user);
    button.setAttribute("id", "sso-button");
    if (user.authenticated) {
      var img = document.createElement("img");
      img.setAttribute("src", user.sso.facebook.photos[0].value);
      img.setAttribute("style", "border-radius: 50%");
      button.setAttribute("href", "https://cursos.ruso-facil.com/");
      button.appendChild(img);
    } else {
      button.classList.add("btn");
      button.classList.add("btn-primary");
      button.classList.add("btn-white-outline");
      button.classList.add("display-4");
      button.setAttribute("href", "https://auth.ruso-facil.com/auth/facebook");
      button.innerHTML = "Iniciar Sesión";
    }
  });

div.appendChild(button);
document.querySelector("body").appendChild(div);
