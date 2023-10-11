let firstName = 'Tremayne'
console.log ((firstName) ?        // if firstName is truthy
firstName :                       // console log firstName
'who are you'                     // otherwise ask who are you?'
)
                                  // using a template literal
console.log(`Hello ${
(firstName) ?
    `, ` + firstName :            //add their name
    ''                            // otherwise dont add anything
}`)
function showData(data){
    console.log ((data) ?         // if we have data
    data :                        //console log the data
    `Loading...`                  //otherwise console log Loading
    )}
let ourData = undefined;          //our page loads
showData(ourData)
ourData = ['apples', 'oranges']   // our page finishes loading our data
showData(ourData)