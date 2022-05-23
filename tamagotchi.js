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
        $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from boredom. Refresh to play again.")
        $("#deathtext").removeClass("none");
        $(".deathicon").removeClass("none");
        $("#feed").removeClass("hover");
        $("#rest").removeClass("hover");
        $("#play").removeClass("hover");
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
      $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from hunger. Refresh to play again.")
      $("#deathtext").removeClass("none");
      $(".deathicon").removeClass("none");
      $("#feed").removeClass("hover");
      $("#rest").removeClass("hover");
      $("#play").removeClass("hover");
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
        $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from sleepiness. Refresh to play again.")
        $("#deathtext").removeClass("none");
        $(".deathicon").removeClass("none");
        $("#feed").removeClass("hover");
        $("#rest").removeClass("hover");
        $("#play").removeClass("hover");
    } else {
      clearInterval(counter);
    }
  },3000)
}

//Submit Button
$(".submitname").on("click", function(){
  let tamagotchiName = $("#name").val()
  hatchTamagotchi(tamagotchiName);
  $("#topscreen-start").addClass("none")
  $("#topscreen-gameplay").removeClass("none");
  $(".egg").addClass("none");
  $(".creature").removeClass("none");
  $("#bottomscreen-start").addClass("none");
  $("#bottomscreen-gameplay").removeClass("none");
  $("#playername").html(tamagotchiName);
  $("#play").addClass("hover");
  $("#feed").addClass("hover");
  $("#rest").addClass("hover");
  startBoredomTimer(); 
  startHungerTimer();
  startSleepinessTimer();
  setInterval(function() {
    tamagotchi.age++;
    $("#age").html(tamagotchi.age);
    },10000);
});

//Play Buttons
$("#play").on("click", function () {
  if (boredomMeter >= 3 && $("#resticon").hasClass("none") == true && $("#foodicon").hasClass("none") == true) {
    boredomMeter = boredomMeter - 3; 
    $('#boredom').html(boredomMeter);
    $("#playicon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#playicon").className !== "none") {
        clearInterval(counter);
        $("#playicon").addClass("none");
      }
    },1000);
  } else return;
})

$("#feed").on("click", function () {
  if (hungerMeter >= 2 && $("#resticon").hasClass("none") == true && $("#playicon").hasClass("none") == true) {
    hungerMeter = hungerMeter - 2; 
    $('#hunger').html(hungerMeter);
    $("#foodicon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#foodicon").className !== "none") {
        clearInterval(counter);
        $("#foodicon").addClass("none");
      }
    },1000);
  } else return;
})

$("#rest").on("click", function () {
  if (sleepinessMeter >= 4 && $("#playicon").hasClass("none") == true && $("#foodicon").hasClass("none") == true) {
    sleepinessMeter = sleepinessMeter - 4; 
    $("#sleepiness").html(sleepinessMeter);
    $("#resticon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#resticon").className !== "none") {
        clearInterval(counter);
        $("#resticon").addClass("none");
      }
      },1000);
    } else return;  
  }
)
