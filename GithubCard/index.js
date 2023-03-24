
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = [];

// create a component
function githubCard(uIm, uNm, uUNm, ulc, uPr, uFws, uFwg, uBo){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uIm
  uName.textContent = uNm
  uUname.textContent = uUNm
  uLoca.textContent = ulc
  uProf.textContent = uPr
  uFlws.textContent = uFws
  uFlwg.textContent = uFwg
  uBio.textContent = uBo
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const entryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/duraanali")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// ******************************************

// Second Card
// create a component
function secCard(uImSec, uNmSec, uUNmSec, ulcSec, uPrSec, uFwsSec, uFwgSec, uBoSec){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImSec
  uName.textContent = uNmSec
  uUname.textContent = uUNmSec
  uLoca.textContent = ulcSec
  uProf.textContent = uPrSec
  uFlws.textContent = uFwsSec
  uFlws.textContent = uFwsSec
  uFlws.textContent = uFwsSec
  uFlwg.textContent = uFwgSec
  uBio.textContent = uBoSec
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const secEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/Abdiaziz-Omar")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// *************************************
// Third Card
// create a component
function thiCard(uImthi, uNmthi, uUNmthi, ulcthi, uPrthi, uFwsthi, uFwgthi, uBothi){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImthi
  uName.textContent = uNmthi
  uUname.textContent = uUNmthi
  uLoca.textContent = ulcthi
  uProf.textContent = uPrthi
  uFlws.textContent = uFwsthi
  uFlwg.textContent = uFwgthi
  uBio.textContent = uBothi
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const thiEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/kdn251")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// *****************************
// Fourth Card
// create a component
function fthCard(uImfth, uNmfth, uUNmfth, ulcfth, uPrfth, uFwsfth, uFwgfth, uBofth){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImfth
  uName.textContent = uNmfth
  uUname.textContent = uUNmfth
  uLoca.textContent = ulcfth
  uProf.textContent = uPrfth
  uFlws.textContent = uFwsfth
  uFlwg.textContent = uFwgfth
  uBio.textContent = uBofth
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const fthEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/alasalle")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// ********************************
// Fifth Card
// create a component
function fithCard(uImfith, uNmfith, uUNmfith, ulcfith, uPrfith, uFwsfith, uFwgfith, uBofith){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImfith
  uName.textContent = uNmfith
  uUname.textContent = uUNmfith
  uLoca.textContent = ulcfith
  uProf.textContent = uPrfith
  uFlws.textContent = uFwsfith
  uFlwg.textContent = uFwgfith
  uBio.textContent = uBofith
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const fithEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/luishrd")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// ************************************
// Sixth Card
// create a component
function sthCard(uImsth, uNmsth, uUNmsth, ulcsth, uPrsth, uFwssth, uFwgsth, uBosth){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImsth
  uName.textContent = uNmsth
  uUname.textContent = uUNmsth
  uLoca.textContent = ulcsth
  uProf.textContent = uPrsth
  uFlws.textContent = uFwssth
  uFlwg.textContent = uFwgsth
  uBio.textContent = uBosth
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const sthEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/tetondan")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// *******************************************
// Seventh Card
// create a component
function sethCard(uImseth, uNmseth, uUNmseth, ulcseth, uPrseth, uFwsseth, uFwgseth, uBoseth){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImseth
  uName.textContent = uNmseth
  uUname.textContent = uUNmseth
  uLoca.textContent = ulcseth
  uProf.textContent = uPrseth
  uFlws.textContent = uFwsseth
  uFlwg.textContent = uFwgseth
  uBio.textContent = uBoseth
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const sethEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/christianhelms")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// *******************************************
// Eighth Card
// create a component
function ethCard(uImeth, uNmeth, uUNmeth, ulceth, uPreth, uFwseth, uFwgeth, uBoeth){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImeth
  uName.textContent = uNmeth
  uUname.textContent = uUNmeth
  uLoca.textContent = ulceth
  uProf.textContent = uPreth
  uFlws.textContent = uFwseth
  uFlwg.textContent = uFwgeth
  uBio.textContent = uBoeth
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const ethEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/smith713")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// ***********************************************
// Ninth Card
// create a component
function nthCard(uImnth, uNmnth, uUNmnth, ulcnth, uPrnth, uFwsnth, uFwgnth, uBonth){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImnth
  uName.textContent = uNmnth
  uUname.textContent = uUNmnth
  uLoca.textContent = ulcnth
  uProf.textContent = uPrnth
  uFlws.textContent = uFwsnth
  uFlwg.textContent = uFwgnth
  uBio.textContent = uBonth
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const nthEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/ibrahimgurhandev")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})

// ********************************************
// Tenth Card
// create a component
function tthCard(uImtth, uNmtth, uUNmtth, ulctth, uPrtth, uFwstth, uFwgtth, uBotth){
  const mainCard = document.createElement("div")
  const image = document.createElement("img")
  const miniCard = document.createElement("div")
  const uName = document.createElement("h3")
  const uUname = document.createElement("p")
  const uLoca = document.createElement("p")
  const uProf = document.createElement("p")
  const uFlws = document.createElement("p")
  const uFlwg = document.createElement("p")
  const uBio = document.createElement("p")

  //   connect elements
  mainCard.appendChild(image)
  mainCard.appendChild(miniCard)
  mainCard.appendChild(uName)
  mainCard.appendChild(uUname)
  mainCard.appendChild(uLoca)
  mainCard.appendChild(uProf)
  mainCard.appendChild(uFlws)
  mainCard.appendChild(uFlwg)
  mainCard.appendChild(uBio)
  
  //   add content
  image.src = uImtth
  uName.textContent = uNmtth
  uUname.textContent = uUNmtth
  uLoca.textContent = ulctth
  uProf.textContent = uPrtth
  uFlws.textContent = uFwstth
  uFlwg.textContent = uFwgtth
  uBio.textContent = uBotth
  // add classes
  mainCard.classList.add("card")
miniCard.classList.add("card-info")
uName.classList.add("name")
uUname.classList.add("username")
  //   return the parent
  return mainCard
}
const tthEntryPoint = document.querySelector(".cards")
axios.get("https://api.github.com/users/afmire877")
.then(response => {
    const img = response.data.avatar_url
    const name = response.data.name
    const username = response.data.login
    const location = response.data.location
    const profile = response.data.Profile
    const followers = response.data.followers
    const following = response.data.following
    const bio = response.data.bio
    // console.log(response)
    entryPoint.appendChild(githubCard(img, name, username, location, profile, followers, following, bio))
})
.catch(err => {
  console.log(err.message)
})
