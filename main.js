// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let errorPresent = false

// Your JavaScript code goes here!

  let modal = document.getElementById('modal')
  let hearts = document.querySelectorAll('.like')
  modal.setAttribute('class', 'hidden')

  const errorHandler = () =>{
    errorPresent = !errorPresent
  
    if (errorPresent){
      modal.setAttribute('class', '')
    } else{
      modal.setAttribute('class', 'hidden')
    }
  }

  hearts.forEach(heart => {
    heart.addEventListener("click", () =>{
    return mimicServerCall()
      .then(() => {
        if (heart.lastElementChild.className == 'like-glyph'){
          let heartSpan = heart.querySelector('.like-glyph')
          let glyph = heartSpan.textContent
          heartSpan.textContent = swapGlyph(glyph)
          heartSpan.setAttribute('class', 'activated-heart')
        } else {
          let heartSpan = heart.querySelector('.activated-heart')
          let glyph = heartSpan.textContent
          heartSpan.textContent = swapGlyph(glyph)
          heartSpan.setAttribute('class', 'like-glyph')
        }
      })
      .catch(error => {
        errorHandler()
        let pTag = modal.querySelector('#modal-message')
        pTag.textContent = error
        setTimeout(() => errorHandler(), 5000)
      })
    })
  })

  const swapGlyph = glyph =>{
    if (glyph == EMPTY_HEART){
      return glyph = FULL_HEART
    } else {
      return glyph = EMPTY_HEART
    }
  }




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
