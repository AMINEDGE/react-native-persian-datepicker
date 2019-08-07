# react-native-persian-datepicker
A customized component which can be used as Persian Datepicker


## ScreenShot
![alt text](https://github.com/AMINEDGE/react-native-persian-datepicker/blob/master/Screen%20Shot%202019-01-03%20at%207.50.47%20PM.png "ScreenShot")


## You should install these packages first

**[React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient)**

**[Moment Jalali](https://www.npmjs.com/package/moment-jalaali)**

## Usage
First copy project files into your project directory (you can import them into a folder named "PersianDatePicker")
and import the component like below

```javascript
...
import { PersianDatePicker } from './PersianDatePicker/PersianDatePicker';

render() {

  return (
    ...
    <PersianDatePicker 
      text={'Enter Your Date'}
      width={100}
      onDateSelected={(selectedDate) => { console.log(selectedDate) }} />
  );
}
```

### Note
I made this for personal use and of course you can customize it to make your own component
It's not perfect, but it works!
