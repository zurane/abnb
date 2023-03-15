import React from 'react';
import './App.css';
import data from './components/data';
import Navigation from './components/navigation';
import Catergory from './components/catergories';
import Card from './components/card';
import Footer from './components/footer';
// import iconsData from './components/iconsData';


function App() {

  // This function should loop through the data file which is a list containing objects and dynamically return a card with unique properties.
  const componentData = data.map(card => {
    return <Card
      key={card.id}
      card={card} />
  })

  // 
  // const iconsFilter = iconsData.map(icon => {
  //   return <Catergory
  //     key={icon.id}
  //     icon={icon} />
  // })

  // Put all your components under the return function / statement
  // All variables and functions should be declared above the return statement.

  return (
    <>
      <div className='Nav'>
        <Navigation />

        <div className="icons__row">
          <Catergory
            iconname='cabin'
            name='cabin'
          />
          <Catergory
            iconname='window'
            name='amazing views'
          />
          <Catergory
            iconname='pool'
            name='amazing pools'
          />
          <Catergory
            iconname='park'
            name='countryside'
          />
          <Catergory
            iconname='beach_access'
            name='beachfront'
          />
          <Catergory
            iconname='king_bed'
            name='Private rooms'
          />
          <Catergory
            iconname='agriculture'
            name='farm'
          />
          <Catergory
            iconname='restaurant'
            name='bed & breakfast'
          />
          <Catergory
            iconname='castle'
            name='castle'
          />
          <Catergory
            iconname='surfing'
            name='surfing'
          />
          <Catergory
            iconname='directions_boat'
            name='boats'
          />
        </div>
      </div>
      
      <div className='cards'>
        {componentData}
      </div>
      <Footer/>
    </>
  );
}

export default App;

