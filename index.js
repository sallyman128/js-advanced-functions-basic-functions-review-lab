// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
  return function(booya = "special") {
    return `You are ${flair + booya + flair}!`;
  };
};

function actionApplyer(startingInt, arrFunctions) {
  if (arrFunctions === []) {
    return startingInt;
  } else {
    for (let i=0; i < arrFunctions.length; i++) {
     startingInt = arrFunctions[i](startingInt);
    };
    return startingInt;
  };
};

const Calculator = {
  add: function add() {
    return 1+3;
  },
  subtract: function subtract() {
    return 1-3;
  },
  multiply: function multiply() {
    return 1*3;
  },
  divide: function divide() {
    return 10/5;
  }
}