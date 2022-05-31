import { Avatar } from '../avatar/Avatar';
import { Component } from 'react';
import './Home.css';
import { EmailOutlined, LinkedIn } from '@mui/icons-material';

export class Home extends Component {
  render() {
    return (
      <div className='Home-Container'>
        <div className='Home-Title-Container'>
          <h1 className='Home-Title'>Bruno López</h1>
          <h2 className='Home-Subtitle'>FullStack</h2>
          <h2 className='Home-Subtitle Align-Right'>Developer</h2>
        </div>
        <Avatar></Avatar>
        <div className='Home-Shortcuts'>
          <a
            href='https://www.linkedin.com/in/bruno-l%C3%B3pez-trigo-514213137/'
            target='_blank'
            rel='noreferrer'
            className='Home-Blue'
          >
            <LinkedIn sx={{ fontSize: 64 }}></LinkedIn>
          </a>
          <a href='mailto:bruno.lopez.trigo@outlook.com' className='Home-Red'>
            <EmailOutlined sx={{ fontSize: 64 }}></EmailOutlined>
          </a>
        </div>
      </div>
    );
  }
}
