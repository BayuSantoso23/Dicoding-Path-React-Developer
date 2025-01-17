// bila angka termasuk kelipatan 5, aplikasi akan menampilkan Fizz,
// bila angka termasuk kelipatan 7, aplikasi akan menampilkan Buzz, dan
// bila angka termasuk kelipatan 5 dan 7, aplikasi akan menampilkan FizzBuzz.

import React from 'react';
import {createRoot} from 'react-dom/client';


function CounterDisplay({ count }) {

    if (count === 0) {
        return <p>{count}</p>;
    }
    
    if (count % 5 === 0 && count % 7 === 0) {
        return <p>FizzBuzz</p>;
    }
    
    if (count % 5 === 0) {
        return <p>Fizz</p>;
    }
    
    if (count % 7 === 0) {
        return <p>Buzz</p>;
    }
    
    return <p>{count}</p>;
}

function IncreaseButton({increase}){
    return (
        <div>
            <button onClick={increase}>+increase</button>
        </div>
    )
}

function ResetButton({reset}){
    return (
        <div>
            <button onClick={reset}>reset</button>
        </div>
    )
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        // binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onIncreaseEventHandler(){
        this.setState((previousState) =>{
            return {
                count: previousState.count + 1
            };
        });
    }

    onResetEventHandler(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                {/* metode (seperti onIncreaseEventHandler) tidak secara otomatis terikat ke instansi class. 
                Agar bisa digunakan di dalam class itu sendiri, kita harus mengaksesnya melalui this. */}
                {/* Apa yang Terjadi Jika Tidak Menggunakan this?
                React tidak dapat menemukan variabel onIncreaseEventHandler di luar lingkup class.
                JavaScript tidak akan tahu bahwa fungsi ini adalah metode dari class CounterApp. */}
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);