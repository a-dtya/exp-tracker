import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'

const BackButton = ({
    style,
    iconSize = 24
} : BackButtonProps) => {

    const router = useRouter();

    
  return (
    
    <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
        <CaretLeft size={verticalScale(iconSize)} color="black" weight="bold"/>
    </TouchableOpacity>
    
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: 'rgba(230, 193, 81, 0.83)',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        gap: 8,
    }
})