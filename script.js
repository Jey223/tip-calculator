"use strict"
const tipsButtons = document.querySelectorAll('.btn');
const customElement = document.getElementById('custom-value');
const tipPerPerson = document.getElementById('tip-person');
const totalPerPerson = document.getElementById('total-person');

const resetButton = document.getElementById('reset')

function errorMessage() {
    
}

const tipCalculator = (event) => {
    let totalBillAmount = document.getElementById('bill').value;
    let peopleNumber = document.getElementById('people').value;


    let validDecimalNumber = new RegExp(/^[1-9]\d+\.?\d*$/);
    let validWholeNumber = new RegExp(/^[1-9]\d*$/);
    let validateNumber = validDecimalNumber.test(totalBillAmount);
    let validateNumber2 = validWholeNumber.test(peopleNumber);
    let validateNumber3 = validWholeNumber.test(customElement.value);


    if ((!validateNumber || !validateNumber2) && !validateNumber3) {
        let element = document.querySelectorAll(".error-message");
        
        for (let i = 0; i < element.length; i++){
            const existingSpantag = element[i].querySelector('span');
            // const inputBorderColor = document.querySelectorAll('input');


            let spanError = document.createElement("span");
            let node = document.createTextNode("Can't be zero");
            spanError.appendChild(node);

            if (!existingSpantag) {
                element[i].appendChild(spanError)
                spanError.style.color = 'red';
                spanError.style.fontSize = '18px';
                // inputBorderColor.forEach((borderColor) => {
                //     borderColor.style.border = 'red';
                // })
                // inputBorderColor.style.border = 'red';
                // inputBorderColor.style.borderWidth = '1px';
                
            }
            // console.log(element[i]);
            // console.log(element[i].appendChild(para));
        }
    } else {
            if (event.type === 'click' || event.key === 'Enter') {
                let tipValue = event.target.value;

                event.target.style.backgroundColor = 'hsl(172, 67%, 65%)';
                event.target.style.color = 'hsl(183, 100%, 15%)'

                //convert to integer
                tipValue = +tipValue / 100; 
                totalBillAmount = +totalBillAmount;
                peopleNumber = +peopleNumber;

                let tipAmountPerPerson = (totalBillAmount * tipValue)/ peopleNumber;
                let totalAmountPerPerson = (totalBillAmount / peopleNumber) + tipAmountPerPerson;

                tipAmountPerPerson = (Math.round(tipAmountPerPerson * 100) / 100).toFixed(2);
                totalAmountPerPerson = (Math.round(totalAmountPerPerson * 100) / 100).toFixed(2);

                tipPerPerson.innerHTML = tipAmountPerPerson.toString();
                totalPerPerson.innerHTML = totalAmountPerPerson.toString();                
            }
    }    
}



// each buttons
tipsButtons.forEach((tipbtn) => {
    tipbtn.addEventListener('click', tipCalculator);
});
// custom input
customElement.addEventListener('keydown', tipCalculator);

// reset
resetButton.addEventListener('click', () => {
    tipPerPerson.innerHTML = "$0.00";
    totalPerPerson.innerHTML = "$0.00"
})