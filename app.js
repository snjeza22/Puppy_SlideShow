async function start (){

    const response = await fetch ("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()// json-javascript object notation
    createBreedList(data.message) //in message property we have all breeds
}

start()


//sreating select element
function createBreedList(breedList){ //we called it anything we wanter (breedList)
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)"> 
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function(breed){//we can call it anything but we did breed
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `

}

// 
async function loadByBreed (breed){
    if (breed !== "Choose a dog breed"){
        const response = await fetch (`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        console.log(data)
    }

}