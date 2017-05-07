class Player {
  playTurn(warrior) {
    if (warrior.feel().isCaptive()) warrior.rescue()
    else if (warrior.look()[1].isEnemy()) warrior.shoot()
    else warrior.walk()
  }
}
