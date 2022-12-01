
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React,{useState} from 'react';

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import  NavDropdown  from 'react-bootstrap/NavDropdown';
// import { BrowserRouter, Route,Routes} from "react-router-dom";
// import { About } from './About';
// import { Home } from './Home';
// import { Services } from './Services';


import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App(){
    return(
        <div>
            <Navbar />
            <Sidebar />
           
            


        </div>

    
    );
}
export default App;

// import {useReducer} from 'react';


// const initialState = 0; 
// function reducer(state, action) {
//     switch (action) {
//         case 'increment':
//             return state + 1; 
//         case 'decrement':
//             return state - 1; 
//         default: 
//             return state; 
//     }
// }
// function Counter() {
//     const [state, dispatch] = useReducer(reducer, initialState); 
//     return (
//     <>
//         count: {state}
//         {/*use the dispatch function to manipulate the state*/}
//         <button onClick={() => dispatch('decrement')}> - </button>
//         <button onClick={() => dispatch('increment')}> + </button>
//     </>
//     ); 
// }
// export default Counter

