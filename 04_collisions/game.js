var spieler = document.querySelector('.player')
var gegner1 = document.querySelector('.enemy1')   /* start=2 */
var gegner2 = document.querySelector('.enemy2')   /* start=2 */
var gegner3 = document.querySelector('.enemy3')   /* start=2 */
var gegner4 = document.querySelector('.enemy4')   /* start=2 */
spieler.style.left = '0px'

function loop() {
  // Kommentar: sobald der Spieler mit Gegner1 oder 2 kollidiert, ist das Spiel fertig    /* start=4 */
  if(anyCollision(spieler, [gegner1, gegner2])) {         /* start=4 */
    alert("Game over!")                                   /* start=4 */
  }                                                       /* start=4 */

  // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht   /* start=5 */
  var collisions = allCollisions(spieler, [gegner3, gegner4])                             /* start=5 */
  // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie              /* start=5 */
  for(var collision of collisions) {                                                      /* start=5 */
    collision.parentNode.removeChild(collision)                                           /* start=5 */
  }                                                                                       /* start=5 */

  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
