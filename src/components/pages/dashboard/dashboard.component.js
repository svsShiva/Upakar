import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    TextInput,
    Modal
} from 'react-native';

import { dashboardStrings } from '../../../constants/strings';
import { styles } from './dashboard.styles';
import { helps } from '../../../data/dashboard';
import HelpCard from '../../controls/help-card';
import CustomHeader from '../../controls/custom-header';
import imgSearch from '../../../assets/images/Search.png'
import imgSort from '../../../assets/images/sort.png';
import imgFilter from '../../../assets/images/filter.png';
import SortModal from '../../controls/sort-model.js';
import FilterModal from '../../controls/filter-model.js';

export default function Dashboard(props) {
    var getRenderItem = ({ item, index }) => {
        return <HelpCard {...props}
            data={item}
            Key={index}
            onBackNavigateScreen={"DashboardDetail"}
        />
    }

    var getKeyExtractor = (item, index) => item.id;

    var getFooterComponent = () => {
        return <View style={{ height: 20 }} />
    }

    let [viewSortModal, setViewSortModal] = useState(false);
    let [viewFilterModal, setViewFilterModal] = useState(false);

    return (
        <View style={styles.container} >
            <CustomHeader navigation={props.navigation} showBackButton={false} title={"Upakar"}></CustomHeader>
            <View style={styles.viewsIcon}>
                <View style={styles.searchView}>
                    <Image style={styles.imgSearchStyle} source={imgSearch} ></Image>
                    <TextInput placeholder="Seach for help..." style={{ flex: 1 }} />
                </View>

            </View>
            {
                helps.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={helps}
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
            <View style={styles.footerView}>
                <TouchableOpacity onPress={() => setViewSortModal(true)} style={[styles.footerTileView, { marginLeft: 2 }]} >
                    <Image style={styles.footerTileImage} source={imgSort} ></Image>
                    <Text style={styles.footerTileText}>SORT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setViewFilterModal(true)} style={[styles.footerTileView, { marginRight: 2 }]} >
                    <Image style={styles.footerTileImage} source={imgFilter} ></Image>
                    <Text style={styles.footerTileText}>FILTER</Text>
                </TouchableOpacity>
            </View>
            {
                viewSortModal &&
                <SortModal
                    onCancel={() => setViewSortModal(false)}
                />
            }
            {
                viewFilterModal &&
                <FilterModal
                    onCancel={() => setViewFilterModal(false)}
                />
            }
        </View>
    );
}