import { greeksalad, bruchetta, lemondessert} from './images/index.js'
import {Apt1, Apt2, Apt3,MainCourse1,MainCourse2,MainCourse3 } from './images/Menuitems/index.js'
import {Jameslee,Carla,Amanda,Diego,Star} from './images/Testimonials/index.js'
import Pairoflemon from './images/icons/lemonpic.png'
import {Slide1, Slide2, Slide3} from './images/collage/index.js'
import WineBar from './images/Backgrounds/wine.jpg'
import Sweet from './images/Backgrounds/lemonTorta.jpg'
function Main(){
    return(
        <main>
         <section className="Greeting-card">
          <div className='greeting-img'>
          <img src={Pairoflemon} className="Lemon" alt="Two lemons"></img>
          </div>
         <div className='Greeting-content'>
              <h1>Little Lemon</h1>
            <h4>Chicago</h4>
          <p>Here at little lemon we provide a vast quality of italian dishes to anyone’s liking.
            Reserve a table at one of our locations in the Chicago Metropolitan area. Dine in, and try the many delicacies we have to offer. When life gives you lemon's, you make Lemonade!
          </p>
         </div>
         </section>


          <section className="Specials-menu">
            <div class='Title'>
                   <h1>Under the Limelight!</h1>
                 <h2>Check out our daily Specials!</h2>
            </div>
              <article className="Highlight1">
                <div className='img-left'>
                  <img class="Salad" src={greeksalad} alt="some salad"></img>
                </div>
                <div className='content'>
                <h3>Greek salad</h3> <h4>$12.99</h4>
                <p>A salad generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil. Common additions include green bell pepper or caper berries.</p>
                </div>
              </article>

                <article className="Highlight2">
                  <div className='img-right'>
                   <img src={bruchetta} alt="some bruchetta"></img>
                  </div>
                  <div className='content-reverse'>
                    <h3>Bruchetta</h3> <h4>$5.99</h4>
                   <p>An Italian appetizer consisting of grilled bread topped with garlic, olive oil, and salt. Most commonly it is served with toppings of tomatoes, vegetables, beans, cured meat or cheese.</p>
                  </div>
                </article>

                <article className="Highlight3">
                   <div className='img-left'>
                    <img className='img-dessert' src={lemondessert} alt="some lemon cake"></img>
                   </div>
                   <div className='content'>
                    <h3>Lemon Dessert</h3> <h4>$5.00</h4>
                 <p>A simple and elegant cake with a moist, tender crumb and a pronounced lemon flavor.</p>
                   </div>
                </article>
          </section>
           <h1 class='Buffer'>Our Menu</h1>
        <section id="Menu" className='Menu'>
            
           <div class="Appetizers">
               <h1>Appetizers</h1>

                <div class='item'>
                  <img class='Menu-img' src={Apt1} alt=""></img>
                    <h2>Greek Salad</h2> <h2>$12</h2>
                    <p>Crisp romaine hearts, tomatoes, cucumber, red onion, Kalamata olives, feta, lemon-oregano vinaigrette.</p>
                </div>
                
                <div class='item'>
                  <img class='Menu-img' src={Apt2} alt=""></img>
                     <h2>Bruschetta Classica</h2> <h2>$13</h2>
                     <p>Grilled ciabatta, heirloom tomatoes, garlic, extra virgin olive oil, fresh basil.</p>
                </div>
                 
                <div class='item'>
                  <img class='Menu-img' src={Apt3} alt=""></img>
                    <h2>Fritto Misto</h2> <h2>$17</h2>
                    <p>Lightly fried calamari, shrimp, seasonal vegetables, lemon aioli.</p>
                </div>
           </div>
            <div class="Main-Courses">
              <h1>Main Courses</h1>
                   <div class='item'>
                    <img class='Menu-img' src={MainCourse1} alt=""></img>
                       <h2>Tagliatelle al Limone e Gamberi</h2> <h2>$29</h2>
                       <p>House made tagliatelle, sautéed shrimp, lemon zest cream, fresh spinach, Parmigiano.</p>
                   </div>
                  
                   <div class='item'>
                     <img class='Menu-img' src={MainCourse2} alt=""></img>
                       <h2>Pollo alla Milanese</h2> <h2>$28</h2>
                       <p>Crispy panko-breaded chicken, arugula, cherry tomatoes, shaved Parmesan, balsamic drizzle. </p>
                   </div>
                   
                   <div class='item'>
                     <img class='Menu-img' src={MainCourse3} alt=""></img>
                       <h2>Short Rib Ravioli</h2> <h2>$32</h2>
                       <p>Braised short rib-filled ravioli, red wine reduction, wild mushrooms, Grana Padano.</p>
                   </div>
            </div>

         </section>

            <div className='Menu-bottom'>
                     <article className='Wine'>
                <h1 className='wine-title'>Wine Pairings</h1>

                <img class='wine-img' src={WineBar} alt=''></img>
                <div className='wine-content'>

                </div>
             </article>
              <article className='Dessert'>
                <h1 className='dessert-title'>Dessert</h1>


                  <img class='dessert-img'src={Sweet} alt=''></img>

                 <div className='dessert-content'>

                 </div>
              </article>
            </div>
 

         <section className="Testimonials">
                  <h1>Testimonials</h1>
        <div class="flex-container">
           <div class="flex-child">
              
            <img class='pic' src={Jameslee} alt=""></img>
             <img class='review' src={Star} alt=''></img>
             <img class='review' src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
              <h2>James Lee</h2>
              <p>Dining at Little Lemon was a delightful experience from start to finish. The team is warm, attentive, and genuine, making us feel right at home. Every dish was a delicious mix of comforting tradition and imaginative flavors. It’s the perfect place to relax, enjoy great food, and soak in a welcoming atmosphere.</p>
           </div>
            <div class="flex-child">
            <img class='pic' src={Amanda} alt=""></img>
             <img class='review' src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
                <h2>Amanda Gomez</h2>
                <p>From the cozy yet stylish decor to the inventive menu, Little Lemon stands out. We loved the classic Italian flavors presented with modern flair, and the Torta al Limone was a highlight. The staff were attentive without being intrusive, always ready with helpful recommendations. I can’t wait to return and bring friends to share the experience.</p>
             </div>
             <div class="flex-child">
             <img class='pic' src={Carla} alt=""></img>
              <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
                  <h2>Carla Winthrope</h2>
                  <p>We waited over 40 minutes for our table despite having a reservation, which was frustrating. The restaurant was extremely noisy, making it hard to have a conversation. We brought kids along and were disappointed there was no kids’ menu or family-friendly options. While the food was decent, the atmosphere and wait times mean we likely won’t be back</p>
             </div>
             <div class="flex-child">
             <img class='pic' src={Diego} alt=""></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
             <img class='review'src={Star} alt=''></img>
              <img class='review'src={Star} alt=''></img>
              <img class='review'src={Star} alt=''></img>
                   <h2>Diego Wallace</h2>
                   <p>Little Lemon delivers amazing Italian cuisine with a creative modern twist. Every dish we tried was fresh and flavorful, beautifully balancing tradition and innovation. The staff was exceptionally friendly and made us feel truly welcome. With its sleek yet inviting vibe, it’s easily one of my favorite dining spots in Chicago.</p>
             </div>
        </div>
         </section>
            <section id="About-section" class='about'>
              <div class='about-content'>
                  <h1>About us</h1>
                   <p>Mario and Adrian were two freinds who wanted to share their love for italian cuisine to not only the Greater lakes reigon, but to the whole USA! So in 2012. the pair set out from their home town of Naples and flew to the Windy city. Over the years Mario and Adrian have been perfecting their dishes and their dining experience aswell! More locations Coming soon!</p>
              </div>

                        <div class="slideshow">
                          <img src={Slide1}class="slide" alt='' />
                          <img src={Slide2} class="slide"  alt='' />
                          <img src={Slide3} class="slide" alt='' />
                        </div>
           </section>
        </main>
    )
}

export default function main(){
    return(
        <Main />
    )
};