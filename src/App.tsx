
import { BrowserRouter } from 'react-router-dom';
// import { Container } from 'react-bootstrap/lib/Tab';
// import CarCard from './components/CarCard';
import {Dashboard} from './components/Dashboard';
// import CarList from './components/CarList';


function App() {
    return(
        // <Container>
            <BrowserRouter>
            
                
                <Dashboard/>
                
            </BrowserRouter>
        // {/* </Container> */}
    )
    }


 

export default App
