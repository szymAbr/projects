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

// change div background depending on budget/total comparison; some change for git
function changeBackground() {
    if (Number(document.getElementById('amount-available').innerHTML) == 0 || Number(document.getElementById('amount-required').innerHTML) == 0) {
        document.getElementById('afford-check').style.backgroundColor = 'inherit';
    } else if (Number(document.getElementById('amount-available').innerHTML) >= Number(document.getElementById('amount-required').innerHTML)) {
        document.getElementById('afford-check').style.backgroundColor = 'green';
    } else if (Number(document.getElementById('amount-available').innerHTML) < Number(document.getElementById('amount-required').innerHTML)) {
        document.getElementById('afford-check').style.backgroundColor = 'red';
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

/* function affordCheckBgColor() { // need to use Number()? BACKGROUND COLOR NOT CHANGING
    if (Number(document.getElementById('amount-available').innerHTML) >= Number(document.getElementById('amount-required').innerHTML)) {
        return document.getElementById('afford-check').style.backgroundColor = 'green';
    } else if (Number(document.getElementById('amount-available').innerHTML) < Number(document.getElementById('amount-required').innerHTML)) {
        return document.getElementById('afford-check').style.backgroundColor = 'red';
    } else if (Number(document.getElementById('amount-available').innerHTML) == 0 || Number(document.getElementById('amount-required').innerHTML) == 0) {
        return document.getElementById('afford-check').style.backgroundColor = 'inherit';
    } else {
        console.log('Check function');
    }
} */

/* function affordCheckBgColor() { // need to use Number()?
    if (Number(document.getElementById('amount-available').value) == 0 || Number(document.getElementById('amount-required').value) == 0) {
        return document.getElementById('afford-check').style.backgroundColor = 'inherit';
    } else if (Number(document.getElementById('amount-available').value) >= Number(document.getElementById('amount-required').value)) {
        return document.getElementById('afford-check').style.backgroundColor = 'green';
    } else if (Number(document.getElementById('amount-available').value) < Number(document.getElementById('amount-required').value)) {
        return document.getElementById('afford-check').style.backgroundColor = 'red';
    } else {
        console.log('Check function');
    }
} */
        
        
        /* switch(amount) {
            case document.getElementById('amount-available').value >= document.getElementById('amount-required').value:
                document.getElementById('afford-check').style.backgroundColor = 'green';
                break;
            case document.getElementById('amount-available').value < document.getElementById('amount-required').value:
                document.getElementById('afford-check').style.backgroundColor = 'red';
        }
    }
    document.getElementById('afford-check').style.backgroundColor = 'inherit';
} */

// compare amounts -> change background-color to green or red
/* function affordCheckBackgroundColor() {
    let money = Number(document.getElementById('amount-available').innerHTML);
    let total = Number(document.getElementById('amount-required').innerHTML);
    let bgcolor = document.getElementById('afford-check');
    if (money === 0 || total === 0) {
        bgcolor.style.backgroundColor = 'inherit';
        break;
    }
    switch(money) {
        case money >= total:
            bgcolor.style.backgroundColor = 'green';
            break;
        case money < total:
            bgcolor.style.backgroundColor = 'red';
            break;
    }
} */

// onChange action needed for the color change