const input = document.querySelector('.calc__screen-text')

const sings = ['/', '*', '-', '+', '.']

// збережена часть виразу для повернення в степінь
let power = ''

// вставити/додати символ
function insert(num) {
  if (input.textContent === 'Error') input.textContent = '0'
  if (input.textContent === '0') {
    if(sings.includes(num)) {
      input.textContent += num
    } else {
      input.textContent = num
    }
  } else {
    const last = input.textContent.toString().slice(-1)
    if (sings.includes(num) && sings.includes(last)) {
      input.textContent = input.textContent.slice(0, input.textContent.length - 1).concat(num)
      return
    }
    input.textContent += num
  }
}

// почистити все поле
function clean() {
  input.textContent = '0'
  power = ''
}

// удрати останній символ
function back() {
  let exp = input.textContent
  input.textContent = exp.slice(0, exp.length -1)
  if (!input.textContent) {
    input.textContent = '0'
  }
}

// порахувати все
function equal() {
  if (input.textContent.includes('^')) {
    let tmp = input.textContent.split('^')
    let num = eval(power)
    let pow = +tmp[1]
    input.textContent = Math.pow(num, pow) === Infinity ? 'Error' : Math.pow(num, pow)
    power = ''
    return
  }
  if (input.textContent) {
    input.textContent = eval(input.textContent) === Infinity ? 'Error' : eval(input.textContent)
  }
}

// вирахування процентів
function percent() {
  input.textContent = eval(input.textContent)/100
}

// для додавання констант
function constant(event) {
  if(input.textContent == 0) {
    input.textContent = ''
  }
  if (event === 'pi'){
    input.textContent += Math.PI.toFixed(8)
  }
  if (event === 'e') {
    input.textContent += Math.E.toFixed(8)
  }
}

// корінь квадратний
function operation(event) {
  if (input.textContent === '0') return
  if (event === 'sqrt') {
    input.textContent = Math.sqrt(eval(input.textContent))
  }
  if (event === 'sqr') {
    input.textContent = Math.pow(eval(input.textContent), 2)
  }
  if (event === '^-1') {
    input.textContent = Math.pow(eval(input.textContent), -1).toFixed(8)
  }
  if (event === '^') {
    power = input.textContent
    input.textContent += '^'
  }
}

// факторіал числа
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

function fact() {
  if (input.textContent === '0') return
  input.textContent = factorial(+eval(input.textContent))
}

// логоріфми
function log(event) {
  if (input.textContent === '0') return
  if (event === 'lg') {
    input.textContent = Math.log10(eval(input.textContent)).toFixed(8)
  }
  if (event === 'ln') {
    input.textContent = Math.log(eval(input.textContent)).toFixed(8)
  }
}