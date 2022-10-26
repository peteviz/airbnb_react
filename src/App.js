import './App.css';
import NavBar from "./components/navbar"
import Hero from "./components/hero"
import Card from './components/card';
import data from './data'


function App() {
  const CardData = data.map(element => {
    return (
       <Card
        key={element.id}
        {...element}
        // element = {element}
        // img = {element.coverImg}
        // price = {element.price}
        // title =  {element.title}
        // country = {element.location}
        // rating = {element.stats.rating}
        // num_rating = {element.stats.reviewCount}
        // openSpots={element.openSpots}
        star='star_1.png'
      />
    )
  })
  return (
    <div className='app'>
      <section>
        <NavBar />
        <Hero />

          <div className='cards'>
          {CardData}
          {/* <Card   img='card_img_1.png'
                  star='star_1.png'
                  rating="4.0"
                  num_rating= '7'
                  country= 'Nigeria'
                  title = 'Life Lessons with Katie Zaferes'
                  price = '$136'
                  />
          <Card  img='card_img_2.png'
                  star='star_1.png'
                  rating="3.0"
                  num_rating= {8}
                  country= 'Germany'
                  title='Learn Wedding Photography'
                  price = "$120"
                  /> */}
          </div>
      </section>
    </div>
  )
}

export default App;
