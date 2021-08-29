import React from 'react';
import {View, Text} from 'react-native';

export interface ButtonProps {
  title: string;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({title, active}) => {
  const style = React.useMemo(() => {
    return {
      backgroundColor: 'red',
      opacity: active ? 1 : 0.5,
    };
  }, [active]);

  return (
    <View style={style}>
      <Text>{title}</Text>
    </View>
  );
};

export default Button;
