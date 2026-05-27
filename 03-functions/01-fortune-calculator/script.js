/*
    ● Write a function named tellFortune that:
        ○ Takes 4 parameters: number of children, partner's name, geographic location, job title.
        ○ outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    ● Call that function 3 times with 3 different values for the arguments
*/

function tellFortune(numChildren, namePartner, geoLocation, jobTitle){
    return console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${namePartner} to with ${numChildren} kids.`)
}

tellFortune(2, 'Matteo', 'New Port', 'Chef');
tellFortune(3, 'Luca', 'Amsterdam', 'Barman');