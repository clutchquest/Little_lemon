import MarioandAdrianA from './images/Mario and Adrian A.jpg';

function Main(){
    return(
        <main>
         <img src={MarioandAdrianA} className="Chefs" alt="Two chefs"></img>
         <article className="Greeting-card">
          <h1>Little Lemon</h1>
            <h4>Chicago</h4>
          <p>Here at little lemon we provide a vast quality of dishes to anyone’s liking.</p>
         
         </article>
         


          <section className="Specials-menu">
                <h2>Specials</h2>
          </section>

         <section className="Testimonials">
                  <h2>Testimonials</h2>
         </section>

            <section className="About-section">
                    <h3>Little Lemon</h3>
                       <h4>Chicago</h4>
           </section>

        </main>
    )
}

export default function main(){
    return(
        <Main />
    )
};