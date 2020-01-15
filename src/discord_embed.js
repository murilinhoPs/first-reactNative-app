
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

const DiscordEmbed = () => {

    const SCRIPT = `
    const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=100,height=200, initial-scale=.9, maximum-scale=.9, user-scalable=0, scrolling=no');
    meta.setAttribute('name', 'viewport');
    document.head.appendChild(meta);
    `;

    return (
        <View style={styles.container}>
            <WebView style={styles.webViewContainer}
                containerStyle={styles.webViewContainer}
                injectedJavaScript={SCRIPT}
                originWhitelist={['*']}
                textZoom={125}
                scrollEnabled='true'
                source={{
                    html:
                        `<body>
<div id="root" width='100'></div>
<script src="https://unpkg.com/react@16/umd/react.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.min.js"></script>
<script src="https://trianons.com.br/trianons-anos-20/wp-content/themes/Avada-Child-Theme/discord_chat/static/js/2.91c70911.chunk.js"></script>
<script src="https://trianons.com.br/trianons-anos-20/wp-content/themes/Avada-Child-Theme/discord_chat/static/js/main.0310d580.chunk.js"></script>
<script src="https://trianons.com.br/trianons-anos-20/wp-content/themes/Avada-Child-Theme/discord_chat/static/js/runtime-main.75a7f358.js"></script>
</body>`
                }}></WebView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingTop: 75,
    },
    webViewContainer: {
        flex: 2,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
       
    },
});

export default DiscordEmbed;