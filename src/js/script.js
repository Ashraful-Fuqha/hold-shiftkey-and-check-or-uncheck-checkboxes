const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

window.addEventListener('load', e => {
    e.preventDefault()
    checkboxes.forEach(checkbox => checkbox.checked = false)
})

let firstChecked;

function handleChecks(e){
    let inBetween = false

    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === firstChecked){
                inBetween = !inBetween
                console.log('Start')
            }

            if(inBetween)
                checkbox.checked = true
        })
    }

    firstChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleChecks))
checkboxes.forEach(checkbox => checkbox.addEventListener('click', e => {
    if(checkbox.checked === false)
        checkboxes.forEach(checkbox => checkbox.checked = false)
}))