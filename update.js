function solver(rightUnitNew,leftValueNew,leftUnitNew){
    
    if ((rightUnitNew == "Fahrenheit") && leftUnitNew == "Celsius"){
        return (Number((leftValueNew * (9/5)))+ 32).toFixed(2) + "°F"
    }
    else if ((rightUnitNew == "Kelvin") && leftUnitNew == "Celsius"){
        return (Number(leftValueNew)+ 273.15).toFixed(2)+ "K"
    }
    else if ((rightUnitNew == "Kelvin") && leftUnitNew == "Fahrenheit"){
        return ((((Number(leftValueNew)- 32)*5/9)+ 273.15).toFixed(2) + "K")
    }
    else if ((rightUnitNew == "Celsius") && leftUnitNew == "Fahrenheit"){
        return ((((Number(leftValueNew)- 32)*5/9)).toFixed(2)+ "°C")
    }
    else if ((rightUnitNew == "Celsius") && leftUnitNew == "Kelvin"){
        return ((Number(leftValueNew)- 273.15).toFixed(2)+ "°C")
    }
    else if ((rightUnitNew == "Fahrenheit") && leftUnitNew == "Kelvin"){
        return (((Number(leftValueNew)-273.15)* 9/5 )+ 32).toFixed(2) + "°F"
    }
    else{
        return 0
    } 
}

function update(rightUnitNew,leftValueNew,leftUnitNew,answer,model){
    const total = solver(rightUnitNew,leftValueNew,leftUnitNew)
    if (answer == "No"){
    return{
        ...model,
            leftValue: (total),
            leftUnit: rightUnitNew,
            rightUnit: leftUnitNew,
            rightValue: leftValueNew
        }   
    }
    else if (answer == "Yes") {
        return{
            ...model,
                leftValue: leftValueNew,
                leftUnit: leftUnitNew,
                rightUnit: rightUnitNew,
                rightValue: total
            }          
    }
    }
module.exports = {
    update
}