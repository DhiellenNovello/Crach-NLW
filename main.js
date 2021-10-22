//na linguagem de java temos as variaveis:let ou const
//função no javascript sempre tem que acompanhar (){}
//computador começa a contar sempre do 0123456
const LinksSocialMedia = {
  github: 'DhiellenNovello',
  instagram: 'dhiellennm',
  facebook: 'dhiellen.novello'
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()

//sempre que for usar o alert, é preciso colocar a função abaixo novamente, após todo a const
