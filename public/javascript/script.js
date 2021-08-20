
//API GitHub
const url = "https://api.github.com/users/flavio-sipoli/repos";

window.addEventListener('load', () => {
    repository();
});


function repository() {
    fetch(url)
        .then(resolucao => resolucao.json())
        .then((body) => mountHTML(body))
        .catch(error => alert(error.message))
}

function mountHTML(repos) {
    repos.forEach((repo) => {
        const repository = document.querySelector('.repo-git');
        let repoDiv = document.createElement('div');
        repoDiv.setAttribute("class", "repo");
        let repoLink = document.createElement('a');
        repoLink.setAttribute("href", `${repo.html_url}`)
        repoLink.innerHTML = `${repo.name}`;
        repoDiv.appendChild(repoLink);
        repository.appendChild(repoDiv);
    })
}

