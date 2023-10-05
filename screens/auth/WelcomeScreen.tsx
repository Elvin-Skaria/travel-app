import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { HeadingText } from "../../components/StyledText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ui";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const { navigate }: NavigationProp<AuthNavigationType> = useNavigation();

  return (
    <Container>
      <StatusBar style="light" />
      <HeroImage
        source={require("../../assets/images/hero.jpg")}
        style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        imageStyle={{ opacity: 0.6 }}
      >
        <SafeAreaContainer>
          <TextContainer>
            <Extrabold>Welcome to Travenor</Extrabold>
            <Button
              title="Get started"
              onPress={() => navigate("Login")}
              icon={<Ionicons name="arrow-forward" size={16} />}
            />
          </TextContainer>
        </SafeAreaContainer>
      </HeroImage>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;

const HeroImage = styled(ImageBackground)`
  flex: 1;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TextContainer = styled(View)`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  position: absolute;
  bottom: 60px;
  gap: 16px;
  padding-horizontal: 20px;
`;

const Extrabold = styled(HeadingText)`
  font-size: 34px;
  color: #fff;
`;
