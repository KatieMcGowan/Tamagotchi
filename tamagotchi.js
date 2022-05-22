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

const stopGame = () => {
  if (boredomMeter >= 10 || hungerMeter >= 10 || sleepinessMeter >= 10) {
    return true;
  } else {
    return false;
  }
}

const startBoredomTimer = () => {
  let counter = setInterval(function() {
    if (stopGame() == false) {
      boredomMeter++;
      stopGame();
      $('#boredom').html(boredomMeter);
    } else if (boredomMeter >= 10) {
        clearInterval(counter)
        $("#topscreen-gameplay").addClass("none");
        $("#bottomscreen-gameplay").addClass("none")
        $(".creature").addClass("none");
        $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from boredom.")
        $("#deathtext").removeClass("none");
        $(".deathicon").removeClass("none");
    } else {
      clearInterval(counter);
    }     
  },1500)
}  

const startHungerTimer = () => {
  let counter = setInterval(function() {
    if (stopGame() == false) {
      hungerMeter++;
      stopGame();
      $('#hunger').html(hungerMeter);
    } else if (hungerMeter >= 10) {
      clearInterval(counter)
      $("#topscreen-gameplay").addClass("none");
      $("#bottomscreen-gameplay").addClass("none")
      $(".creature").addClass("none");
      $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from hunger.")
      $("#deathtext").removeClass("none");
      $(".deathicon").removeClass("none");
    } else {
      clearInterval(counter);
    }
  },2000)
}

const startSleepinessTimer = () => {
  let counter = setInterval(function() {
    if (stopGame() == false) {
      sleepinessMeter++;
      $('#sleepiness').html(sleepinessMeter);
    } else if (sleepinessMeter >= 10) {
        clearInterval(counter)
        $("#topscreen-gameplay").addClass("none");
        $("#bottomscreen-gameplay").addClass("none")
        $(".creature").addClass("none");
        $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from sleepiness.")
        $("#deathtext").removeClass("none");
        $(".deathicon").removeClass("none");
    } else {
      clearInterval(counter);
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
  setInterval(function() {
    tamagotchi.age++;
    $("#age").html(tamagotchi.age);
    },10000);
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
    $("#foodicon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#foodicon").className !== "none") {
        clearInterval(counter);
        $("#foodicon").addClass("none");
      }
    },1500);
  } else return;
})

$("#rest").on("click", function () {
  if (sleepinessMeter >= 4) {
    sleepinessMeter = sleepinessMeter - 4; 
    $("#sleepiness").html(sleepinessMeter);
    $("#resticon").removeClass("none");
    // //Doesn't work
    // $("#screen").addClass("nightscreen");
    let counter = setInterval(function() {
      if ($("#resticon").className !== "none") {
        clearInterval(counter);
        $("#resticon").addClass("none");
        $("#screen").addClass("nightscreen");
      }
      },1500);
    } else return;  
  }
)

//Current issue: getting countdowns to stop on other counters when 
//one deathstate is reached