const string = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of is tea&ching'

function cleanAndFindMostRepeated(string) {
    let cleanString = string.split(/[!@#$%^&*();]+/).join('');
    let array = cleanString.split(/[.,\s]+/);

    let max = 0;
    let mostRepeated = '';

    for (let i = 0; i < array.length; i++) {
        let regexp = new RegExp("(\\b" + array[i] + "\\b)", "g");
        let currentWordRepeatation = cleanString.match(regexp).length;

        if (max < currentWordRepeatation) {
            max = currentWordRepeatation;
            mostRepeated = array[i];
        }
    }

    console.log(`String cleaned: ${cleanString}\n`);
    console.log(`Most repeated word is: '${mostRepeated}' with ${max} accurance`);
}

