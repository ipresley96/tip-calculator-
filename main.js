const btn = document.querySelectorAll('.btn')
const tipButtons = document.querySelectorAll('[data-value]')
const tipPerPerson = document.querySelector(".tipPerPerson")
const totalBill = document.querySelector(".totalBill")
const totalAmount = document.querySelector('.totalTip')
const btnCustom = document.querySelector('.custom')
const reset = document.querySelector('.reset')

// Function need to be refactor 
// code works for the task, isn't the cleanest 

tipButtons.forEach(button => {
    button.addEventListener("click", (data, val, each) => {
      data = button.dataset.value
        each = Number(document.querySelector(".indivdual").value)
        val = Number( document.querySelector('.bill').value)
        let tip = (data / 100) * Number(val)
        let perPerson =  tip / each
        let indivdualTip = perPerson.toFixed(2)
        totalAmount.textContent = tip
        tipPerPerson.textContent = indivdualTip
    })
  })


btnCustom.addEventListener("keyup", function(val, cusTip){

    cusTip = Number(btnCustom.value)
    each = Number(document.querySelector(".indivdual").value)
    val = Number( document.querySelector('.bill').value)
    let tip = (cusTip/ 100) * Number(val)
    let perPerson =  tip / each
    let indivdualTip = perPerson.toFixed(2)
    totalAmount.textContent = tip
    tipPerPerson.textContent = indivdualTip
}) 




// Toggle active btn class


btn.forEach(button => {
    button.addEventListener('click', () => {
        // this adds the active class if there is none
        if(!button.classList.contains('active')){
            // btn as the arguement loops through the nodelist and removes the active class before it
            clearActives(btn)
            button.classList.toggle('active')
        }

    })
})


function clearActives(classlist) {
    classlist.forEach(btn => btn.classList.remove('active') );
  }



// Reset Button

reset.addEventListener('click', (val, each) => {
    document.querySelector('.bill').value = ''
    document.querySelector(".indivdual").value = 1
    totalAmount.textContent = "$0.00"
    tipPerPerson.textContent =  "$0.00"
})
