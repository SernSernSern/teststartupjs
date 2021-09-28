import React from 'react'
import { useState } from 'react'
import { observer, useLocal} from 'startupjs'
import {H1, H5, Div, Menu, Row, Avatar, Span} from '@startupjs/ui'
import { Image } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const pic = '/main-logo-white.png'

const base = BASE_URL

export default observer(function Header() {

  const [url] = useLocal('$render.url')
  const components = [
    { label: 'VALENTINES', to: '/' },
    { label: 'VOPPERS', to: '/about' },
    { label: 'VOPRES', to: '/' },
    { label: 'BARE IT', to: '/about' },
    { label: 'CULTURE', to: '/about' },
    { label: 'TRIBE', to: '/about' },
    { label: 'RESOURCES', to: '/about' },
    { label: 'VOWELL', to: '/about' }
  ]

  return pug`
    Div.root
      Image.image(source={uri: base + pic} resizeMode="contain")
      Menu.menu(
        variant='horizontal'
        activeColor='white'
      )
        each component, index in components
          - const to = component.to
          Menu.Item.menuItem(
            key=index
            active=true
            to=to
            styleName={first:!index}
          )= component.label
      Row(vAlign='center')
        Div
          Span.helloField HELLO
          H5.nameField Vitaliy
        Div.avatar
          Avatar(size='l') 
  `
})