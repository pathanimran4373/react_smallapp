import React, { Suspense } from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const About = React.lazy(() => { './About' });
const Contact = React.lazy(() => { './Contact' })
// in lazy loading componanant call from server when user want 
const LazyLoading = () => {
    return (
        <>
            <h1>LazyLoading</h1>
            <Suspense fallback={<h1>Loading........Please wait</h1>}>

                <BrowserRouter>

                    <Routes>
                        <Route path='/' element={<Home />}></Route>

                        <Route path='/about' element={<About />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>

                    </Routes>
                </BrowserRouter>

            </Suspense>

        </>

    )
}

export default LazyLoading