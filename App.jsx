import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Resume from './resume'
import Projects from './projects'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={ <Projects />} />
                <Route path='/resume' element={ <Resume />} />
            </Routes>
        </Router>
    )
}

export default App