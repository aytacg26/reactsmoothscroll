import { Fragment } from 'react';
import './App.css';
import Scrollable from './components/UI/Scrollable/Scrollable';
import sLogo from '../src/images/scrollable.png';

const App = () => {
  return (
    <Fragment>
      <Scrollable
        linkTitles={['Home', 'About', 'Products', 'Contact Us', 'Activities']}
        navHeight={70}
        navClass='nav-bar'
        overWriteNavClass={false}
        linkClass='links'
        image={{
          img: sLogo,
          alt: 'Smooth Scroll',
          title: 'Smooth Scroll',
        }}
      >
        <div className='full-page home'>
          This will be Home Page Component which may contain lots of other
          components
        </div>
        <div className='full-page about'>
          This will be About Page Component which may contain lots of other
          components
        </div>
        <div className='full-page products'>
          This will be Products Page Component which may contain lots of other
          components
        </div>
        <div className='full-page contact_us'>
          This will be Contact Us Page Component which may contain lots of other
          components
        </div>
        <div className='full-page activities'>
          This will be Activities Page Component which may contain lots of other
          components
        </div>
      </Scrollable>
    </Fragment>
  );
};

export default App;
