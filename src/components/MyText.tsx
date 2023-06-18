import React, { FC } from 'react'
import { Text, TextProps } from 'react-native'

const MyText:FC<any> = (props) => {
    const {text} = props
  return (

    <Text>
        {text}
    </Text>
  )
}

export default MyText