import React from 'react'
import { ButtonIconStyleProps, Container, Icon } from './styled'
import { MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

type props = TouchableOpacityProps & {
    type: ButtonIconStyleProps
    icon: keyof typeof MaterialIcons.glyphMap,
    
}

export function ButtonIcon({type = 'PRIMARY', icon, ...rest}: props) {
  return (
    <Container  {...rest}>
        
        <Icon 
            name={icon}
            type={type}
        />
        
    </Container>
  )
}
