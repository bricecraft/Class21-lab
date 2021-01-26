function isTouching(mouse1, mouse2) {
    if (mouse2.x - mouse1.x < mouse1.width/2 + mouse2.width/2
      && mouse1.x - mouse2.x < mouse1.width/2 + mouse2.width/2
      && mouse2.y - mouse1.y < mouse1.height/2 + mouse2.height/2
      && mouse1.y - mouse2.y < mouse1.height/2 + mouse2.height/2) {
    return true
  }
  else {
    return false
  }
  }