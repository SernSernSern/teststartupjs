import React from 'react'
import { observer, emit, useValue, useLocal } from 'startupjs'
import { Button, Div, H1, Layout, Menu, Row, SmartSidebar, } from '@startupjs/ui'
import { ImageBackground, Image } from 'react-native'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import APP from '../../app.json'
import { BASE_URL } from '@env'
import './index.styl'


const { displayName } = APP

const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

const url = '/background.png'

const logo = '/main-logo-white.png'

const base = BASE_URL

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')
  return pug`
    Menu.Item.manuItem(
      active=true
      onPress=() => emit('url', url)
      activeColor='white'
    )= children
  `
})

export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)


  function renderSidebar () {
    return pug`
      Menu.sidebar-menu
        Image.logo(source={uri: base + logo} resizeMode="contain")
        MenuItem(url='/') VALENTINES
        MenuItem(url='/about') VOPPERS
        MenuItem(url='/') BARE IT
        MenuItem(url='/') CULTURE
        MenuItem(url='/') TRIBE
        MenuItem(url='/') RESOURCES
        MenuItem(url='/') VOWELL
        Row.manuItem(align='around')
          Button(shape='circle' icon=faAddressBook variant='flat')
          Button(shape='circle' icon=faAddressBook variant='flat')
          Button(shape='circle' icon=faAddressBook variant='flat')
          Button(shape='circle' icon=faAddressBook variant='flat')
    `
  }

  return pug`
    Layout
      SmartSidebar.sidebar(
        $open=$opened
        renderContent=renderSidebar
      )
        Row.menu
          Button(color='secondaryText' icon=faBars onPress=() => $opened.set(!opened))
          H1.logo= APP_NAME

        Div.body= children
        
  `
})
