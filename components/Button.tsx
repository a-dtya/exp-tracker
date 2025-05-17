import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomButtonProps } from '@/types'
import { spacingX, radius } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { colors } from '@/constants/theme'
import Loading from './Loading'

const Button = ({
    style,
    onPress,
    loading = false,
    children,
}: CustomButtonProps) => {
    if (loading) {
        return(
            <View style={[styles.button, style, {backgroundColor: 'rgba(230, 193, 81, 0.83)'}]}>
                <Loading />
            </View>

        )
    }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        {children}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingVertical: verticalScale(12),
        paddingHorizontal: spacingX.md,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(230, 193, 81, 0.92)',
    }
})