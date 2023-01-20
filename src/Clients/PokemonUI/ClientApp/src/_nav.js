import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cil3d,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Pokemon',
    to: '/pokemon',
    icon: <CIcon icon={cil3d} customClassName="nav-icon" />
    
  },
  {
    component: CNavItem,
    name: 'Ability',
    to: '/ability',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />
    
  },
 
]

export default _nav
