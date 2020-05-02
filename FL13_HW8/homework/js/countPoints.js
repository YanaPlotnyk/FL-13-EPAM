function isBigger (team1, team2) {
  return team1 > team2;
}
let scores = 0;
function countPoints(goals){
  goals.forEach(function(item){
    let team1 = item[0];
    let team2 = item[2];
    if (isBigger(team1,team2)){
      scores += 3;
    }else{
      team1 === team2 ? scores++ : scores
    } 
  });
  return scores;
}
console.log(countPoints(['3:1','1:0','0:0','1:2','4:0','2:3','1:1','0:1','2:1','1:0']));