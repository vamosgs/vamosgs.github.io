import Instagram from 'react-icons/lib/io/social-instagram';
import Facebook from 'react-icons/lib/io/social-facebook';
import Linkedin from 'react-icons/lib/io/social-linkedin';
import Github from 'react-icons/lib/io/social-github';
import Behance from 'react-icons/lib/fa/behance';
import Tumblr from 'react-icons/lib/io/social-tumblr';
import Twitter from 'react-icons/lib/io/social-twitter';
import React from 'react';

const links = [
  { name: 'Github', link: 'https://github.com/VamOSGS', render: <Github /> },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/gegham-samvelyan-152253144/',
    render: <Linkedin />,
  },
  { name: 'Behance', link: 'https://www.behance.net/VamOSGS', render: <Behance /> },
  { name: 'Tumblr', link: 'http://vamosgs.tumblr.com/', render: <Tumblr /> },
  { name: 'Facebook', link: 'https://www.facebook.com/vamosGSs', render: <Facebook /> },
  { name: 'Twitter', link: 'https://twitter.com/VAMOSGSvlv', render: <Twitter /> },
  { name: 'Insagram', link: 'https://www.instagram.com/vamosgs/', render: <Instagram /> },
];

export default links;
