
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import Error from '../components/Error'



export const Router = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<Error statusCode={404} />} />

        </Routes>
    )
}
