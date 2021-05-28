import React from 'react'
import { ScrollView, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { Content, Row, Div, H1, Card, Layout } from '@startupjs/ui'
import { TestComponent } from 'components'
import { Header, Event, Main } from 'components'
import { BASE_URL } from '@env'
import './index.styl'

const url = '/background.png'

const base = BASE_URL
export default observer(function PHome () {
  return pug`
    ScrollView.root
      ImageBackground.image(
        source={uri: base + url}
      )
        Header
        H1.title.white BARE IT
        Div.main
          Div.cardDiv
            Main
          Div.event
            Event
  `
})
