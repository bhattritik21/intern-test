import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import  {FaStumbleuponCircle} from 'react-icons/fa';
import  {BsBoxArrowInRight}  from 'react-icons/bs';
import  {BsGear}  from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    icon: <FaStumbleuponCircle />,
    cName: 'nav-text head-nav'
  },
  {
    title: 'Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text acive'
  },
  {
    title: 'Reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    icon: <BsBoxArrowInRight />,
    cName: 'nav-text '
  },
  {
    title: 'Support',
    icon: <BsGear />,
    cName: 'nav-text nav-end'
  }
];
