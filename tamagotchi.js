const tamagotchi = {
  name: "", 
  age: 0,
  boredom: 0,
  hunger: 0,
  fatigue: 0,
}

const hatchTamagotchi = (value) => {
  tamagotchi.name = value;
};

const stopGame = () => {
  if (tamagotchi.boredom >= 10 || tamagotchi.hunger >= 10 || tamagotchi.fatigue >= 10) {
    return true;
  } else {
    return false;
  }
}

const boredomTimer = () => {
  let counter = setInterval(function() {
    if (stopGame() == false) {
      tamagotchi.boredom++;
      stopGame();
      $('#boredom').html(tamagotchi.boredom);
    } else if (tamagotchi.boredom >= 10) {
        stopGame();
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

const hungerTimer = () => {
  let counter = setInterval(function() {
    if (stopGame() == false) {
      tamagotchi.hunger++;
      stopGame();
      $('#hunger').html(tamagotchi.hunger);
    } else if (tamagotchi.hunger >= 10) {
      stopGame();
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

const fatigueTimer = () => {
  let counter = setInterval(function() {
    if (stopGame() == false) {
      tamagotchi.fatigue++;
      stopGame();
      $('#sleepiness').html(tamagotchi.fatigue);
    } else if (tamagotchi.fatigue >= 10) {
        stopGame();
        clearInterval(counter)
        $("#topscreen-gameplay").addClass("none");
        $("#bottomscreen-gameplay").addClass("none")
        $(".creature").addClass("none");
        $("#deathtext").html(tamagotchi.name + ", age: " + tamagotchi.age + ", died from fatigue. Refresh to play again.")
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
  boredomTimer(); 
  hungerTimer();
  fatigueTimer();
  setInterval(function() {
    tamagotchi.age++;
    $("#age").html(tamagotchi.age);
    },10000);
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
  }
})

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
  } else return;
})

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
    } else return;  
  }
)


//Last issue: Meters hitting 10 but taking 1.5-3 seconds to clear intervals
//Clicking on a button when meter is 10 stops other intervals but keeps the clicked one going.