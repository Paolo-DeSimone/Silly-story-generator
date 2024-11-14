// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname'); // Input
const randomize = document.querySelector('.randomize'); // btn
const story = document.querySelector('.story'); // paragraph

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// 2. RAW TEXT STRINGS

const storyText =  `It was 94 fahrenheit outside, so :insertx: went for a walk.
 When they got to :inserty:, they stared in horror for a few moments, then :insertz:. 
 Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and
 it was a hot day.`

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas`"]
const insertY = ["the soup kitchen","Disneyland","the White House`"]
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away`"]


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText.replace("Bob", `<strong>Bob</strong>`)
    if(customName.value !== '') {
        const name = String(customName.value);
        newStory = storyText.replace("Bob", `<strong>${name}</strong>`)
    }
    const xItem = randomValueFromArray(insertX)
    const yItem = randomValueFromArray(insertY)
    const zItem = randomValueFromArray(insertZ)

    newStory = newStory.replaceAll(":insertx:", xItem)
    newStory = newStory.replace(":inserty:", yItem)
    newStory = newStory.replace(":insertz:", zItem)

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300/14)} stone`; // weight in stones
        const temperature = `${Math.round((94 - 30) / 2)} centigrade`; // temperature in centigrade
        newStory = newStory.replace("300 pounds", weight)
        newStory = newStory.replace("94 fahrenheit", temperature)
    }
    story.innerHTML = newStory // innerHTML->renders <strong>${name}</strong> VS TextContent does not render HTML tags
    story.style.visibility = 'visible';
    console.log(newStory)
}