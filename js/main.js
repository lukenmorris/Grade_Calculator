function calculateGrade(){
    var hwScores= document.getElementById("hwScores").value;
    var hwWeight= document.getElementById("hwWeight").value;

    var pScores= document.getElementById("pScores").value;
    var pWeight= document.getElementById("pWeight").value;

    var qScores= document.getElementById("qScores").value;
    var qWeight= document.getElementById("qWeight").value;

    var testScores= document.getElementById("testScores").value;
    var testWeight= document.getElementById("testWeight").value;

    var projScores= document.getElementById("projScores").value;
    var projWeight= document.getElementById("projWeight").value;


    var hwAvg = average(seperateNumber(hwScores));
    var pAvg = average(seperateNumber(pScores));
    var qAvg = average(seperateNumber(qScores));
    var testAvg = average(seperateNumber(testScores));
    var projAvg = average(seperateNumber(projScores));

    parseInt(hwWeight);

    parseInt(pWeight);

    parseInt(qWeight);

    parseInt(testWeight);

    parseInt(projWeight);

    var hwTotal= (hwAvg*(hwWeight/100));
    var pTotal= (pAvg*(pWeight/100));
    var qTotal=(qAvg*(qWeight/100));
    var testTotal= (testAvg*(testWeight/100));
    var projTotal= (projAvg*(projWeight/100));

    var currentGrade=(hwTotal+pTotal+qTotal+testTotal+projTotal);

    document.getElementById("currentGrade").innerHTML= currentGrade;

    return currentGrade;
}



function gradeNeeded(){
    var gradeDesired = [];

    var finalWeight = [];

    var finalGrade = calculateGrade();

    gradeDesired.push(document.getElementById("gradeDesired").value);
    finalWeight.push(document.getElementById("finalWeight").value);

    gradeDesired = parseInt(gradeDesired);
    finalWeight = parseInt(finalWeight);

    var currentPoints = (finalGrade / 100) * ( 1 - (finalWeight / 100));

    var pointsNeeded = (gradeDesired / 100 ) - currentPoints;
    var gradeNeeded = (pointsNeeded / (finalWeight/100)) * 100;

    gradeNeeded = gradeNeeded*100;
    gradeNeeded = Math.round(gradeNeeded);
    gradeNeeded = gradeNeeded/100;

    document.getElementById("youNeed").innerHTML= "You will need to score a "+ gradeNeeded + "%" + "to get a " + gradeDesired + "% overall";

}



function seperateNumber(str){

    var arr= str.split(",");
    for(var i=0; i< arr.length; i++){
        arr[i]= parseInt(arr[i]);
    }
    return arr;



}

function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i ++ ){
        sum = sum + arr[i];
    }
    return sum/(arr.length);
}

function resetfields(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("finalGradeNeeded").innerHTML = "";
    document.getElementById("gradeWanted").value = "";
    document.getElementById("finalWeight").value = "";
    document.getElementById(1).style.backgroundColor = "#cfdefb";
    document.getElementById(2).style.backgroundColor = "#cfdefb";
    document.getElementById(3).style.backgroundColor = "#cfdefb";
}

function runCheck(value) {
    console.log(value);

}