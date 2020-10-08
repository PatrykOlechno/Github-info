const img = document.querySelector('img');
const advanced_repos = document.querySelector('.repos');
const nick = document.querySelector('.nick');
const link = document.querySelector('a');
let login = 'PatrykOlechno';
//search setup
const input = document.querySelector('input');

input.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        login = input.value
        getGithub();
    }
});

async function getGithub() {
    const res = await fetch(`https://api.github.com/users/${login}`);

    if (!res.ok){
        alert("Login doesn't match any user!");
        throw new Error(`HTTP error! Status: ${res.status}`);
    }else{
        //setup
        const json =  await res.json();
        const avatar = new Image();
        img.src = json.avatar_url;
        const login = json.login;
        const html_url = json.html_url;
        const repos = json.public_repos;

        //avatar
        link.href = html_url;
        link.target = "_blank";
        
        //nick
        login == "[object Text]" ? nick.value = '' : nick.value = login;

        //repos
        advanced_repos.innerHTML = repos;
    }
}

getGithub();