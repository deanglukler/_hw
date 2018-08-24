const Example = props => <div>Sup</div>

// this is the way
ReactDOM.render(<Example />, document.getElementById('main'))

// this works but meh
ReactDOM.render(Example(), document.getElementById('main'))

// won't work, must use a capital letter
ReactDOM.render(<example />, document.getElementById('main'))

// won't work, cannot pass a function
ReactDOM.render(Example, document.getElementById('main'))