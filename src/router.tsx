import { Routes, Route } from 'react-router';
import CaseData from './pages/caseData';
import CasesPage from './pages/cases';
import History from './pages/history';
import Vaccines from './pages/vaccines';


export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<CasesPage/>} />
            <Route path="/cases/:name" element={<CaseData/>} /> 
            <Route path="/history" element={<History/>} />
            <Route path="/vaccines" element={<Vaccines/>} />
        </Routes>
    )
}