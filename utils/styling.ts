import {Dimensions, PixelRatio} from "react-native";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

const [shortDimension, longDimension] =
    SCREEN_WIDTH < SCREEN_HEIGHT ? [SCREEN_WIDTH, SCREEN_HEIGHT] : [SCREEN_HEIGHT, SCREEN_WIDTH];

const guideLineBaseWidth = 375;
const guideLineBaseHeight = 812;

//scale horizontally
export const scale = (size: number): number => {
    return Math.round(PixelRatio.roundToNearestPixel((shortDimension / guideLineBaseWidth) * (size as number)));
}

//scale vertically
export const verticalScale = (size: number): number => {
    return Math.round(PixelRatio.roundToNearestPixel((longDimension / guideLineBaseHeight) * (size as number)));
}



