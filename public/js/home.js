const dropdowns = []
const droplinks = []
document.querySelectorAll('.dropdown').forEach(i => dropdowns.push(i))
document.querySelectorAll('.droplink').forEach(i => droplinks.push(i))
let current = -67
function toggleDropdown(i) {
    if (current === i) {
        dropdowns[i].classList.toggle('hidden')
        return 
    }
    if (current > -1) dropdowns[current].classList.add('hidden')
    current = i
    dropdowns[i].classList.remove('hidden')
    
}
for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.toggle('hidden')
    droplinks[i].addEventListener('mouseover', () => toggleDropdown(i))
}