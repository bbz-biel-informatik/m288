var spieler = document.querySelector('.player')
var gegner = document.querySelector('.enemy')                     /* start=2 */

spieler.style.left = '0px'
spieler.style.top = '0px'

function loop() {
  if(keyboard(39)) {                                              /* start=3 */
    spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'  /* start=3 */
  }                                                               /* start=3 */
  if(keyboard(37)) {                                              /* start=3 */
    spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'  /* start=3 */
  }                                                               /* start=3 */

  var spielerX = parseInt(spieler.style.left)                     /* start=6 */
  var spielerY = parseInt(spieler.style.top)                      /* start=6 */
  var gegnerX = parseInt(gegner.style.left)                       /* start=6 */
  var gegnerY = parseInt(gegner.style.left)                       /* start=6 */
                                                                  /* start=6 */
  var dist = distance(spielerX, spielerY, gegnerX, gegnerY)       /* start=6 */
  if(dist < 100) {                                                /* start=6 */
  	spieler.style.backgroundColor = 'red'                         /* start=6 */
  } else {                                                        /* start=6 */
    spieler.style.backgroundColor = 'green'                       /* start=6 */
  }                                                               /* start=6 */

  var a = angle(gegnerX, gegnerY, spielerX, spielerY)           /* start=7 */
  spieler.style.transform = "rotate(" + a + "deg)"                /* start=7 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
