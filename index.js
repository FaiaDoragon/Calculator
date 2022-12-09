import {buttons, operatorButtons} from './structure/structure.js'

document.getElementById('buttons').innerHTML = (buttons.join(''))
document.getElementById('operators').innerHTML = (operatorButtons.join(''))

