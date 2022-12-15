import React, {Suspense} from "react";
import {Route, Routes} from 'react-router-dom';

const About = React.lazy(() => import('../About/About'))
const Works = React.lazy(() => import('../Works/Works'))

const AppRoutes = ({content}) => {
    return (
        <Routes>
            <Route
                path='/about'
                element={
                    <Suspense fallback={'loading...'}>
                        <About content={content}/>
                    </Suspense>
                }
            />
            <Route
                path='/works'
                element={
                    <Suspense fallback={'loading...'}>
                        <Works content={content}/>
                    </Suspense>
                }
            />
        </Routes>
    )
}

export default AppRoutes;