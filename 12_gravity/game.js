var spieler = document.querySelector('.player')
spieler.style.top = '200px'

function loop() {
  if(parseInt(spieler.style.top) < 200) {                       /* start=3 */
    spieler.style.top = parseInt(spieler.style.top) + 5 + 'px'  /* start=2 */
  }                                                             /* start=3 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
