import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native"
import QuotationsItems from "./QuotationsItems";

import styles from './styles'

export default function QuotationsList(props) {
    const daysQuery = props.filterDay

    return (
        <>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(7)}
                >
                    <Text style={styles.textButtonQuery}>7 Dias</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(15)}
                >
                    <Text style={styles.textButtonQuery}>15 Dias</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(30)}
                >
                    <Text style={styles.textButtonQuery}>30 Dias</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(90)}
                >
                    <Text style={styles.textButtonQuery}>90 Dias</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => daysQuery(180)}
                >
                    <Text style={styles.textButtonQuery}>180 Dias</Text>
                </TouchableOpacity>
            </View>

            {
                props.listTransactions.length != 0 ?

                    <FlatList
                        data={props.listTransactions}
                        renderItem={({ item }) => {
                            return <QuotationsItems value={item.value} date={item.date} />
                        }}
                    />

                    :
                    <View>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>Não há cotações para este período</Text>
                    </View>
            }


        </>

    )
}