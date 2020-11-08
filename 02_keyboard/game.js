var spieler = document.querySelector('.player')
spieler.style.left = '0px'                                       /* start=4 */

function loop() {
  if(keyboard(39)) {                                            /* start=4 */
    spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'  /* start=4 */
  }                                                             /* start=4 */
  if(keyboard(37)) {                                            /* start=4 */
    spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'  /* start=4 */
  }                                                             /* start=4 */
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
