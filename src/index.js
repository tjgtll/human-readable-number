module.exports = function toReadable (number) {
    if (number === 0) 
    {
        return 'zero';
    }
    let numberWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    let hundredsCount = Math.trunc(number / 100);
    let tensCount = Math.trunc(number % 100 / 10);
    let onesCount = number % 10;
  
    if (hundredsCount >= 1) 
    {
        result = result + numberWords[hundredsCount] + ' hundred';
        if (number % 100 !== 0) 
        {
            result += ' ';
        }
    }
  
    if (tensCount > 1) 
    {
        result = result + tens[tensCount] + (onesCount !== 0 ? ' ' : '') + numberWords[onesCount];
  
    } 
    else 
    {
        result = result + numberWords[number % 100];
  
    }
    return result;
}
