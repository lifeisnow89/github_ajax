var cardsDiv = document.querySelector("#cards");
var findUser = "";

function getUser(element) {
    console.log(element.value);
    findUser = element.value
}

function userInfo(data) {
    var res = `<div class="card">
                    <img src ="${data.avatar_url}" alt="${data.login}">
                    <h3>${data.login} | ${data.name}</h3>
                    <p>Location: ${data.location}</p>
                    <p>Repositories: ${data.public_repos}</p>
                </div>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + findUser)
    var data = await response.json();
    console.log(data);
    cardsDiv.innerHTML = userInfo(data);
}
