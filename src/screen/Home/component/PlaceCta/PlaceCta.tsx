import React, { FC } from 'react';
import {
  View,
  View as ImageWrapper,
  View as ImageLabel,
  Image,
  StyleSheet,
  ImageProps,
} from 'react-native';

import {
  Text as PlaceText,
  Text as LocationText,
  Text as ImageLabelText,
} from 'components/base/Text';

import { colors } from 'globals';

export type PlaceCtaProps = {
  place: string;
  location?: string;
  image: ImageProps['source'];
  imageLabel?: string;
};

const PlaceCta: FC<PlaceCtaProps> = ({
  imageLabel,
  image,
  place,
  location,
}) => (
  <View style={styles.container}>
    <ImageWrapper style={styles.imageWrapper}>
      <Image style={styles.image} source={image} />
      {imageLabel && (
        <ImageLabel style={styles.imageLabel}>
          <ImageLabelText styles={styles.imageLabelText}>
            {imageLabel}
          </ImageLabelText>
        </ImageLabel>
      )}
    </ImageWrapper>
    <PlaceText styles={styles.place}>{place}</PlaceText>
    {location && (
      <LocationText styles={styles.location}>{location}</LocationText>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  imageWrapper: {
    flex: 1,
    height: 150,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
    resizeMode: 'cover',
  },
  imageLabel: {
    backgroundColor: colors.orange,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 16,
    paddingVertical: 10,
  },
  imageLabelText: {
    backgroundColor: colors.orange,
    color: colors.black,
    fontSize: 12,
    fontWeight: '400',
  },
  place: {
    color: colors.black,
    marginTop: 16,
  },
  location: {
    marginTop: 6,
    color: colors.grey,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default PlaceCta;