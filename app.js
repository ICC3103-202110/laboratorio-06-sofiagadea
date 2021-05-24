const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        const {answer,leftValueNew} = await inputForm(state)
        const {leftUnitNew,rightUnitNew} = await listForm(model)
        const updatedModel = update(rightUnitNew,leftValueNew,leftUnitNew,answer, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
    
}

module.exports = {
    app
}