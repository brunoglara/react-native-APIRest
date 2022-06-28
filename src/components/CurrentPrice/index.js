import React from "react";
import { View, Text } from "react-native"

import styles from './styles'

export default function CurrentPrice(props) {
    return (
        <View style={styles.headerPrice}>
            {
                props.lastValueCoin.length != 0 ?
                    <Text style={styles.currentPrice}> ${props.lastValueCoin[0].value}</Text>
                    :
                    <Text style={styles.currentPrice}> $-----</Text>

            }
            <Text style={styles.textPrice}>Última Cotação</Text>
        </View >
    )
}