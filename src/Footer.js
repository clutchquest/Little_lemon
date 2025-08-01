import logo from './Logo.svg';
function Footer(){
    return(
        <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
               <h3>Navigation</h3>
               <h3>Contact Information</h3>
       </footer>
    )
}

export default function footer(){
    return(
        <Footer/>
    )
}