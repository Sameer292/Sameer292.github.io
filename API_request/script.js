const submit = document.querySelector(".submit");
// submit.addEventListener("click", () => {
//   const username = document.querySelector(".username").value;
//   const reqUrl = `https://api.github.com/users/${username}`;
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", reqUrl);
//   xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);

//   document.querySelector(".name").innerHTML = data.name;
//    document.querySelector(".location").innerHTML = data.location;
//   document.querySelector(".followers").innerHTML = data.followers;
//    document.querySelector(".iii").src = data.avatar_url;

//   }
// };
//   xhr.send();
// });

submit.addEventListener("click", () => {
  const username = document.querySelector(".username").value;
  const reqUrl = `https://api.github.com/users/${username}`;
  fetch(reqUrl)
    .then((response) => {
      if (response.status === 404) {
        errorHandler();
        return null;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data !== null) {
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".location").innerHTML = data.location;
        document.querySelector(".followers").innerHTML = data.followers;
        document.querySelector(".iii").src = data.avatar_url;
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      errorHandler();
    })
    .finally(() => {
      console.log("Task completed");
    });
});

const errorHandler = function () {
  document.querySelector(".name").innerHTML = "Not found";
  document.querySelector(".location").innerHTML = "Not found";
  document.querySelector(".followers").innerHTML = "Not found";
  document.querySelector(".iii").src = "";
};
