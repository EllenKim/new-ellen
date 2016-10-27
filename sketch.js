var newsFeed = {};
var analyzeFeed = [

];
var messageCount=0;



function preload() {
  newsFeed = loadJSON("newmessage1.json");  
}

function setup() {


  createCanvas(200, 200);
  noLoop();
  console.log(newsFeed);
  for (var i in newsFeed.posts.data) {
    if(newsFeed.posts.data[i].hasOwnProperty('message')){
      analyzeFeed.push(compendium.analyse(newsFeed.posts.data[i].message));

  // console.log(analyzeFeed);
  var sentiment= analyzeFeed[messageCount][0].profile.label;
  createElement('h1', newsFeed.posts.data[i].message + ' [' + sentiment + ']'); 
  messageCount++;
    } 
         
      
    else{
    // analyzeFeed.push(compendium.analyse(newsFeed.posts.data[i].message));
    // console.log(newsFeed.posts.data[i]);
  }
}}

function draw() {
  console.log(analyzeFeed[0][0].profile.label);
}