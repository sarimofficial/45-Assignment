let Guest_list :string[] = ["Sarim", "Usman", "Ayesha", "Areeba" ];

for(let i=0; i<Guest_list.length; i++){

    console.log ('Dear Mr. ' + Guest_list[i] + ',/n/nit is our pleasure to invite you in our party./n/nThank You!/n/n')
}







let adsent_Guest :string = 'Usman' ;

let new_Guest :string = 'Kamran tessori' ;

Guest_list[0] =new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log ('Dear Mr. ' + Guest_list[i] + ',/n/nit is our pleasure to invite you in our party./n/nThank You!/n/n')
}

console.log(`Mr.${adsent_Guest} is not coming.`)


