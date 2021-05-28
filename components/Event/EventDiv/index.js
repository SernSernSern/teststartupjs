import React from 'react'
import { observer } from 'startupjs'
import {Span, Div, H5, H6, H3, Content, Row} from '@startupjs/ui'
import {Image} from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL
const data = [
  {
    title: 'TEAMMATE',
    event: [
      {
        pic:'/st-patricks-day.png',
        title:'ST PATRICKS DAY CELEBRATION',
        discript:'FDR',
        date:'12:00p - 1:00p'
      },
      {
        pic:'/st-patricks-day.png',
        title:'ST PATRICKS DAY CELEBRATION',
        discript:'FDR',
        date:'12:00p - 1:00p'
      }
    ]
  },
  {
    title: 'TEAMMATE',
    event: [
      {
        pic:'/st-patricks-day.png',
        title:'ST PATRICKS DAY CELEBRATION',
        discript:'FDR',
        date:'12:00p - 1:00p'
      }
    ]
  }
]

export default observer(function EventDiv() {
  return pug`
    Div.root
      each item in data
        Div.contentEvent
          H5.text(styleName='red')=item.title
          H3.text(styleName='red') EVENT
          each even in item.event
            Row
              Image.pic(
                source = {uri: base + even.pic}
                resizeMode="contain"
              )
              Div.imageDescription
                H6.titleText(styleName='red')=even.title
                Span.descriptionText=even.discript
                Span.descriptionText=even.date
  `
})