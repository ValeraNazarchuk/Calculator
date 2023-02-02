const text = document.querySelector('.calc__screen-text')
const buttons = document.querySelectorAll('.calc__buttons')

const arrayValue = []

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (!e.target.classList.contains('calc__btn')) return

    const value = e.target.innerText

    const sign = ['.', '+', '-', '*', '/', '=']
    const firstArray = arrayValue[arrayValue.length - 1]

    if (value === 'AC') {
      arrayValue.splice(0, arrayValue.length)
      text.innerText = '0'
      return
    }

    if (value === '←') {
      if (arrayValue.length < 2) {
        arrayValue.pop()
        text.innerText = '0'
        return
      } else {
        arrayValue.pop()
        text.innerText = arrayValue.join('')
        return
      }
    }

    if (value === '=') {
      if (text.innerText.search(/[^0-9/+-.*]/im) != -1) return

      if (eval(text.innerText) === Infinity) {
        text.innerText = 'Error'
        return
      } else {
        text.innerText = eval(text.innerText)
        arrayValue.splice(0, arrayValue.length, ...text.innerText)
        return
      }
    }

    if (sign.includes(value) && sign.includes(firstArray)) {
      arrayValue.pop()
      text.innerText = arrayValue.join('').concat(value)
      arrayValue.push(value)
      return
    }

    if (text.innerText === '0') {
      if (value === '.') {
        arrayValue.push(value)
        text.innerText += value
        return
      } else if (!sign.includes(value)) {
        arrayValue.push(value)
        text.innerText = value
        return
      }
    } else {
      arrayValue.push(value)
      text.innerText += value
    }
  })
})
