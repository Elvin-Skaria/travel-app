import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    HeadingText,
    RegularText,
} from "../../../components/StyledText";

import { PlacesData } from "../../../constants/places";

interface IProps {
    route: {
        params: any;
    }
}


const PlaceDetailScreen = (props: IProps) => {
    return (
        <Container>
            <ImageContainer>
                <PlaceImage source={PlacesData[props.route.params.placeId].image} alt="image" resizeMode="cover" />
            </ImageContainer>
            <HeadingText style={{ fontSize: 24 }}>
                {PlacesData[props.route.params.placeId].location}
            </HeadingText>
            <RegularText>
                {PlacesData[props.route.params.placeId].desc}
            </RegularText>
            <RegularText>
                {PlacesData[props.route.params.placeId].subDesc}
            </RegularText>
        </Container>
    )
}

export default PlaceDetailScreen;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const ImageContainer = styled(View)`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  border-width: 0.3px;
  border-color: #d3d3d3;
  margin-bottom: 10px;
`;

const PlaceImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;