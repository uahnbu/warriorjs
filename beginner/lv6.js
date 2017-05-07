var health = 0, back = true, dodge = 0
class Player {
  playTurn(warrior) {
    if (back)
      if (warrior.feel('backward').isCaptive()) {
        warrior.rescue('backward')
        back = false
      } else warrior.walk('backward')
    else
      if (warrior.feel().isEmpty())
      	if (warrior.health() > 16) {
          warrior.walk()
          if (dodge == 1) dodge = 2
        }	else if (health > warrior.health() && dodge == 0) {
          warrior.walk('backward')
          dodge = 1
        }	else if (dodge < 2) warrior.rest()
        else warrior.walk()
    	else warrior.attack()
    health = warrior.health()
  }
}
