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
                <ScrollView>
                <View style={styles.brandBlock}>
                        <FontAwesomeIcon icon={faCross} 
                        size={Theme.sizes[4]}
                        color={Theme.colors.brand.brandRed}/>
                        <Text style={styles.brandName}>medic</Text>
                    </View>
                    <Text style={styles.headText}>Get Started with</Text>
                    <View style={styles.btnGroup}>
                        <Button mode='contained' 
                        color={Theme.colors.ui.nursePurple} 
                        style={{paddingVertical:Theme.sizes[3], marginRight: Theme.sizes[2]}}
                        onPress={() => {
                            setAccountType('individual')
                        }}
                        >Individual</Button>
                        
                        <Button mode='contained' 
                        color={Theme.colors.ui.nurseGray} 
                        style={{paddingVertical:Theme.sizes[3]}}
                        onPress={() => {
                            setAccountType('provider')
                        }}
                        >Service Provider</Button>
                    </View>
                    <Text 
                    style={styles.subHeading}>{accountType == 'individual' ? 'Create an Individual Account' : "Create a Service Provider Account"} 
                    </Text>
                    <TextInput label={'First name'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    />
                    <TextInput label={'Last name'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    />
                    <TextInput label={'Phone Number'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    keyboardType='phone-pad'
                    />
                    <TextInput label={'Email'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    keyboardType='email-address'
                    />
                    <TextInput label={'Create Password'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    secureTextEntry={true}
                    />
                    <TextInput label={'Confirm Password'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    secureTextEntry={true}/>
                    

                    {/* only show input if accountType is provider */}
                    {accountType == 'provider'?
                    <TextInput label={'Describe your Work'}
                    mode={'outlined'}
                    outlineColor={Theme.colors.ui.nurseGreen}
                    activeOutlineColor={Theme.colors.bg.quartenary}
                    multiline={true}
                    />
                    :
                    null
                    }
                    <Button mode='contained' 
                        color={accountType=='provider'?  Theme.colors.ui.nurseGray : Theme.colors.ui.nursePurple} 
                        style={{paddingVertical:Theme.sizes[3], 
                            marginTop: Theme.sizes[2]}}
                        >Create account
                    </Button>
                        {/* navigating to login screen */}
                        <View style={styles.TextInLine}>
                            <Text style={styles.ctaText}>Already have an Account </Text>
                            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                                <Text 
                                style={[styles.ctaText, 
                                    {color:  Theme.colors.ui.nur}]}>
                                Go to login</Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
    },
    container:{
        flex:1,
        padding:Theme.sizes[3],
    },
    brandBlock: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    brandName: {
        fontSize: Theme.fonts.fontSizePoint.h4,
        fontFamily: 'Questrial_400Regular'
    },
    headText: {
        fontSize: Theme.fonts.fontSizePoint.h3,
        marginVertical: Theme.sizes[4]
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    subHeading: {
        fontSize: Theme.fonts.fontSizePoint.h3,
        marginVertical: Theme.sizes[4]
    },
    TextInLine: {
        flexDirection: 'row',
        marginVertical: Theme.sizes[2]
    },
    ctaText: {
        fontSize: Theme.fonts.fontSize.body
    }
})