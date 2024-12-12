import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HeaderProps {
    title: string
}


const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View>
      <ImageBackground source={require('@/assets/images/headerbg.png')}>
      <Text>{title}</Text>
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})