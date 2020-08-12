


document.getElementById('inputsearch').addEventListener('keyup', function (event) {
  let searchName = document.getElementById('inputsearch')
  searchName = searchName.value.toLowerCase().replace(/\s+/g, '')
  console.log(searchName)

  let allNames = document.getElementsByClassName('name')

  for (let i = 0; i < allNames.length; i++) {
    const currentName = allNames[i].textContent.toLocaleLowerCase().replace(/\s+/g, '')
    if (currentName.includes(searchName)) {
      allNames[i].style.display = 'block'
    } else {
      allNames[i].style.display = 'none'
    }
  }

})
