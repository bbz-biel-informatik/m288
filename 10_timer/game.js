var spieler = document.querySelector('.player')

var timer = new Timer(30)       /* start=3 */

function loop() {
  if(timer.ready()) {                                               /* start=4 */
    spieler.style.left = parseInt(spieler.style.left) + 10 + 'px'   /* start=4 */
  }                                                                 /* start=4 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
