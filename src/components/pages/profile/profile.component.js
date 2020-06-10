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

export default function Profile(props) {
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
                            <Text style={styles.nameText}> Sainag Chunduru</Text>
                            <Text style={styles.bioText}> Here to do my bit to mankind :)</Text>
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
                        <Text style={styles.walletText}>Rs. 438</Text>
                    </View>
                    <View style={styles.helpDetailsContainer}>
                        <View style={styles.myHelpsContainer}>
                            <Text style={styles.myHelpNumberText}>58</Text>
                            <Text style={styles.myHelpTitleText}>Helps</Text>
                        </View>
                        <View style={styles.myHelpsContainer}>
                            <Text style={styles.myHelpNumberText}>58</Text>
                            <Text style={styles.myHelpTitleText}>Bids</Text>
                        </View>
                        <View style={styles.myHelpsContainer}>
                            <Text style={styles.myHelpNumberText}>58</Text>
                            <Text style={styles.myHelpTitleText}>Accepted Bids</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutTitleText}>About</Text>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Gender</Text>
                        <Text style={styles.aboutDetailDescriptionText}>Male</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Email</Text>
                        <Text style={styles.aboutDetailDescriptionText}>sainagchunduru23@gmail.com</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Mobile</Text>
                        <Text style={styles.aboutDetailDescriptionText}>9000549236</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Occupation</Text>
                        <Text style={styles.aboutDetailDescriptionText}>Software Engineer</Text>
                    </View>
                    <View style={styles.aboutDetailContainer}>
                        <Text style={styles.aboutDetailTitleText}>Address</Text>
                        <Text style={[styles.aboutDetailDescriptionText, { width: 250 }]}>Plot No: 62, Creative Nagar, ECIL Post, Hyderabad, Telangana. </Text>
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

