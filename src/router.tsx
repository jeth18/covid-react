import { Route, Routes } from 'react-router'
import CaseData from './pages/caseData'
import CasesPage from './pages/cases'
import History from './pages/history'
import VaccineData from './pages/vaccineData/vaccianeData'
import Vaccines from './pages/vaccines'

export default function Router() {
    return(
        <Routes>
            <Route path='/' element={<CasesPage/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/vaccines' element={<Vaccines/>} />
            <Route path='/cases/:name' element={<CaseData/>} />
            <Route path='/vaccines/:name' element={<VaccineData/>} />
        </Routes>
    )
}
