var spieler = document.querySelector('.player')
var spielfeld = document.querySelector('.playground')               /* start=4 */

var timer = new Timer(30)       /* start=3 */

function loop() {
  if(timer.ready()) {                                               /* start=3 */
    var h = document.createElement('div')                           /* start=4 */
    h.classList.add('stein')                                        /* start=4 */
    h.style.top = '0px'                                             /* start=5 */
    h.style.left = '100px'                                          /* start=5 */
    spielfeld.appendChild(h)                                        /* start=4 */
  }                                                                 /* start=3 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
