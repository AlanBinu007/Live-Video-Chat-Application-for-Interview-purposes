import React from 'react';
import homeIcon from '../../assets/video-call.png';
import './Navbar.css';
import StarIcon from '@material-ui/icons/Star';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='title-div'>
        <img src={homeIcon} alt='' />
        <h3>HAVE FUN</h3>
      </div>
      <a className='repo' href="https://github.com/AlanBinu007/Online-Live-Video-Chat-Application-for-Interview-purposes" target='_blank'>
        <StarIcon className='rotate' />
        <div className='repo-text'>
          <p className='github-name'>Github</p>
          <p className='repo-name'>Give repo a star</p>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
