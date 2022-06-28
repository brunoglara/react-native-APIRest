import React from "react";
import {
    View,
    Text,
    Image
} from "react-native"

import styles from './styles'

export default function QuotationsItems(props) {
    return (
        <View style={styles.container}>
            <View style={styles.contentLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logoBitcoin}
                        source={require('../../../img/bitcoin.png')}
                    />

                    <Text style={styles.dayRate}>{props.date}</Text>
                </View>
            </View>

            <View style={styles.contentRight}>
                <Text style={styles.price}>${props.value}</Text>
            </View>
        </View>
    )
}