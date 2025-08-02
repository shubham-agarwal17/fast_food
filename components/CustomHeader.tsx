import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CustomHeaderProps } from '@/type'
import { useRouter } from 'expo-router'
import { images } from '@/constants'

const CustomHeader = ({ title }: CustomHeaderProps) => {
  const router = useRouter();

  return (
    <View className="custom-header">
      <TouchableOpacity onPress={() => router.back()}>
        <Image 
          source={images.arrowBack}
          className="size-5"
          resizeMode="contain"
        />
      </TouchableOpacity>

      {title && <Text className="base-semibold text-dark-100">{title}</Text>}

      <Image source={images.search} className="size-5" resizeMode="contain" />
    </View>
  )
}

export default CustomHeader