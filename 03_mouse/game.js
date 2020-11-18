var spieler = document.querySelector('.player')
var spielfeld = document.querySelector('.playground')             /* start=3 */
spieler.style.left = '0px'
spieler.style.top = '0px'

function loop() {
  spieler.style.left = mousePositionX(spielfeld) + 'px'           /* start=5 */
  spieler.style.top = mousePositionY(spielfeld) + 'px'            /* start=5 */

  if(mouseClick()) {                                              /* start=6 */
    spieler.style.backgroundColor = 'blue'                        /* start=6 */
  }                                                               /* start=6 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
