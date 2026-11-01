const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const oblast = document.getElementById('oblast');
const male = document.getElementById('male');
const female = document.getElementById('female');
const birthOrder = document.getElementById('birthOrder');
const result = document.getElementById('result');

function loopThroughNumbers(min, max, even = undefined){
    let numbers = [];
    for(let i = min; i <= max; i++){
        if(even === undefined){
            numbers.push(i.toString());
        }
        else if(even){
            if(i % 2 === 0) {
                if(i < 10) numbers.push('0' + i);
                else numbers.push(i.toString());
            }
        }
        else if(!even){
            if(i % 2 !== 0) {
                if(i < 10) numbers.push('0' + i);
                else numbers.push(i.toString());
            }
        }
    }
    return numbers;
}

function calculateLastDigit(egn) {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(egn[i]) * weights[i];
    }
    let lastDigit = sum % 11;
    if (lastDigit === 10) {
        lastDigit = 0;
    }
    return lastDigit;
}

function calculateEGN() {
    let egn = '';
    let dayValue = parseInt(day.value);
    let monthValue = parseInt(month.value);
    let yearValue = parseInt(year.value);
    let oblastValue = oblast.value.toLowerCase();
    let isMale = male.checked ? true : false;
    let birthOrderValue = parseInt(birthOrder.value);

    if(yearValue < 1900 ) {
        monthValue += 20;
    }
    else if(yearValue > 1999) {
        monthValue += 40;
    }

    if(yearValue >= 1800)
        egn += yearValue.toString().slice(-2);
    else egn += 'xx';

    if(monthValue < 10) egn += '0' + monthValue;
    else if(monthValue != 0) egn += monthValue;
    else egn += 'xx';

    if(dayValue < 10) egn += '0' + dayValue;
    else if(dayValue != 0) egn += dayValue;
    else egn += 'xx';
    
    let n789 = [];
    switch(oblastValue) {
        case 'благоевград':
            n789 = loopThroughNumbers(0, 43, isMale);
            break;
        case 'бургас':
            n789 = loopThroughNumbers(44, 93, isMale);
            break;
        case 'варна':
            n789 = loopThroughNumbers(94, 139, isMale);
            break;
        case 'велико търново':
            n789 = loopThroughNumbers(140, 169, isMale);
            break;
        case 'видин':
            n789 = loopThroughNumbers(170, 183, isMale);
            break;
        case 'враца':
            n789 = loopThroughNumbers(184, 217, isMale);
            break;
        case 'габрово':
            n789 = loopThroughNumbers(218, 233, isMale);
            break;
        case 'кърджали':
            n789 = loopThroughNumbers(234, 281, isMale);
            break;
        case 'кюстендил':
            n789 = loopThroughNumbers(282, 301, isMale);
            break;
        case 'lovetch':
            n789 = loopThroughNumbers(302, 319, isMale);
            break;
        case 'монтана':
            n789 = loopThroughNumbers(320, 341, isMale);
            break;
        case 'пазарджик':
            n789 = loopThroughNumbers(342, 377, isMale);
            break;
        case 'перник':
            n789 = loopThroughNumbers(378, 395, isMale);
            break;
        case 'плевен':
            n789 = loopThroughNumbers(396, 435, isMale);
            break;
        case 'плoвдив':
            n789 = loopThroughNumbers(436, 501, isMale);
            break;
        case 'разград':
            n789 = loopThroughNumbers(502, 527, isMale);
            break;
        case 'русе':
            n789 = loopThroughNumbers(528, 555, isMale);
            break;
        case 'силистра':
            n789 = loopThroughNumbers(556, 575, isMale);
            break;
        case 'сливен':
            n789 = loopThroughNumbers(576, 601, isMale);
            break;
        case 'смолян':
            n789 = loopThroughNumbers(602, 623, isMale);
            break;
        case 'софия - град':
            n789 = loopThroughNumbers(624, 721, isMale);
            break;
        case 'софия - област':
            n789 = loopThroughNumbers(722, 751, isMale);
            break;
        case 'стара загора':
            n789 = loopThroughNumbers(752, 789, isMale);
            break;
        case 'добрич':
            n789 = loopThroughNumbers(790, 821, isMale);
            break;
        case 'търговище':
            n789 = loopThroughNumbers(822, 843, isMale);
            break;
        case 'хасково':
            n789 = loopThroughNumbers(844, 871, isMale);
            break;
        case 'шумен':
            n789 = loopThroughNumbers(872, 903, isMale);
            break;
        case 'ямбол':
            n789 = loopThroughNumbers(904, 925, isMale);
            break;
        case '':
            n789 = loopThroughNumbers(926, 999, isMale);
            break;
        default:
            n789.push('xxx');
    }
    let fullEgnList = [];
    n789.forEach(element => {
        fullEgnList.push(egn + element + calculateLastDigit(egn + element));
    });
    if(birthOrder.value !== '' && birthOrder.value >= 1 && birthOrder.value <= fullEgnList.length-1) {
        result.innerHTML = fullEgnList[birthOrder.value - 1];
    } else {
        result.innerHTML = fullEgnList.join('<br>');
    }
}