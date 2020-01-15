import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

const DiscordApp = () => {

    const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=100, initial-scale=.9, maximum-scale=.9, user-scalable=0, scrolling=no');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
    `;

    return (
        <View style={styles.container}>

            <WebView
                style={styles.webViewContainer2}
                containerStyle={styles.webViewContainer2}
        injectedJavaScript={SCRIPT}
                originWhitelist={['*']}
                textZoom={140}
                scrollEnabled='true'
                source={{
                    html:
                        `<iframe 
                     src='https://discordapp.com/widget?id=432580928234324008&theme=dark' 
                     scrolling:'false' 
                     width='401'
                      height='550' 
                     frameBorder='0'  
                     allowtransparency='true'  
                     allowFullScreen='false'></iframe>`
                }}></WebView>
        </View>
    );
}
//html: "<iframe src='https://discordapp.com/widget?id=432580928234324008&theme=dark' width='400' height='700' position='unset'></iframe>"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingTop: 75,
    },
    webViewContainer: {
        flex: 1,
        width: 885,
        height: 800,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        //aspectRatio: 2.6
    },
    webViewContainer2: {
        flex: 1,
        // width: 800,
        //height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
       
        aspectRatio: 1.8
    },
});

export default DiscordApp;