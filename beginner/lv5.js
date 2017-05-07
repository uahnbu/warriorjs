var health = 0
class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty())
      if (warrior.health() > 12 || health > warrior.health()) warrior.walk()
      else warrior.rest()
    else
      if (warrior.feel().isCaptive()) warrior.rescue()
      else warrior.attack()
    health = warrior.health()
  }
}
