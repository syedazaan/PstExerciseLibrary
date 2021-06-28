import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import Colors from '../styles/Colors';

export default class Content extends React.Component {
        render() {
                    return(
                            <View style= {[styles.flexOne, styles.row, styles.border]}>
                                    {/* Image */}
                                    <View style ={[styles.flexOne, styles.border, ]}></View>
                                    {/* Title */}
                                    <View style = {[styles.flexOneAndHalf, styles.border ]}>
                                            <View style = {[styles. flexOne]}></View>
                                    </View>
                                    {/* Icon */}
                                    <View style = {[styles.flexHalf, styles.border ]}></View>
                            </View>
                    )
        };
} 