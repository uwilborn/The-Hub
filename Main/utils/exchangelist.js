class View {
  constructor() {
   // The root element; id in index html
    this.app = this.getElement('#root')

    // The title of the app
    this.title = this.createElement('h1')
    this.title.textContent = 'Exchanges'

    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement('form')

    this.input = this.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Add exchange'
    this.input.name = 'exchange'

    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'

    // The visual representation of the exchange list
    this.todoList = this.createElement('ul', 'exchange-list')

    // Append the input and submit button to the form
    this.form.append(this.input, this.submitButton)

    // Append the title, form, and exchange list to the app
    this.app.append(this.title, this.form, this.exchangeList)
  }
  /*a getter and resetter of the input (new todo) value*/

get _exchangeText() {
  return this.input.value
}

_resetInput() {
  this.input.value = ''
}
}

  // Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }
}

/*displaying the exchange list, which is the part that will change every time a change is made to the list.*/

displayExchanges(exchanges) {
  / Delete all nodes
while (this.exchangeList.firstChild) {
  this.exchangeList.removeChild(this.exchangeList.firstChild)
}

// Show default message
if (exchanges.length === 0) {
  const p = this.createElement('p')
  p.textContent = 'Nothing pending! Add an exchange?'
  this.exchangeList.append(p)
} else {
  // ...
}

else {
  // Create exchange item nodes for each exchange in state
  exchanges.forEach(exchange => {
    const li = this.createElement('li')
    li.id = exchange.id

    // Each exchange item will have a checkbox you can toggle
    const checkbox = this.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = exchange.complete

    // The exchange item text will be in a contenteditable span
    const span = this.createElement('span')
    span.contentEditable = true
    span.classList.add('editable')

    // If the exchange is complete, it will have a strikethrough
    if (exchange.complete) {
      const strike = this.createElement('s')
      strike.textContent = exchange.text
      span.append(strike)
    } else {
      // Otherwise just display the text
      span.textContent = exchange.text
    }

    // The exchanges will also have a delete button
    const deleteButton = this.createElement('button', 'delete')
    deleteButton.textContent = 'Delete'
    li.append(checkbox, span, deleteButton)

    // Append nodes to the todo list
    this.exchangeList.append(li)
  })
}}
