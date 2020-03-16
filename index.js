const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const game = array.find(game => game.result === "W")
  return game ? game.year : undefined
}
