import React, { PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const propTypes = {
    amount: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
};

const defaultProps = {
    fontSize: 13,
};

class PriceMarker extends React.Component {
    render() {
        const { fontSize, amount } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.bubble}>

                    <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
            </View>
        );
    }
}

PriceMarker.propTypes = propTypes;
PriceMarker.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 0,
        flexDirection: 'row',

        backgroundColor: '#00A699',
        padding: 10,
        borderRadius: 3,
        borderColor: '#00A699',
        borderWidth: 0.5,
    },
    dollar: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    amount: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderWidth: 10,
        borderColor: 'transparent',
        borderTopColor: '#00A699',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'transparent',
        borderTopColor: '#00A699',
        alignSelf: 'center',
        marginTop: -0.5,
    },
});

module.exports = PriceMarker;