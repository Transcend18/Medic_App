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

export function Login({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);
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
                <View style={styles.brandBlock}>
                    <FontAwesomeIcon icon={faCross} 
                        size={Theme.sizes[4]}
                        color={Theme.colors.brand.brandRed}/>
                    <Text style={styles.brandName}>medic</Text>
                </View>
                <View style={styles.loginBlock}>
                    <TextInput style={styles.input}
                        label={'Email address'}
                        mode={'outlined'}
                        outlineColor={Theme.colors.ui.nurseGreen}
                        activeOutlineColor={Theme.colors.bg.quartenary}
                        keyboardType= 'email-address' >
                    </TextInput>
                    <TextInput style={styles.input}
                        label={'Password'}
                        mode={'outlined'}
                        outlineColor={Theme.colors.ui.nurseGreen}
                        activeOutlineColor={Theme.colors.bg.quartenary}
                        secureTextEntry={true}>
                    </TextInput>
                </View>
                <Button mode='contained' 
                        color={Theme.colors.ui.nurseGray} 
                        style={{paddingVertical:Theme.sizes[3]}}
                        onPress={() => navigation.navigate('Home')}
                        >Signin
                </Button>
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
        alignItems: 'center',
        marginTop: 20
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
    },
    loginBlock: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 80 
    },
    input: {
        marginBottom: 30
    }
})