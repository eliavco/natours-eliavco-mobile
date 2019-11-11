import React from 'react';
import { Text } from 'react-native';

export function NatText(props) {
  return (
    <Text {...props} selectable={true} style={[props.style, { fontFamily: 'lato-regular' }]} />
  );
}
