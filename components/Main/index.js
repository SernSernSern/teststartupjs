import React, { useState } from 'react'
import {observer} from 'startupjs'
import {Row, Span, Div, H3, H5, Link, TextInput, Br, Button} from '@startupjs/ui'
import Comments from './Comments'
import './index.styl'


export default observer(function Main() {
  
  const [title, setTitle] = useState()
  const [main, setMain] = useState()
  async function onPress() {
  }

  return pug`
    Div.root
      H3 ADD A SUGGESTION
      H5 WE LOVE TO HEAR NEW IDEAS ON HOW TO BE EVEN MORE AWESOME
      Br
      TextInput(
        placeholder='Title of suggestion?'
        value=title
        onChangeText=setTitle    
      )
      Br
      TextInput(
        multiline
        resize
        numberOfLines=5
        placeholder='Make a suggestion'
        value=main
        onChangeText=setMain
      )
      Br
      Row(align='between')
        Div
          Span To spand a private suggestion email us at:
          Link CULTURE@VERGINHOTELS.COM 
        Div
          Button(onPress={onPress}) POST
      Br
    Row.rowButton(align='start')
      Button(variant='text' onPress={onPress}) ALL
      Button(variant='text' onPress={onPress}) MOST LOVED
      Button(variant='text' onPress={onPress}) IN ACTION
      Button(variant='text' onPress={onPress}) ARCHIVE
    Comments
  `
})