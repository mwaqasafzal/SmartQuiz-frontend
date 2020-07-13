import React from 'react'
import {Cover} from './UI/Cover'
import {Services} from './Services'
import {About} from './About'
import {HomeNav} from './UI/HomeNav'

export const Home=props=>{

return (
    <React.Fragment>
         <header>
            <HomeNav/>
        </header>
        <main>
            <Cover/>
            <About/>
            <Services/>
        </main>

    </React.Fragment>
       

    
);

}
