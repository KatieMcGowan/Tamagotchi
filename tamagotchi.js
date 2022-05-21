let boredomMeter = 0;
let hungerMeter = 0;
let sleepinessMeter = 0;

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

const startBoredomTimer = () => {
  let counter = setInterval(function() {
    boredomMeter++;
    console.log(boredomMeter);
    $('#boredom').html(boredomMeter);
    if (boredomMeter >= 10) {
      clearInterval(counter)
      console.log(tamagotchi.name + " has died of boredom");
    }
  },1000)
}

const startHungerTimer = () => {
  let counter = setInterval(function() {
    hungerMeter++;
    $('#hunger').html(hungerMeter);
    if (hungerMeter >= 10) {
      clearInterval(counter)
      console.log(tamagotchi.name + " has died of hunger");
    }
  },2000)
}

const startSleepinessTimer = () => {
  let counter = setInterval(function() {
    sleepinessMeter++;
    $('#sleepiness').html(sleepinessMeter);
    if (sleepinessMeter >= 10) {
      clearInterval(counter)
      console.log(tamagotchi.name + " has died of sleepiness");
    }
  },3000)
}

$(".submitname").on("click", function(){
  let tamagotchiName = $("#name").val()
  hatchTamagotchi(tamagotchiName);
    $("#topscreen-start").addClass("none")
    $("#topscreen-gameplay").removeClass("none");
    $(".egg").addClass("none");
    $(".creature").removeClass("none");
    $("#bottomscreen-start").addClass("none");
    $("#bottomscreen-gameplay").removeClass("none")
    $("#playername").html(tamagotchiName);
   startBoredomTimer(); 
   startHungerTimer();
   startSleepinessTimer();
});

$("#play").on("click", function () {
  if (boredomMeter >= 3) {
    boredomMeter = boredomMeter - 3; 
    $('#boredom').html(boredomMeter);
    $("#playicon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#playicon").className !== "none") {
        clearInterval(counter);
        $("#playicon").addClass("none");
      }
    },1500);
  } else return;
})

//Consider if I click two buttons simultaneously, what happens to icons?


$("#feed").on("click", function () {
  if (hungerMeter >= 2){
    hungerMeter = hungerMeter - 2; 
    $('#hunger').html(hungerMeter);
    //add timer of 1 second
    $("#foodicon").removeClass("none");
  } else return;
})

$("#rest").on("click", function () {
  if (sleepinessMeter >= 4) {
    sleepinessMeter = sleepinessMeter - 4; 
    $('#sleepiness').html(sleepinessMeter);
    //Doesn't work
    $("#screen").addClass(".nightscreen");
    //add timer of 1 second
    $("#resticon").removeClass("none");
  } else return;  
})