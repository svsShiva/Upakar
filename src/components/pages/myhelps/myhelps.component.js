import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput
} from 'react-native';

import { myHelpsStrings } from '../../../constants/strings';
import { styles } from './myhelps.styles';
import { data } from '../../../data/dashboard';
import HelpCard from '../../controls/help-card';
import CustomHeader from '../../controls/custom-header';
import imgSearch from '../../../assets/images/Search.png'
import imgSort from '../../../assets/images/sort.png';
import imgFilter from '../../../assets/images/filter.png';

export default function MyHelps(props) {
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
            <CustomHeader navigation={props.navigation} showBackButton={false} title={"My Helps"} />
            <View style={styles.viewsIcon}>
                <View style={styles.searchView}>
                    <Image style={styles.imgSearchStyle} source={imgSearch} ></Image>
                    <TextInput placeholder="Seach for help..." style={{flex:1}}/>
                </View>
               
            </View>
            {
                data.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={getRenderItem}
                        keyExtractor={getKeyExtractor}
                        style={styles.flatlist}
                        ListFooterComponent={getFooterComponent}
                    //extraData={props.state.dashboardReducer.refreshFlatlist}
                    />
                    :
                    <View style={styles.loadingComponent}>
                        <Text>{myHelpsStrings.LOADING_MESSAGE}</Text>
                    </View>
            }
            <View style={styles.footerView}>
                <TouchableOpacity style={styles.footerTileView} >
                    <Image style={styles.footerTileImage} source={imgSort} ></Image>
                    <Text style={styles.footerTileText}>SORT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTileView} >
                    <Image style={styles.footerTileImage} source={imgFilter} ></Image>
                    <Text style={styles.footerTileText}>FILTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

