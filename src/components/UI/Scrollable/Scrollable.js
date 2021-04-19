import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import classes from './Scrollable.module.css';
import PropTypes from 'prop-types';
import slogo from '../../../images/scrollable.png';

const Scrollable = ({
  children,
  linkTitles,
  navClass,
  linkClass,
  navHeight,
  overWriteNavClass,
  image,
}) => {
  const logo =
    image !== null && image !== undefined
      ? image
      : {
          img: slogo,
          alt: '',
          title: '',
        };
  const { img, alt, title } = logo;

  const handleClick = (e, targetId) => {
    e.preventDefault();

    const target = !targetId ? e.target.getAttribute('href') : `#${targetId}`;
    const element = document.querySelector(target);
    const location = element.offsetTop;
    const locationReviser =
      target === `#${linkTitles[0].split(' ')[0]}` ? navHeight : 0;

    window.scrollTo({
      left: 0,
      top: location + 3 - locationReviser,
    });
  };

  const linksObjArr = linkTitles.map((element, index) => ({
    id: `${element}-${index}`,
    title: element,
    url: `#${element.split(' ')[0]}`,
  }));

  const cloneArr = [...linksObjArr];
  cloneArr.shift();
  const cloneChildren = [...children];
  cloneChildren.shift();

  return (
    <main id={linksObjArr[0].title.split(' ')[0]} className={classes.Main}>
      <Navbar className={navClass} overwriteExistingClass={overWriteNavClass}>
        <div className={classes.Logo}>
          <img
            src={img}
            alt={alt}
            title={title}
            onClick={(e) => handleClick(e, linksObjArr[0].title.split(' ')[0])}
          />
        </div>
        <div className={linkClass}>
          {linksObjArr.map((link) => (
            <a
              href={link.url}
              key={link.id}
              alt={link.title}
              title={link.title}
              onClick={handleClick}
            >
              {link.title}
            </a>
          ))}
        </div>
      </Navbar>
      <section>{children[0]}</section>
      {cloneArr.map((el, i) => (
        <section id={el.title.split(' ')[0]} key={el.id}>
          {cloneChildren[i]}
        </section>
      ))}
    </main>
  );
};

Scrollable.propTypes = {
  children: PropTypes.array,
  linkTitles: PropTypes.array,
  navClass: PropTypes.string,
  linkClass: PropTypes.string,
  navHeight: PropTypes.number,
  overWriteNavClass: PropTypes.bool,
  image: PropTypes.object,
};

export default Scrollable;
