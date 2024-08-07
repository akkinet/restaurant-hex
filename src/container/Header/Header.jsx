import React  from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Experience the Flavours Of <b>Eggdose</b>, Where Culinary Artistry Meets
        Exquisite Ambiance. Indulge In Our Chef's Creations. Crafted From The
        Finest Ingredients, And Enjoy A Memoriable Dining Journey That Delights
        All your Senses.
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header_img' />
    </div>
  </div>
)

export default Header
