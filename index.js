const readline = require('readline-sync')
function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['who is','What is', 'The History of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Chose an Option: ')
         const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
    console.log(content)
}
start()