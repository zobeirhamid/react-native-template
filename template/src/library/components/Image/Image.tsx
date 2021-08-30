import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import withFadeInProp, {
  FadeInProp,
} from 'library/higherOrderComponents/withFadeInProp';

export type ImageProps = FastImageProps & FadeInProp;

const Image: React.FC<ImageProps> = props => {
  return <FastImage {...props} />;
};

Image.displayName = 'Image';

export default Image;
