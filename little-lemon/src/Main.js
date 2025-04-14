import MarioandAdrianA from './images/Mario and Adrian A.jpg';
import greeksalad from './images/greek salad.jpg'
import bruchetta from './images/bruchetta.svg'
import lemondessert from './images/lemon dessert.jpg'
function Main(){
    return(
        <main>
         <section className="Greeting-card">
          <h1>Little Lemon</h1>
          <img src={MarioandAdrianA} className="Chefs" alt="Two chefs"></img>
            <h4>Chicago</h4>
          <p>Here at little lemon we provide a vast quality of dishes to anyone’s liking.
            Reserve a table at one of our locations in the Chicago Metropolitan area!
          </p>
         </section>


          <section className="Specials-menu">
                <h2>Specials</h2>
              <article className="Highlight1">
                <img src={greeksalad} alt="some salad"></img>
                <h3>Greek salad</h3> <h4>$12.99</h4>
                <p></p>
              </article>

                <article className="Highlight2">
                  <img src={bruchetta} alt="some bruchetta"></img>
                   <h3>Bruchetta</h3> <h4>$5.99</h4>
                   <p></p>
                </article>

                <article className="Highlight3">
                  <img src={lemondessert} alt="some lemon cake"></img>
                 <h3>Lemon Dessert</h3> <h4>$5.00</h4>
                 <p></p>
                </article>

          </section>

         <section className="Testimonials">
                  <h2>Testimonials</h2>
                  <div class="flex-container">
  <div class="flex-child magenta">
    Flex Column 1
  </div>

  <div class="flex-child green">
    Flex Column 2
  </div>

</div>
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