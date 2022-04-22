
function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet <= 2000) {
  return 'That will be twenty bucks.';
  } else if (feet < 2500 && 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet != 2500) {
    return 'No can do.';
  }
  feet(2501)
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.' : 'No go.'

}
city('Pittsburgh')

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous' :
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    case 'thanks for everything' :
      return 'Bye.'
  }
}