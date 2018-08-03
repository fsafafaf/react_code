import ReactDOM from './react-dom';
import React from './react'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    render () {
        return (
            <div>
                <h1>count: { this.state.num }</h1>
                <button onClick={() => this.onClick()}>add</button>
            </div>
        )
    }
    onClick (){
        console.log('ss')
        this.setState({
            num: this.state.num+1
        })
    }
}
ReactDOM.render(
    <div>
        Hello
        <span className="rt" onClick="console.log('zz');" style={{color: 'red'}}>World!</span>
        <Counter />
    </div>,
    document.getElementById('root'))