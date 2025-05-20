import { View, Platform, TouchableOpacity } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors, spacingY} from "@/constants/theme"
import { StyleSheet } from 'react-native';
import { verticalScale } from '@/utils/styling';
import * as Icons from "phosphor-react-native"

export default function CustomTab({ state, descriptors, navigation }: BottomTabBarProps) {
//   const { colors } = useTheme();
//   const { buildHref } = useLinkBuilder();

  const tabIcons: any = {
    index: (isFocused: boolean) =>(
        <Icons.House
        color={isFocused ? "white" : colors.black}
        size={verticalScale(24)}
        weight={isFocused ? "fill": "regular"}
        />
    ),
    profile: (isFocused: boolean) =>(
        <Icons.User
        color={isFocused ? "white" : colors.black}
        size={verticalScale(24)}
        weight={isFocused ? "fill": "regular"}
        />
    ),
    statistics: (isFocused: boolean) =>(
        <Icons.ChartBar
        color={isFocused ? "white" : colors.black}
        size={verticalScale(24)}
        weight={isFocused ? "fill": "regular"}
        />
    ),
    wallet: (isFocused: boolean) =>(
        <Icons.Wallet
        color={isFocused ? "white" : colors.black}
        size={verticalScale(24)}
        weight={isFocused ? "fill": "regular"}
        />
    ),
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            // href={buildHref(route.name, route.params)}
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {
                tabIcons[route.name] && tabIcons[route.name](isFocused)
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: verticalScale(60),
        backgroundColor: 'rgba(230, 193, 81, 0.83)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: 'white',
        borderTopWidth: 1,
    },
    tabItem: {
        marginBottom: spacingY.md,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
