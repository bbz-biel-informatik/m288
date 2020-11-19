

var spieler = document.querySelector('.player')
var spielfeld = document.querySelector('.playground')

spieler.style.left = '0px'
spieler.style.top = '0px'

function loop() {
  if(mouseClick()) {                                                                          /* start=4 */
    var spielerX = parseInt(spieler.style.left)                                               /* start=4 */
    var spielerY = parseInt(spieler.style.top)                                                /* start=4 */
    var a = angle(spielerX, spielerY, mousePositionX(spielfeld), mousePositionY(spielfeld))   /* start=4 */

  	var schuss = document.createElement('div')                                                /* start=5 */
    schuss.classList.add('shot')                                                              /* start=5 */
    schuss.style.left = spieler.style.left                                                    /* start=5 */
    schuss.style.top = spieler.style.top                                                      /* start=5 */
    schuss.setAttribute('data-angle', (180 - a) * Math.PI / 180)                              /* start=6 */
    spielfeld.appendChild(schuss)                                                             /* start=5 */
  }                                                                                           /* start=4 */

  var schuesse = document.querySelectorAll('.shot')                                           /* start=7 */
  for(var schuss of schuesse) {                                                               /* start=7 */
  	var xPos = parseFloat(schuss.style.left)                                                  /* start=7 */
    var yPos = parseFloat(schuss.style.top)                                                   /* start=7 */
    var rotation = schuss.getAttribute('data-angle')                                          /* start=7 */
    schuss.style.left = 3 * Math.sin(rotation) + xPos + 'px'                                  /* start=7 */
    schuss.style.top = 3 * Math.cos(rotation) + yPos + 'px'                                   /* start=7 */
    if(parseInt(schuss.style.left) < 0 || parseInt(schuss.style.left) > 400 || parseInt(schuss.style.top) < 0 || parseInt(schuss.style.top) > 400) {    /* start=8 */
    	schuss.parentNode.removeChild(schuss)                                                   /* start=8 */
    }                                                                                         /* start=8 */
  }                                                                                           /* start=7 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
