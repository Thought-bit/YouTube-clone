export const API_KEY = 'AIzaSyA93N_xLGslHk8xTqyGoIa1OVl2eSiUt78';

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + 'M'
  }
  else if (value >= 1000) {
    return Math.floor(value / 1000) + 'K'
  }
  else {
    return value
  }

}
