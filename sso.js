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
    // return response.json();
    return {
      authenticated: true,
      captcha: false,
      sso: {
        facebook: {
          id: "10156520253447730",
          displayName: "Carlos Guerrero",
          name: {},
          emails: [
            {
              value: "guerrerocarlos@gmail.com"
            }
          ],
          photos: [
            {
              value:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10156520253447730&height=50&width=50&ext=1557839797&hash=AeRDXkx4XPkS4dvY"
            }
          ],
          provider: "facebook",
          _raw:
            '{"id":"10156520253447730","email":"guerrerocarlos\\u0040gmail.com","name":"Carlos Guerrero","picture":{"data":{"height":50,"is_silhouette":false,"url":"https:\\/\\/platform-lookaside.fbsbx.com\\/platform\\/profilepic\\/?asid=10156520253447730&height=50&width=50&ext=1557839797&hash=AeRDXkx4XPkS4dvY","width":50}}}',
          _json: {
            id: "10156520253447730",
            email: "guerrerocarlos@gmail.com",
            name: "Carlos Guerrero",
            picture: {
              data: {
                height: 50,
                is_silhouette: false,
                url:
                  "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10156520253447730&height=50&width=50&ext=1557839797&hash=AeRDXkx4XPkS4dvY",
                width: 50
              }
            }
          }
        }
      },
      __sso: {
        facebook: {
          accessToken:
            "EAAdkOuLCXfwBAGfCcTrnoGs4HRaSawhdzZB1nQnuWBZAk8diBBV7w0opwJFESgaMlClANbXAYxtw7RSDPuGnBmaWryl8chmPtrPAPw5lgAtFiEGH0Y09RbrxZAdT4hNKO9sTflrx7JRehpxbQHiZBL7aJbZAZArEd2jLBgin6hn0VxzCcx1vTh"
        }
      },
      storage: {}
    };
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
