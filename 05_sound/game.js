var spieler = document.querySelector('.player')
var explosion = new Audio('sounds/explosion.mp3')   /* start=3 */
var jubel = new Audio('sounds/yeah.mp3')            /* start=3 */

function loop() {
  if(/* beliebige Bedingung */) {                   /* start=4 */
    explosion.play()                                /* start=4 */
  }                                                 /* start=4 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
