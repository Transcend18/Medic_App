import { useState, useEffect, useCallback } from 'react';
import { View,Text,StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCross, faFileLines, faHouseMedical, faNewspaper, faPerson, faPills, faTruckMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { Button, TextInput } from 'react-native-paper';
import { Theme } from '../components/Theme';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

// diagnosis.consultation.clinic,ambulance,therapy,meds,articles 

const services = [
    {id: 1, serviceName: 'Diagnosis', serviceIcon: faStethoscope},
    {ID: 2, serviceName: 'Consult', serviceIcon: faUserDoctor},
    {ID: 3, serviceName: 'CLinic', serviceIcon: faHouseMedical},
    {ID: 4, serviceName: 'Ambulance', serviceIcon: faTruckMedical},
    {ID: 5, serviceName: 'Therapy', serviceIcon: faPerson},
    {ID: 6, serviceName: 'Prescription', serviceIcon: faFileLines},
    {ID: 7, serviceName: 'Medicine', serviceIcon: faPills},
    {ID: 7, serviceName: 'Articles', serviceIcon: faNewspaper},
];

const topProviders =[
    {id: 1, proName: 'Mayo Clinic', rating: [4, 5, 5, 5, 4, 3, 5], logo: ''},
    {id: 1, proName: '2 Maternity', rating: [2, 4, 8, 4, 3, 4, 9], logo: ''},
    {id: 1, proName: 'Bio Pharm', rating: [5, 2, 5, 2, 2, 1, 7], logo: ''},
    {id: 1, proName: 'Heart Clinic', rating: [1, 1, 5, 5, 4, 6, 2], logo: ''},
    {id: 1, proName: 'Sky Clinic', rating: [5, 6, 7, 9, 4, 6, 3], logo: ''},
    {id: 1, proName: 'Synapse Lab', rating: [6, 2, 2, 8, 4, 6, 4], logo: ''}
]

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
                <Text style={styles.servicesheading}>What do you need?</Text>
                <View style={styles.serviceRow}>
                    {
                        Object.values(services).map(item => {
                            <TouchableOpacity style={styles.services}>
                                <FontAwesomeIcon 
                                    icon={item.serviceIcon}
                                    size={30}
                                    style={{marginBottom: 6}}
                                    color='white'
                                />
                                <Text style={styles.serviceName}>
                                    {item.serviceName.length = 9 ? item.serviceName.slice(0,7) * '.': item.serviceName}
                                </Text>
                            </TouchableOpacity>
                        })
                    }
                </View>
                <View style={styles.topProvidersBlock}>
                    <FlatList 
                    data={topProviders}
                    renderItem={({item}) => (
                        <View style={styles.providerItem}>
                            <Image source={{uri: item.logo}} style={styles.providerLogo}/>
                        </View>
                    )}
                    keyExtractor={item => item.id}/>
                </View>
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
    },
    serviceheading: {
        fontSize: Theme.fonts.fontSize.h5,
        marginVertical: Theme.sizes[3]
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    service: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.ui.darkGreen,
        borderRadius: 10
    },
    serviceName: {
        color: 'white',
        fontWeight: 'bold'
    },
    topProvidersBlock: {
        marginVertical: Theme.sizes[3]
    },
    providerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: Theme.sizes[1],
        padding: Theme.sizes[4],
        backgroundColor: Theme.colors.ui.darkGreen
    },
    providerLogo: {
        width: 60,
        height: 60,
        marginRight: Theme.sizes[1]
    }
})