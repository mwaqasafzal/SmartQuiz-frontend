import React from 'react'
import {Link} from 'react-scroll'

export const HomeNavItem=({to,children})=><Link activeClass="active" to={to} smooth={true} duration={500}>{children}</Link>
