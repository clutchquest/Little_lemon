import logo from './images/icons/little_lemon_logo.png';
function Footer(){
    return(
        <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
            <div class='footer-content'>
                <div class='Nav-ft'>
                <h3>Navigation</h3>
                <li><a class='link'href='#Greeting-card'>Home</a></li>
                <li><a class='link'href='#About-section'>About</a></li>
                <li><a className='link'href="#Menu">Menu</a></li>
                <li><a className='link'href='#/Order online'>Order Online</a></li>
                 <li><a class='link'href='#/login'>Login</a></li>
            </div>
             
               <div class='Contact-ft'>
                  <h3>Contact Information</h3>
                   <p>info@littlelemon</p>
                   <p>+1 607-512-3756</p>
                   <p>1922 215th Pl Chicago Heights,illinos(IL),60411</p>
               </div>

            </div>
            <section class='copyright'>
                <div class='content'>
                <span class='txt'>Copyright © LittleLemon 2025</span>
              </div></section>
                
       </footer>
    )
}

export default function footer(){
    return(
        <Footer/>
    )
}