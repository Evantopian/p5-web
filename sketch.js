//Can incorperate dates to make a line chart
let data;

function preload() {
  let url = 'https://data.cityofnewyork.us/resource/8h9b-rp9u.json';
  data = loadJSON(url);
}

function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(220);

  //ask if json objects can work in enhanced loops
  //Testing: console.log(typeof data); + var size = Object.keys(data).length;

  var gender = [0, 0] //[m,f]

  var race = [] //[race, count]
  race[0] = [];
  race[1] = [0, 0, 0, 0, 0, 0, 0];

  var age = [] //[age range, count]
  age[0] = [];
  age[1] = [0, 0, 0, 0, 0];

  var rCount = 0,
    aCount = 0;

  for (var i in data) {
    //Incrementing males and females
    if (data[i].perp_sex == "M") {
      gender[0]++;
    } else {
      gender[1]++;
    }

    //Identifying race and incrementing to race
    if (!race[0].includes(data[i].perp_race)) {
      race[0][rCount] = data[i].perp_race;
      rCount++;
    }
    race[1][race[0].indexOf(data[i].perp_race)]++;
    
    //Identifying age groups and incrementing to age groups
    if (!age[0].includes(data[i].age_group)) {
      age[0][aCount] = data[i].age_group;
      aCount++;
    }
    age[1][age[0].indexOf(data[i].age_group)]++;

  }

  createDisplay(3, gender, race);

  print(gender);
  print(race);
  print(age);
  noLoop();
}

//Fix up createDisplay func by splitting and condense.
//Maybe create objects for types of graphs idk. (efficiency+)


function createDisplay(sec, sex, eth) {

  //Displaying race data

  //PiChart: https://p5js.org/examples/form-pie-chart.html


  //Displaying gender data
  fill(56, 137, 243);
  rect(100, 235, sex[0] / 1.5, 50);

  fill(255, 60, 170);
  rect(100, 320, sex[1] / 1.5, 50);

  //Displaying age data
  //Create stick figures scale based on counts

  //Displaying dates/time data
  //Create line chart


  let split = height / sec;

  for (let i = 0; i < sec; i++) {
    line(0, split, width, split);
    split += split;
  }

}
