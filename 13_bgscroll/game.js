var spieler = document.querySelector('.player')
spieler.style.top = '200px'

var spielfeld = document.querySelector('.playground')                   /* start=3 */
var backgroundPosition = 0;                                             /* start=4 */

function loop() {
  backgroundPosition = backgroundPosition + 5;                          /* start=4 */
  spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;    /* start=4 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
