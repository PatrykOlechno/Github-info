const basic = document.querySelector('.basic-info');
const advanced_repos = document.querySelector('.repos');
const nick = document.querySelector('.nick');

async function getGithub() {
    const res = await fetch('https://api.github.com/users/patrykolechno');

    if (!res.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }else{
        const json =  await res.json();
        const avatar = new Image();
        avatar.src = json.avatar_url;
        const login = document.createTextNode(json.login);
        const html_url = json.html_url;
        const repos = document.createTextNode(json.public_repos)

        basic.appendChild(avatar);
        nick.appendChild(login)
        advanced_repos.appendChild(repos);
    }
}

getGithub();