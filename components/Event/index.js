import React from 'react'
import { observer } from 'startupjs'
import {Image} from 'react-native'
import {H1, Card, Div, Span, Content, Row, Button} from '@startupjs/ui'
import EventDiv from './EventDiv'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

import { BASE_URL } from '@env'
import './index.styl'

const url = '/make-love-text.png'

const base = BASE_URL


export default observer(function Event() {
  return pug`
    Div.cardDiv
      Content 
        Image.image(source={uri: base + url} resizeMode="contain")
        Span.text(styleName='red') #MLSH
      Row.iconCard(align='around')
        Div.flexIcon
          Button(icon = faHouseUser size = 'xl', variant='text')
          Span.text BOOK OF LOVE
        Div.flexIcon
          Button(icon = faHouseUser size = 'xl', variant='text')
          Span.text CULTURE MAP
        Div.flexIcon
          Button(icon = faHouseUser size = 'xl', variant='text')
          Span.text SEND FEEDBACK
      EventDiv
  `
})