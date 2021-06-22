import React from 'react';
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';
import discordImage from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
    title: string
    subTitle?: string // ? define campo não obrigatorio
}

export function ButtonIcon({ title } : Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>

            <View style={styles.iconWrapper}>
                <Image source={discordImage} 
                style={styles.icon} 
                resizeMode='stretch' />
            </View>
            
            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

