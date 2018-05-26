//------------------------------------------------------------------------------
// Author: Shenouda Bertel <shenoudab@mobiThought.com>
// Date: 25.05.2018
//------------------------------------------------------------------------------

import React, { Component } from 'react';
import {
  TouchableOpacity, TouchableNativeFeedback, View, Platform, StyleSheet
} from 'react-native';

export default function Touchable({onPress, ...props}) {
  if(Platform.OS !== 'ios')
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View {...props}/>
      </TouchableNativeFeedback>
    );
  else
    return (
      <TouchableOpacity onPress={onPress} {...props} />
    );
}
