const tamagotchi = {
  name: "", 
  age: 0,
  boredom: 0,
  hunger: 0,
  fatigue: 0,
}

//Captures name value on start screen and updates tamagotchi object
const hatchTamagotchi = (value) => {
  tamagotchi.name = value;
};

//Timers for age, boredom, hunger, and fatigue meters, with death conditions.
const timer = () => {
  let ageCounter = setInterval(function() {
    tamagotchi.age++;
    $("#age").html(tamagotchi.age);
    },10000);
  let boredomCounter = setInterval(function() {
    tamagotchi.boredom++
    $('#boredom').html(tamagotchi.boredom);
    if (tamagotchi.boredom >= 10) {
      clearInterval(boredomCounter);
      clearInterval(hungerTimer);
      clearInterval(fatigueCounter);
      clearInterval(ageCounter);
      $("#topscreen-gameplay").addClass("none");
      $("#bottomscreen-gameplay").addClass("none");
      $(".creature").addClass("none");
      $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from boredom. Refresh to play again.")
      $("#deathtext").removeClass("none");
      $(".deathicon").removeClass("none");
      $("#feed").removeClass("hover");
      $("#rest").removeClass("hover");
      $("#play").removeClass("hover");
    }
  },1500);
  let hungerTimer = setInterval(function() {
    tamagotchi.hunger++;
    $('#hunger').html(tamagotchi.hunger);
    if (tamagotchi.hunger >= 10) {
      clearInterval(hungerTimer);
      clearInterval(boredomCounter);
      clearInterval(fatigueCounter);
      clearInterval(ageCounter);
      $("#topscreen-gameplay").addClass("none");
      $("#bottomscreen-gameplay").addClass("none");
      $(".creature").addClass("none");
      $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from hunger. Refresh to play again.")
      $("#deathtext").removeClass("none");
      $(".deathicon").removeClass("none");
      $("#feed").removeClass("hover");
      $("#rest").removeClass("hover");
      $("#play").removeClass("hover");
    }
  }, 2000);
  let fatigueCounter = setInterval(function() {
    tamagotchi.fatigue++;
    $('#sleepiness').html(tamagotchi.fatigue);
    if (tamagotchi.fatigue >= 10) {
      clearInterval(fatigueCounter);
      clearInterval(boredomCounter);
      clearInterval(hungerTimer);
      clearInterval(ageCounter);
      $("#topscreen-gameplay").addClass("none");
      $("#bottomscreen-gameplay").addClass("none");
      $(".creature").addClass("none");
      $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from fatigue. Refresh to play again.")
      $("#deathtext").removeClass("none");
      $(".deathicon").removeClass("none");
      $("#feed").removeClass("hover");
      $("#rest").removeClass("hover");
      $("#play").removeClass("hover");
    }  
  },3000)
}  

//Submit Button
$(".submitname").on("click", function(){
  let tamagotchiName = $("#name").val()
  hatchTamagotchi(tamagotchiName);
  $("#topscreen-start").addClass("none");
  $("#topscreen-gameplay").removeClass("none");
  $(".egg").addClass("none");
  $(".creature").removeClass("none");
  $("#bottomscreen-start").addClass("none");
  $("#bottomscreen-gameplay").removeClass("none");
  $("#playername").html(tamagotchiName);
  $("#play").addClass("hover");
  $("#feed").addClass("hover");
  $("#rest").addClass("hover");
  timer();
});

//Play Buttons
$("#play").on("click", function () {
  if (tamagotchi.boredom >= 3 && $("#resticon").hasClass("none") == true && $("#foodicon").hasClass("none") == true) {
    tamagotchi.boredom = tamagotchi.boredom - 3; 
    $('#boredom').html(tamagotchi.boredom);
    $("#playicon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#playicon").className !== "none") {
        clearInterval(counter);
        $("#playicon").addClass("none");
      }
    },1000);
  } else {
    return;
  };
});

$("#feed").on("click", function () {
  if (tamagotchi.hunger >= 2 && $("#resticon").hasClass("none") == true && $("#playicon").hasClass("none") == true) {
    tamagotchi.hunger = tamagotchi.hunger - 2; 
    $('#hunger').html(tamagotchi.hunger);
    $("#foodicon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#foodicon").className !== "none") {
        clearInterval(counter);
        $("#foodicon").addClass("none");
      }
    },1000);
  } else {
    return;
  };
});

$("#rest").on("click", function () {
  if (tamagotchi.fatigue >= 4 && $("#playicon").hasClass("none") == true && $("#foodicon").hasClass("none") == true) {
    tamagotchi.fatigue = tamagotchi.fatigue - 4; 
    $("#sleepiness").html(tamagotchi.fatigue);
    $("#resticon").removeClass("none");
    let counter = setInterval(function() {
      if ($("#resticon").className !== "none") {
        clearInterval(counter);
        $("#resticon").addClass("none");
      }
    },1000);
  } else {
    return;  
  };  
});