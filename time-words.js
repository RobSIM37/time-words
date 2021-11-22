const timeWords=str=>{

    if (str === '00:00') {
        return 'midnight';
    }

    if (str === '12:00') {
        return 'noon'
    }

    let amPm = 'am'
    let hourVal = parseInt(str.split(':')[0]);
    let minuteVal = parseInt(str.split(':')[1]);

    if (hourVal > 11) {
        amPm = 'pm'
    }

    hourVal %= 12;

    return `${timeArray[0][hourVal]} ${timeArray[1][minuteVal]} ${amPm}`
    
}

const buildTimeWords=()=>{
    
    const hourWords = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
    const minuteWords = ["o'colock", 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-nine', 'fourty', 'fourty-one', 'fourty-two', 'fourty-three', 'fourty-four', 'fourty-five', 'fourty-six', 'fourty-seven', 'fourty-eight', 'fourty-nine', 'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-nine'];

    return [hourWords, minuteWords];

}

const timeArray = buildTimeWords();
console.log('00:00 =>', timeWords('00:00'));
console.log('12:00 =>', timeWords('12:00'));
console.log('01:00 =>', timeWords('01:00'));
console.log('06:01 =>', timeWords('06:01'));
console.log('06:10 =>', timeWords('06:10'));
console.log('06:18 =>', timeWords('06:18'));
console.log('06:30 =>', timeWords('06:30'));
console.log('10:34 =>', timeWords('10:34'));
console.log('00:12 =>', timeWords('00:12'));
console.log('12:09 =>', timeWords('12:09'));
console.log('23:23 =>', timeWords('23:23'));