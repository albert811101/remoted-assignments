function signIn() {
  let xhr = new XMLHttpRequest();
  let userEmail = document.querySelector("#email").value;
  let userPassword = document.querySelector("#password").value;
  console.log(userEmail, userPassword);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    if (xhr.response === "email not exist") {
        let div = document.createElement("div");
        div.innerHTML = `<p>user(email) not exist!</p>`;
        document.querySelector("body").appendChild(div);
    } else if (xhr.response === "password incorrect") {
        let div = document.createElement("div");
        div.innerHTML = `<p>password is incorrect!</p>`;
        document.querySelector("body").appendChild(div);
    } else if (xhr.response === "password correct") {
        window.location = "member";
    }
    }
  };
  url = `/login_user?email=${userEmail}&password=${userPassword}`;
  xhr.open("GET", url);
  xhr.send();
}

function signUp() {
  let xhr = new XMLHttpRequest();
  let userEmail = document.querySelector("#email2").value;
  let userPassword = document.querySelector("#password2").value;    
  console.log(userEmail, userPassword);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (xhr.response === "user exist") {
        let div = document.createElement("div");
        div.innerHTML = `<p>email is already used!</p>`;
        document.querySelector("body").appendChild(div);
      } else if (xhr.response === "new user"){
        window.location = "member";
      }
    }
  };
  url2 = `/signup_user?email=${userEmail}&password=${userPassword}`;
  xhr.open("GET", url2);
  xhr.send();

}











