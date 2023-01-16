import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { changeState } from '../reducers/features/userInterfaceSlice'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const {showSidebar, unfoldSidebar} = useSelector((state) => state.ui)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldSidebar}
      visible={showSidebar}
      onVisibleChange={(visible) => {
        dispatch(changeState({ type: 'set', showSidebar: visible }))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(changeState({ type: 'set', unfoldSidebar: !unfoldSidebar }))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
