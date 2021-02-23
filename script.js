// set the user's budget
let money = 0;
function displayBudget() {
    if (money === 0) {
        money += Math.round(Number(document.getElementById('budget').value) * 10) / 10;
        console.log(money);
        document.getElementById('amount-available').value = money;
        return document.getElementById('amount-available').innerHTML = money;
    }
    money = 0;
    money += Math.round(Number(document.getElementById('budget').value) * 10) / 10;
    console.log(money);
    document.getElementById('amount-available').value = money;
    return document.getElementById('amount-available').innerHTML = money;
}

// change div background depending on budget/total comparison
function changeBackground() {
    if (Number(document.getElementById('amount-available').innerHTML) == 0 || Number(document.getElementById('amount-required').innerHTML) == 0) {
        document.getElementById('afford-check').style.backgroundColor = 'inherit';
    } else if (Number(document.getElementById('amount-available').innerHTML) >= Number(document.getElementById('amount-required').innerHTML)) {
        document.getElementById('afford-check').style.backgroundColor = '#8BFB83';
    } else if (Number(document.getElementById('amount-available').innerHTML) < Number(document.getElementById('amount-required').innerHTML)) {
        document.getElementById('afford-check').style.backgroundColor = '#F48080';
    } else {
        console.log('Check function');
    }
}

// add money needed to buy chosen gifts
let total = 0;
function addPrice(gift) {
    if (document.getElementById(gift).checked) {
        total += Math.round(Number(document.getElementById(gift).value) * 10) / 10;
        console.log(total);
        // display the amount required
        document.getElementById('amount-required').value = total;
        return document.getElementById('amount-required').innerHTML = total;
    }
    total -= Math.round(Number(document.getElementById(gift).value) * 10) / 10;
    console.log(total);
    // display the amount required
    document.getElementById('amount-required').value = total;
    return document.getElementById('amount-required').innerHTML = total;
}