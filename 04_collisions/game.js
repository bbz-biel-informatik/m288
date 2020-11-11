var spieler = document.querySelector('.player')
var gegner1 = document.querySelector('.enemy1')   /* start=2 */
var gegner2 = document.querySelector('.enemy2')   /* start=2 */
var gegner3 = document.querySelector('.enemy3')   /* start=2 */
var gegner4 = document.querySelector('.enemy4')   /* start=2 */
spieler.style.left = '0px'

function loop() {
  // Kommentar: sobald der Spieler mit Gegner1 oder 2 kollidiert, ist das Spiel fertig    /* start=5 */
  if(anyCollision(spieler, [gegner1, gegner2])) {         /* start=5 */
    alert("Game over!")                                   /* start=5 */
    return                                                /* start=5 */
  }                                                       /* start=5 */

  // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht   /* start=6 */
  var collisions = allCollisions(spieler, [gegner3, gegner4])                             /* start=6 */
  // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie              /* start=6 */
  for(var collision of collisions) {                                                      /* start=6 */
    collision.parentNode.removeChild(collision)                                           /* start=6 */
  }                                                                                       /* start=6 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
