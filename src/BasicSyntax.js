export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    let strArr = str.split('');
    for (let i = 0; i < strArr.length; ++i) {
        switch (strArr[i]) {
            case 'M':
                result += 1000;
                break;
            case 'D':
                result += 500;
                break;
            case 'C':
                if (strArr[i + 1] == 'D') {
                    result += 400;
                    i++;
                    break;
                }
                if (strArr[i + 1] == 'M') {
                    result += 900;
                    i++;
                    break;
                }
                result += 100;
                break;
            case 'L':
                result += 50;
                break;
            case 'X':
                if (strArr[i + 1] == 'L') {
                    result += 40;
                    i++;
                    break;
                }
                if (strArr[i + 1] == 'C') {
                    result += 90;
                    i++;
                    break;
                }
                result += 10;
                break;
            case 'V':
                result += 5;
                break;
            case 'I':
                if (strArr[i + 1] == 'V') {
                    result += 4;
                    i++;
                    break;
                }
                if (strArr[i + 1] == 'X') {
                    result += 9;
                    i++;
                    break;
                }
                result += 1;
                break;
        }
    }

    return result;
}
