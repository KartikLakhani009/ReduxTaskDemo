import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = (isIphone && height === 812) || (isIphone && height === 896);
const widthPer = width / 100;
const heightPer = height / 100;
const screen_unused_height = isIphone ? (iPhoneX ? 78 : 28) : 24;
const screen_height = height - screen_unused_height;
const ratioCount = screen_height / 667; //smartScale

const isTablet = () => {
  if (isIphone) {
    return Platform.isPad;
  } else {
    return height / width <= 1.6;
  }
};
const APP_FONTS = {
  NANITOSANS_LIGHT: isIphone ? 'NunitoSans-Light' : 'NunitoSans-Light',
  NANITOSANS_REGULAR: isIphone ? 'NunitoSans-Regular' : 'NunitoSans-Regular',
  NUNITOSANS_BOLD: isIphone ? 'NunitoSans-Bold' : 'NunitoSans-Bold',
  NUNITOSANS_ITALIC: isIphone ? 'NunitoSans-Italic' : 'NunitoSans-Italic',
  NUNITOSANS_SEMIBOLD: isIphone ? 'NunitoSans-SemiBold' : 'NunitoSans-SemiBold',
  NUNITOSANS_ExtraBold: isIphone
    ? 'NunitoSans-ExtraBold'
    : 'NunitoSans-ExtraBold',
};
export default {
  countPixelRatio: size => size * ratioCount,
  responsiveHeight: size => size * heightPer,
  responsiveWidth: size => size * widthPer,
  fontSizeH1: (deviceType == 'phone' ? 36 : 48) * ratioCount,
  fontSizeH1_2: (deviceType == 'phone' ? 33 : 42) * ratioCount,
  fontSizeH2: (deviceType == 'phone' ? 28 : 33) * ratioCount,
  fontSizeH2_3: (deviceType == 'phone' ? 24 : 28) * ratioCount,
  fontSizeH3: (deviceType == 'phone' ? 20 : 23) * ratioCount,
  fontSizeH3_4: (deviceType == 'phone' ? 17 : 20) * ratioCount,
  fontSizeH4: (deviceType == 'phone' ? 15 : 17) * ratioCount,
  fontSizeH4_5: (deviceType == 'phone' ? 12 : 15) * ratioCount,
  fontSizeH5: (deviceType == 'phone' ? 8 : 10) * ratioCount,
  fontSizeParagraph: (deviceType == 'phone' ? 14 : 16) * ratioCount,

  getFont: type => {
    switch (type) {
      case 'light':
        return APP_FONTS.NANITOSANS_LIGHT;
      case 'regular':
        return APP_FONTS.NANITOSANS_REGULAR;
      case 'bold':
        return APP_FONTS.NUNITOSANS_BOLD;
      case 'italic':
        return APP_FONTS.NUNITOSANS_ITALIC;
      case 'extraBold':
        return APP_FONTS.NUNITOSANS_ExtraBold;
      case 'semiBold':
        return APP_FONTS.NUNITOSANS_SEMIBOLD;
      default:
        return APP_FONTS.LATO_REGULAR;
    }
  },
  fontLight: APP_FONTS.NANITOSANS_LIGHT,
  fontRegular: APP_FONTS.NANITOSANS_REGULAR,
  fontBold: APP_FONTS.NUNITOSANS_BOLD,
  fontItalic: APP_FONTS.NUNITOSANS_ITALIC,
  fontSemiBold: APP_FONTS.NUNITOSANS_SEMIBOLD,
  fontExtraBold: APP_FONTS.NUNITOSANS_ExtraBold,
  width,
  height,
  iPhoneX,
  isPhone: !isTablet(),
  isTab: isTablet(),
  isIphone,
  whiteBlueLinearGradient: ['#e6ffff', '#00ffff'],
  greenLinearGradient: ['#25BC77', '#35E593'],
  orangeLinearGradient: ['#FD5739', '#F3914F'],
  blueLinearGradinent: ['#3e8dc7', '#479ede'],
  FBLinearGradinent: ['#7297d1', '#3e5c9b'],
  TwitterLinearGradinent: ['#4dc6f6', '#22a8f3'],
  GPlusLinearGradinent: ['#ea725c', '#dd4b39'],
  COLOR: {
    eggBlue: '#9ED3CF',
    deepCyan: '#0B302D',
    shipOfiicer: '#2C3A47',
    lightShip: '#496176',
    //Blue shades
    windowsBlue: '#3e8dc7',
    darkSkyBlue: '#479ede',
    FACEBOOK_BLUE: '#3B579D',
    RESOLUTION_BLUE: '#213B73',
    BLUE_BRIGHT: '#1164B7',
    THEME: '#0093BA',
    DEEP_SKY_BLUE: '#00C6F1',
    LIGHT_SEA_GREEN: '#1AB99B',
    darkIndigo: '#0d255e',
    azure: '#22a8f3',

    WHITE: '#FFFFFF',
    BLACK: '#000',
    RED: '#D00',
    GREEN: '#25BC77',

    //Grey shades
    WHITE_OFF: '#EEE',
    BLACK_OFF: '#333',
    GREY_LIGHT: '#D4D6DB',
    GREY_DIM: '#707070',
    BACKGROUND: '#91919D',
    LIGHTER_GREY: '#F6F7F9',
    GREY_DARK: '#707070',
    CHAMBRAY: '#637591',
    slateGrey: '#58585a',
    coolGrey: '#acaeb0',
    Zumthor: '#D2D4D5',

    RED_REDICAL: '#FC5739',
    GOOGLE_CINABAR: '#EA4335',
    ORANGE_OUTRAGEOUS: '#FD5739',
    HEADER_ICON: '#24253D',
    WECHAT_PARROT: '#2DC100',

    WHITE_MODAL: '#E4E4E4',
    CORNFLOWER_BLUE: '#4392F920',
    YELLOW_RATING: '#FAAE32',
    ROCK_BLUE: '#959FB0',

    PARROT: '#398215',

    PURPLE_VIVID: '#6E0F8F',
    PINK: '#980667',
    GREEN_PINE: '#097470',
    HAWKES_BlUE: '#DEDFE2',
    ORANGE: '#FD5739',
    NEPAL: '#A4AFB8',
    PURPLE: '#A000FB',
    JAPANESE_PARROT: '#049904',
    SHAMROCK: '#2BD586',
    HEATHER: '#B7BBC0',
    MANATEE: '#848592',
    TORCH_RED: '#FF0F50',
    GREEN_LIGHT: '#CCD131',
    YELLOW_GREEN: '#A7D129',
    GUN_POWDER: '#43425D',
  },
};
