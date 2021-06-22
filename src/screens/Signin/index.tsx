import React from 'react';
import { 
    Text, 
    View,
    Image,
    StatusBar
} from 'react-native';

import { styles } from './styles';
import ilustrationImage from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';


export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />
            <Image source={ilustrationImage} 
            style={styles.image} 
            resizeMode='stretch'
        />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas facilmente.
                </Text>

                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
            </View>

            <ButtonIcon title="Entrar com Discord" />
        </View>
    )
}

