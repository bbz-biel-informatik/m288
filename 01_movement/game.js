var spieler = document.querySelector('.player')
spieler.style.left = '0px'                                  /* start=2 */

function loop() {
  spieler.style.left = parseInt(spieler.style.left) + 5 + 'px' /* start=3 */
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
