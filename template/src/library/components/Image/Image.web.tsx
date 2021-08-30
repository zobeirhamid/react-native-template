import React from 'react';
import {Image as RNImage, ImageProperties} from 'react-native';
import withFadeInProp, {
  FadeInProp,
} from 'library/higherOrderComponents/withFadeInProp';

export type ImageProps = ImageProperties & FadeInProp;

const Image: React.FC<ImageProps> = props => {
  return <RNImage {...props} />;
};

Image.displayName = 'Image';

export default Image;
