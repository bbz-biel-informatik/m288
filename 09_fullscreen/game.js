var spieler = document.querySelector('.player')

var spielfeld = document.querySelector('.playground')             /* start=3 */
var vollbildButton = document.querySelector('.fullscreen')        /* start=3 */

vollbildButton.addEventListener('click', function () {            /* start=4 */
  spielfeld.requestFullscreen()                                   /* start=4 */
})                                                                /* start=4 */

function loop() {
  

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
