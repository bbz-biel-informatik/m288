var spieler = document.querySelector('.player')
var punkteAnzeige = document.querySelector('.punkte') /* start=4 */
var score = 0                                     /* start=2 */

function loop() {

  if(parseInt(spieler.style.left) > 200) {        /* start=3 */
    score = score + 1                             /* start=3 */
    punkteAnzeige.textContent = score             /* start=5 */
  }                                               /* start=3 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
