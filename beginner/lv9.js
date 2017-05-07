class Player {
  playTurn(warrior) {
    if (warrior.feel().isWall()) warrior.pivot()
    else
      if (warrior.feel().isEmpty())
        if (warrior.look()[2].isEnemy()) warrior.shoot()
        else warrior.walk()
    	else
        if (warrior.feel().isCaptive()) warrior.rescue()
        else warrior.attack()
  }
}
