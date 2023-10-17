// import { useState } from 'react'
import { BrowserRouter, } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {CarCard} from './components/CarCard';
import {Dashboard} from './components/Dashboard';
import {CarList} from './components/CarList';


function App() {
return(
    <Container>
        <BrowserRouter>
            <CarCard/>
            <Dashboard/>
            <CarList/>
        
        
    
        </BrowserRouter>
    </Container>
)

}


 

export default App
