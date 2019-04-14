var div = document.createElement("div");
div.setAttribute("id", "sso-div");
div.classList.add("topright");

var button = document.createElement("a");

fetch("https://auth.ruso-facil.com/user.json", {
  method: "GET",
  withCredentials: true,
  cache: "no-cache"
})
  .then(function(response) {
    return response.json();
  })
  .then(user => {
    console.log("USER", user);
    if (user.authenticated) {
    } else {
      button.classList.add("btn");
      button.classList.add("btn-primary");
      button.classList.add("btn-white-outline");
      button.classList.add("display-4");
      button.setAttribute("id", "sso-button");
      button.setAttribute("href", "https://auth.ruso-facil.com/auth/facebook");
      button.innerHTML = "Iniciar Sesión";
    }
  });

div.appendChild(button);
document.querySelector("body").appendChild(div);
