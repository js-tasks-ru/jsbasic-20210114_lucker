/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let numbers = str.replace(/[^0-9\\.\\-]/g, ' ').replace(/\s+/g, ' ').trim().split(' ');//str.split(',')

    let numbers_obj = {
    max: Math.max.apply(null, numbers),
    min: Math.min.apply(null, numbers)
    };

    return numbers_obj;
}

