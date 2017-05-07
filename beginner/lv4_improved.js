var health = 0, heal = 0
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty())
      if (warrior.health() > 12 || health > warrior.health()) {
        warrior.walk()
        if (warrior.health() > 12 && heal == 1) heal = 2
      } else if (heal < 2) {
        warrior.rest()
        heal = 1
      } else warrior.walk()
    else warrior.attack()
    health = warrior.health()
  }
}
