let data;

//Post research:
// - Create a class that consists of data visualization methods or graphics - ex: pi charts, line graphs, histos, etc.
// - Using 2d or 1d arrays that consists of counts,  these types of json files are easily applicable.


//ask if json objects can work in enhanced loops
//Testing: console.log(typeof data); + var size = Object.keys(data).length;

let gender = [0, 0] //[m,f]

let race = [] //[race, count]
race[0] = [];
race[1] = [0, 0, 0, 0, 0, 0, 0];

let age = [] //[age range, count]
age[0] = [];
age[1] = [0, 0, 0, 0, 0];

let dates = []
dates[0] = [];
dates[1] = [0, 0, 0, 0];

let borough = []
borough[0] = [];
borough[1] = [0, 0, 0, 0, 0];


function preload() {
  let url = 'https://data.cityofnewyork.us/resource/8h9b-rp9u.json';
  data = loadJSON(url);
}

function setup() {
  createCanvas(800, 900);

  var rCount = 0,
    aCount = 0,
    dCount = 0,
    bCount = 0;

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

    if (!borough[0].includes(data[i].arrest_boro)) {
      borough[0][bCount] = data[i].arrest_boro;
      bCount++;
    }
    borough[1][borough[0].indexOf(data[i].arrest_boro)]++;



    //Identifying crime dates by months
    var temp = data[i].arrest_date.substring(0, data[i].arrest_date.indexOf("-", data[i].arrest_date.indexOf("-")) + 6);
    if (!dates[0].includes(temp)) {

      dates[0][dCount] = temp;
      dCount++;
    }
    dates[1][dates[0].indexOf(temp)]++;
  }
}


function draw() {
  background(220);

  let split = height / 3;

  for (var i = 0; i < 3; i++) {
    line(0, split, width, split);
    split += split;
  }

  textStyle(BOLD);
  text("Males V Females", width / 2 + width / 6, height / 2 - 100);
  text("Age-group", width / 4 - 30, height / 2 - 100);
  text("Time Period", width / 4 - 31, height * 2 / 3 + 37);
  text("Race", width / 2 + width / 4, height * 2 / 3 + 37);
  text("Boroughs", width / 2.1, height * 1 / 9);


  print("Gender", gender);
  print("Race", race);
  print("Age-group", age);
  print("Date/Time", dates);
  print("Borough", borough);


  dispBars(gender);
  dispPiChart(age);
  dispLineChart(dates);
  dispDotGraph(race);
  dispBarsV2(borough);



  //textFont(fontBold);
  fill(0);
  textSize(30);
  textStyle(BOLD);
  text("p5* js test#1", 320, 50);

  noLoop();
}


function dispBars(sex) {
  fill(56, 137, 243);
  rect(width / 2 + 60, height / 2 - 60, sex[0] / 3, 50);

  fill(255, 60, 170);
  rect(width / 2 + 60, height / 2 + 30, sex[1] / 3, 50);
}

//implement new colors
function dispPiChart(x) {
  //angles
  let total = 0;
  for (var j in x[1]) {
    total += j;
  }

  var propArr = [];
  for (var k = 0; k < x[1].length; k++) {
    propArr[k] = x[1][k] / 1000 * 360;
  }

  let lastAngle = 0;
  let count = 0;

  for (var i = 0; i < x[1].length; i++) {
    let piColor = map(i, 0, x[1].length, 0, 255);
    fill(random(255), piColor, random(255));

    rect(width / 9, height * 4 / 9 + count, 10, 10);
    arc(width / 4, height / 2, 150, 150, lastAngle, lastAngle + radians(propArr[i]));
    lastAngle += radians(propArr[i]);

    fill(0);
    text(x[0][i], 50, height * 4 / 9 + 10 + count);

    count += 18
  }
}


//Add a new scaling variable to handle adjustments
function dispLineChart(time) {
  //changing b/c of only 4 dates:
  time[0].reverse();
  time[1].reverse();

  fill(0);
  for (var i = 0; i < time.length + 2; i++) {
    text(time[0][i].substring(time[0][i].length - 2), i * 60 + 120, height - 25);
    line(i * 60 + 120, height - time[1][i] + 75, (i + 1) * 60 + 120, height - time[1][i + 1] + 75);
  }

  var counter = 0;
  var maxValue = max(time[1]);
  for (var j = 0; j < maxValue; j += 50) {
    text(j, 75, height - 50 - counter);
    counter += 28
  }

}

//does js handle outOfBounds errors from for loops?
function dispDotGraph(eth) {

  let rColor = []
  var count = 0;

  for (var j = 0; j < eth[0].length * 3 + 1; j++) {
    rColor[j] = random(255);

    if (j % 3 == 0 && j != 0) {
      fill(0);
      text("[" + j / 3 + "]", width / 2 + 20, height * 2 / 3 + 50 + count);

      fill(rColor[j - 3], rColor[j - 2], rColor[j - 1])
      rect(width / 2 + 40, height * 2 / 3 + 40 + count, 10, 10);
    }
    count += 9

  }

  for (var i = 0; i < eth[1].length; i++) {
    for (var k = 0; k < eth[1][i]; k++) {

      var temp = i * 3;
      fill(rColor[i], rColor[i + 1], rColor[i + 2])
      ellipse(500 + random(275), 650 + random(200), 5, 5);
    }
  }

}

function dispBarsV2(boro) {

  var xStart = 100;

  for (i = 0; i < boro[1].length; i++) {
    fill(120, 250, 90);
    rect(xStart, 260, 100, -boro[1][i] / 2);
    fill(0);

    text(boro[0][i], xStart, 280);
    xStart += 130;
  }

  var counter = 0;
  var maxValue = max(boro[1]);
  for (var j = 0; j < maxValue; j += 50) {
    text(j, 50, height / 3.5 - counter);
    counter += 23
  }

}
