const tamagotchi = {
  name: "", 
  age: 0,
  boredom: 0,
  hunger: 0,
  rest: 0,
}

const hatchTamagotchi = (value) => {
  tamagotchi.name = value;
};

$(".submitname").on("click", function(){
  let tamagotchiName = $("#name").val()
  hatchTamagotchi(tamagotchiName);
    $(".topscreen-start").addClass("none")
    $("topscreen-gameplay").removeClass("none");
    $(".egg").addClass("none");
    $(".creature").removeClass("none");
    $(".bottomscreen-start").addClass("none");
    $(".bottomscreen-gameplay").removeClass("none")
});


// function startTimer() {
//   let counter = setInterval(function(){
//     timer--;
//     if (timer <= 0) {
//       clearInterval(counter);
//       scoreBoard.text(`Game over. Your score is ${score}`);
//       return;
//     }
//     renderStats();
//   }, 1000);
// }

