// Data di dalam props berasal dari luar komponen dan diharapkan tidak berubah, 
// sedangkan data di dalam state perlu diinisialisasi di dalam komponen itu sendiri dan datanya boleh berubah.

import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render(){
        return(
            <div>
                {/* Perubahan data yang disimpan di dalam this.state akan memicu
                pemanggilan fungsi render() pada class component */}
                <p>Count: {this.state.count}</p>
            </div>
        );
    }

    // this.setState() atau setState() merupakan fungsi yang digunakan khusus untuk mengubah nilai state di dalam class component. 
    // Fungsi inilah yang sebenarnya memicu pemanggilan fungsi render() ketika data di dalam state berubah.

    // parameter berupa objek
    // reset the count value
    this.setState({
        count: 0
    });

    
    // parameter berupa fungsi
    // increase the count value
    this.setState((previousState) => {
        return {
        count: previousState.count + 1
        }
    });

}