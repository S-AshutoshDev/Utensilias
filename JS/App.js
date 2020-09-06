
onload = () => {
  let APP_ID = `c02f0043`
  let APP_KEY = `9dd3789d9659a09113367395af0c9b58`
  //     fetch(`https://api.edamam.com/search?q=${SEARCH_KEY}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  let SEARCH_KEY
  let RECEPIE_DATA
  let KEY_CODE



  document.querySelector(`#recepieSearch`).addEventListener(`keyup`, (e) => {

    KEY_CODE = e.keyCode
    if (KEY_CODE === 13) {
      recepieFXN()
    }
  })
  document.querySelector(`#recepieButton`).addEventListener(`click`, (e) => {
    recepieFXN()
  })

  const recepieFXN = () => {
    document.querySelector(`.SearchedItems`).innerHTML = ``

    let SEARCH_KEY = document.querySelector(`#recepieSearch`).value

    let data = async (e) => {
      let db = await fetch(`https://api.edamam.com/search?q=${SEARCH_KEY}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      let datanew = await db.json()
      RECEPIE_DATA = datanew.hits
      listItems(RECEPIE_DATA)

    }
    data()
    const listItems = (x) => {
      for (let index = 0; index < x.length; index++) {
        const element = x[index];
        let foodTitle = element.recipe.label
        let foodImgURL = element.recipe.image
        let foodURL = element.recipe.shareAs
        document.querySelector(`.SearchedItems`).innerHTML += `
        <div class="recepie">
        <img src="${foodImgURL}" alt="${foodTitle}">
        <a target="blank" href="${foodURL}"class="title">${foodTitle}</a>
        </div>
        `
      }
    }
  }
}


