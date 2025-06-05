import logo from './Logo.svg';
function Footer(){
    return(
        <footer className="App-footer">
            <h4>this is the footer</h4>
            <img src={logo} className="App-logo" alt="logo" />
       </footer>
    )
}

export default function footer(){
    return(
        <Footer/>
    )
}