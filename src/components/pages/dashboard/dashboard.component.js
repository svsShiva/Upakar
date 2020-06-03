import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { dashboardStrings } from '../../../constants/strings';
import { styles } from './dashboard.styles';
import { data } from '../../../data/dashboard';
import HelpCard from '../../controls/help-card';
import CustomHeader from '../../controls/custom-header';

export default function Dashboard(props) {
    var getRenderItem = ({ item, index }) => {
        return <HelpCard {...props}
            data={item}
            Key={index}
        />
    }

    var getKeyExtractor = (item, index) => item.id;

    var getFooterComponent = () => {
        return <View style={{ height: 20 }} />
    }

    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={false} title={"Upakar"}></CustomHeader>
            {
                data.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={getRenderItem}
                        keyExtractor={getKeyExtractor}
                        style={styles.flatlist}
                        ListFooterComponent={getFooterComponent}
                        extraData={props.state.dashboardReducer.refreshFlatlist}
                    />
                    :
                    <View style={styles.loadingComponent}>
                        <Text>{dashboardStrings.LOADING_MESSAGE}</Text>
                    </View>
            }
        </View>
    );
}

