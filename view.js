const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')


function getTitle(){
        return chalk.whiteBright(
            figlet.textSync(
                'Unit Converter App',
                {
                    horizontalLayout: "full",
                    font: 'big'
                }

            )
        )
}

function getTable(model){
    const {leftValue,leftUnit,rightValue,rightUnit} = model
    return [{
        'leftValue': leftValue, 'leftUnit': leftUnit , 'rightValue': rightValue, 'rightUnit': rightUnit
    }]
}

function listForm(update){
    const message = "Left temperature is source?"
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message
    })
}

function inputForm(model){
    //const{input} = update
    return inquirer.prompt([
        {
            name: 'answer',
            type: 'input',
            message: 'Left temperature is source?',
            validate: function(value){
                if((value) != "Yes" && (value)!= "No"){
                    return 'No puede ser esa respuesta'
                }
                else {
                    return true
                }
            }

        },
        {
            name: 'leftValueNew',
            type: 'input',
            message: 'Temperature value to convert?',
            validate: function(value){
                    return true  
            }}
    ])
}

function listForm(model){
    const {input} = model
    const message = 'From?'
    const choices = ['Celsius', 'Fahrenheit','Kelvin']
    return inquirer.prompt([{
        name: 'leftUnitNew',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    },
    {
        name: 'rightUnitNew',
        type: 'list',
        message: "To?",
        default: input,
        choices: choices
    }
    
])
}


function view(update){
    return{
        title: getTitle(),
        table: getTable(update)
    }
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}


module.exports = {
    view, 
    inputForm,
    listForm
}