
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import CarCard from './components/CarCard';
import Dashboard from './components/Dashboard';
// import CarList from './components/CarList';
import LoginForm from './components/forms/LoginForm';
import Heading from './components/Heading';







function App() {
    return(
        <Container>
            <BrowserRouter>
            <Heading/>
                <Routes>
                {/* <Route path='/cars' element={<CarList />}/> */}
                <Route path="/" element={<Dashboard/>}/>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='*' element={< Navigate to='/' />}/>
                </Routes>

            </BrowserRouter>
        </Container>
    )
    }


 

export default App
