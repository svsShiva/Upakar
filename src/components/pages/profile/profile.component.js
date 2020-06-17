import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { Rating } from 'react-native-ratings';


import { styles } from './profile.styles';
import CustomHeader from '../../controls/custom-header';
import { appColors } from '../../../constants/colors';
import imgProfilePic from "../../../assets/images/profile_pic.png";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { profiles } from '../../../data/profiles';

export default function Profile(props) {
    let profile;
    let user;

    console.log(props.state.globalReducer);

    if(props.state.profileReducer.data) {
        profile = props.state.profileReducer.data;
    }
    else {
        profile = props.state.globalReducer.loggedUserProfile;
        user = props.state.globalReducer.loggedUser;

        profile = {
            ...profile,
            ...user
        }
    }

    const getUserAddress = () => {
        return profile.address.line+", "+profile.address.city+", "+profile.address.state;
    }

    return (
        <View style={styles.container}>
            <CustomHeader navigation={props.navigation} showBackButton={true} title={"Profile"}></CustomHeader>
            <ScrollView
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps='handled'>
                <View style={styles.profilePicContainer}>
                    <Image
                        source={imgProfilePic}
                        style={styles.profilePic}
                    />
                    <View style={styles.nameContainer}>
                        <View style={styles.nameTextContainer}>
                            <Text style={styles.nameText}> {profile.name} </Text>
                            <Text style={styles.bioText}> {profile.bio}</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: "flex-start" }}>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>Edit</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.walletContainer}>
                        <Text style={styles.walletText}>Rs. {profile.walletBalance}</Text>
                    </View>
                    <View style={styles.helpDetailsContainer}>
                        <View style={styles.myHelpsContainer}>
                            <Text style={styles.myHelpNumberText}>{profile.totalHelps}</Text>
                            <Text style={styles.myHelpTitleText}>Helps</Text>
                        </View>
                        <View style={styles.myHelpsContainer}>
                            <Text style={styles.myHelpNumberText}>{profile.totalBids}</Text>
                            <Text style={styles.myHelpTitleText}>Bids</Text>
                        </View>
                        <View style={styles.myHelpsContainer}>
                            <Text style={styles.myHelpNumberText}>{profile.totalSuccessfulBids}</Text>
                            <Text style={styles.myHelpTitleText}>Successful Bids</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutTitleText}>About</Text>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Gender</Text>
                        <Text style={styles.aboutDetailDescriptionText}>{profile.gender}</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Email</Text>
                        <Text style={styles.aboutDetailDescriptionText}>{profile.email}</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Mobile</Text>
                        <Text style={styles.aboutDetailDescriptionText}>{profile.mobile}</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Occupation</Text>
                        <Text style={styles.aboutDetailDescriptionText}>{profile.occupation}</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Address</Text>
                        <Text style={[styles.aboutDetailDescriptionText, { width: 250 }]}>{getUserAddress()} </Text>
                    </View>
                </View>
                <View style={styles.skillContainer}>
                    <Text style={styles.skillTitleText}>Skills</Text>
                    <View style={styles.skillsDetailContainer}>
                        <Text style={styles.skillDetailTitleText}>Delivery</Text>
                        <Rating
                            type="custom"
                            ratingCount={5}
                            imageSize={20}
                            showRating={false}
                            startingValue={4}
                            readonly={true}
                            ratingColor={appColors.GRADIENT_LEFT}
                        />
                    </View>
                    <View style={styles.skillsDetailContainer}>
                        <Text style={styles.skillDetailTitleText}>IT Solutions</Text>
                        <Rating
                            type="custom"
                            ratingCount={5}
                            imageSize={20}
                            showRating={false}
                            startingValue={5}
                            readonly={true}
                            ratingColor={appColors.GRADIENT_LEFT}
                        />
                    </View>
                    <View style={styles.skillsDetailContainer}>
                        <Text style={styles.skillDetailTitleText}>Education</Text>
                        <Rating
                            type="custom"
                            ratingCount={5}
                            imageSize={20}
                            showRating={false}
                            startingValue={4.5}
                            readonly={true}
                            ratingColor={appColors.GRADIENT_LEFT}
                        />
                    </View>
                    <View style={styles.skillsDetailContainer}>
                        <Text style={styles.skillDetailTitleText}>Carpentry</Text>
                        <Rating
                            type="custom"
                            ratingCount={5}
                            imageSize={20}
                            showRating={false}
                            startingValue={3.5}
                            readonly={true}
                            ratingColor={appColors.GRADIENT_LEFT}
                        />
                    </View>
                    <View style={styles.skillsDetailContainer}>
                        <Text style={styles.skillDetailTitleText}>Plumbing</Text>
                        <Rating
                            type="custom"
                            ratingCount={5}
                            imageSize={20}
                            showRating={false}
                            startingValue={3}
                            readonly={true}
                            ratingColor={appColors.GRADIENT_LEFT}
                        />
                    </View>
                </View>

            </ScrollView>
        </View >
    );
}

