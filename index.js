const hight = 174;
const weight = 75;

function heightInMeter(heightInM){
    const heightInMeters = heightInM / 100;
    console.log(heightInMeters);
    return heightInMeters
}

function getBmi(weight, heightInM){
    const bmi = weight / (heightInM * heightInM);
    console.log(bmi)
    return bmi;
}

function getReport(bmi){
    if(bmi < 18.5){
        console.log("UnderWeight");
    }
    else if(bmi < 24.9){
        console.log("Normalrange");
    }
    else if(bmi < 29.9){
        console.log("Overweight");
    }
    else{
        console.log("Obese");
    }
}


const heightInM = heightInMeter(hight);
const bmi = getBmi(weight, heightInM)
getReport(bmi);