import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Picker from './customized/react-native-multiple-picker';
import Moment from 'moment-jalaali';

export class PersianDatePicker extends React.Component {

    state = {
        days: [],
        months: [
            {key: 'month:1', label: 'فروردین'},
            {key: 'month:2', label: 'اردیبهشت'},
            {key: 'month:3', label: 'خرداد'},
            {key: 'month:4', label: 'تیر'},
            {key: 'month:5', label: 'مرداد'},
            {key: 'month:6', label: 'شهریور'},
            {key: 'month:7', label: 'مهر'},
            {key: 'month:8', label: 'آبان'},
            {key: 'month:9', label: 'آذر'},
            {key: 'month:10', label: 'دی'},
            {key: 'month:11', label: 'بهمن'},
            {key: 'month:12', label: 'اسفند'}
        ],
        years: [],
        selectedDate: ''
    }

    persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    convertToPersian(number) {
        var chars = number.split('');
        for (var i = 0; i < chars.length; i++) {
            if (/\d/.test(chars[i])) {
                chars[i] = this.persianNumbers[chars[i]];
            }
        }
        return chars.join('');
    }

    initDays() {
        var days = [];

        for(i = 1; i <= 31; i++) {
            days.push({key: `day:${i}`, label: this.convertToPersian(i + '')});
        }

        this.setState({ days });
    }

    initYears() {

        var years = [];
        var year = Moment().jYear();

        for(i = year; i >= 1200; i--) {
            years.push({key: `year:${i}`, label: this.convertToPersian(i + '')});
        }

        this.setState({ years });
    }

    onDateSelected(selectedDate) {
        this.setState({ selectedDate });
        if(this.props.onDateSelected) this.props.onDateSelected(selectedDate);
    }

    componentWillMount() {
        this.initYears();
        this.initDays();
    }

    render() {
        return (
            <Picker
                style={this.styles.container}
                data={[this.state.years, this.state.months, this.state.days]}
                onChange={(selectedDate) => { this.onDateSelected(selectedDate) }}
                label={['سال', 'ماه', 'روز']}
                >
                <Text style={this.styles.text}>{Strings.birthDate}</Text>
                
            </Picker>
        );
    }
    
    styles = StyleSheet.create({
        container: {
            backgroundColor: '#EED',
            borderRadius: 5,
            height: 50,
            margin: 10,
            width: this.props.width || 130
        },

        text: {
            fontFamily: 'IRANSansMobile',
            fontSize: 16,
            color: Colors.normalGray,
            padding: 10,
        }
    });
}