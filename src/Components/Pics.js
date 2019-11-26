import React from 'react';
import PropTypes from 'prop-types';
import './../scss/components/_pics.scss';

const Pics = (props) => {
  const {pics} = props
    return(
      <div className="pics__container">
        <ul className="pics__list">
        {pics.map(item => {
          return(
            <li className="pic__item" key={item.id}>
              <img className="pic__img" src={item.download_url} alt=""/>
              <h2 className="pic__author">{item.author}</h2>
            </li>
          )
        })} 
        </ul>
      </div>
    );
}

Pics.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Pics;