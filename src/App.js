import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReplayPage from './components/ReplayPage';
import TermsPage from './components/TermsPage';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TermsPage/>}/>
                <Route path="/replay" element={<ReplayPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;