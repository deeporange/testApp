import React, { FC } from 'react'
import { Button } from 'react-native'

const MyButton:FC<any> = ({onClick}) => {
    const onPressLearnMore = () => {
        onClick('Edited text')
    }
  return (
    <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
  )
}

export default MyButton