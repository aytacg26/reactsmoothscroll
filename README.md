# React Smooth Scroll Component

- Component : Scrollable
- props : linkTitles={['Home', 'About', 'Products', 'Contact Us', 'Activities']}
  navHeight={70}
  navClass='nav-bar'
  overWriteNavClass={false}
  linkClass='links'
  image={{
            img: sLogo,
            alt: 'Smooth Scroll',
            title: 'Smooth Scroll',
            }}

### linkTitles : (string[] - string array)

linkTitles prop is the page names and the Link Titles on the navbar. It will be an array and page components should be added in between
<Scrollable>{children}</Scrollable> in same order

### navHeight (number)

This will be same as the height of the of the navbar in css

### navClass (string)

css class for navbar

### overWriteNavClass (boolean)

Navbar has default class in NavBar component, when it is true, default ugly class will be used, otherwise you should make it false
and create a class for navbar

### linkClass (string)

This is the class for link buttons on navbar

### image (object)

image prop is an object which will contain img src, alt and title for img element, as default logo, it uses Scrollable Logo

### A Sample from App.js

```
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

```
