import React, { useState } from 'react'
import {Icon, Hr, Row, Span, Div, H4, H5, TextInput, Button, Avatar} from '@startupjs/ui'
import { faCheck, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import {observer} from 'startupjs'
import './index.styl'


export default observer(function Comments() {
  
  const [title, setTitle] = useState()
  const [main, setMain] = useState()
  async function onPress() {
  }

  const comment = [
    {
      title: 'CLASSES',
      author: 'Miss Shie',
      years: '3',
      description: 'I think it would be amazing to offter Exel and outher computer refresher class',
      count: '5',
      comment: [
        {
          author: 'Mike Miller',
          description: 'Corey i will bake you what ever you want !',
          years: '3'
        },
        {
          author: 'Clio Knowles',
          description: 'Hi Mike, Grate suggestion! We can definitely make this  happen. We`ll update you whith future details. Thanks!',
          years: '3'
        },
        {
          author: 'Corey Hartman',
          description: 'I`m willing to trade tutoring session for baked goods ',
          years: '3'
        }
      ]
    },
    {
      title: 'CLASSES',
      author: 'Tom Jones',
      years: '3',
      description: 'Would anyone be intrested in participating ?',
      count: '3',
      comment: [
        
      ]
    }
  ]

  return pug`
    Div.root(styleName='alt')
      each item in comment
        Row.commentContent
          Div.circle
            H5=item.count
          Div.circleInfo
            H4=item.title
            Row
              Span.name(styleName='red')=item.author
              Span.yearComment over years ago
            Span.commentDescription=item.description
            Row.iconManage(align='between')
              Row(align='center')
                Button(icon=faCheck, variant='text') VOTE:
                Span.alig 6
              Row
                Button(variant='text', icon=faTrash)
                Button(variant='text', icon=faHeart) MANAGE
            Div.root
              each comm, index in item.comment
                Row.commentContent(styleName={first:!index})
                  Avatar
                  Div.commentInfo
                    Span.name(styleName='red')=comm.author
                    Span.commentDescription=comm.description
                    Span.name over year ago
                  Icon(variant='text', icon=faTrash)
                Hr
              Row
                Avatar.avatarComment
                Div.inputComment
                  TextInput(
                    placeholder='Raplay to this suggestion'
                    value=title
                    onChangeText=setTitle    
                  )
  `
})