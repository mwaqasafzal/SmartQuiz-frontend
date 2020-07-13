import React,{useEffect,useState} from 'react'
import {Cover} from './UI/Cover'
import {Services} from './Services'
import {About} from './About'
import {HomeNav} from './UI/HomeNav'

export const Home=props=>{
const [isScrolled,setScrolled]=useState(false);


useEffect(()=>{
    document.addEventListener('scroll',()=>{
        if(window.scrollY>100)
            setScrolled(true);
        else
            setScrolled(false);
           
    })
},[]);


let classname="header-animated";
if(isScrolled)
    classname=null;

return (
    <React.Fragment>
         <header className={classname} style={{transition:'0.5s ease'}}>
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
