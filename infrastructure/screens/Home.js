import { useState, useEffect, useCallback } from 'react';
import { View,Text,StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from 'react-native-paper';
import { Theme } from '../components/Theme';

export function SignUp({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);
    const [accountType, setAccountType] = useState('individul')

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Questrial_400Regular});
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    return (
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.leftContent}>
                        <Text styles={styles.headerText}>Hello, Zohreh!</Text>
                        <Text style={styles.subHeadText}>Femsle, 23</Text>
                    </View>
    
                    <View style={styles.rightContent}>
                        <FontAwesomeIcon 
                        icon={faBell} 
                        size={Theme.sizes[3]}
                        color={Theme.colors.ui.nurseGray}
                        />
                    </View>
                </View>
               <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder="search health service"/>
                    <FontAwesomeIcon 
                    icon={faSearch} 
                    size={20}
                    style={styles.searchIcon}
                />
               </View>
    
                <ImageBackground source={require('../.../asswets/images/nurse.jpg')}
                resizeMode='cover'
                style={styles.headerBg}
                borderRadius={10}
                >
                    <View style={styles.headerBgLayer}>
                        <Text style={styles.brandMessage}>Skilled medical professionals</Text>
                        <Text style={styles.brandMessage}>professionals</Text>
                        <Text style={styles.brandMessageSmall}>for all medical emergencies</Text>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
    
const style = StyleSheet.create({
        areaView: {
            flex: 1
        },
        container: {
            flex: 1,
            padding: Theme.sizes[3]
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        headerText: {
            fontSize: Theme.fonts.fontSize.h5,
            fontWeigth: 'bold'
        },
        subHeadText: {
            color: Theme.colors.text.secondary
        },
        rightContent: {
            width: 40,
            height0: 48,
            borderRadius: 8,
            jusrtifyContent: 'center',
            alignItems: 'center'
        },
        search: {
            borderWidth: 1,
            borderRadius: 50,
            borderColor: Theme.colors.bg.quartenary,
            paddingVertical: Theme.sizes[3],
            paddingLeft: 46
        },
        searchContainer: {
            marginVertical: Theme.sizes[4]
        },
        searchIcon: {
            position: 'absolute',
            top: 14,
            left: 14
        },
        headerBg: {
            height: 200,
        },
        headerBgLayer: {
            flex: 1,
            backgroundColor: 'rgba(189, 242, 213, 0.4)',
            padding: Theme.sizes[3],
            borderRadius: 10
        },
        brandMessage: {
            fontSize: Theme.fonts.fontSize.h3,
            fontWeigth: 'bold',
            color: 'white',
            shadowColor: 'black',
            shadowOffset: {width:4, height:4},
            shadowRadius: 4,
            shadowOpacity: 0.8,
            elevation: 5
    
        },
        brandMessageSmall: {
            fontSize: Theme.fonts.fontSize.tittle,
            marginTop: Theme.sizes[3]
        }
})