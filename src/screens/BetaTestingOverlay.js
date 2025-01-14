import carrot from "../../assets/TechnologyHug/beta_test/down_arrow.png";
import threeDots from "../../assets/TechnologyHug/beta_test/three_dots.png";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import {
    ChevronRightIcon,
    Center,
    HStack,
    Text,
    Pressable,
    Image,
    Divider,
    ScrollView,
    Container,
    Button
} from "native-base";

export default function BetaTestingOverlay() {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    // Dismiss modal/overlay on swipe up
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    //   onSwipeUp={() => setModalVisible(false)}
    >
      <TouchableOpacity style={styles.beta_test} justifyContent="center" onPress={() => setModalVisible(true)} >
        <Image h="180" w="380" source={require("../../assets/TechnologyHug/beta_test/beta_button.png")} alt="Beta Button"/>
      </TouchableOpacity > 
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationInTiming={250}
        animationOutTiming={250}
        backdropTransitionOutTiming={0}
      >
        <View style={styles.modalNavView}>
          {/* Modal Nav Bar */}
          <HStack style={styles.modalNav}>
            <HStack space={4} alignItems="center">
              <Pressable onPress={() => setModalVisible(false)}>
                <Image source={carrot} alt="carrot"></Image>
              </Pressable>
              <Divider thickness="2" orientation="vertical" />
              {/* <VStack>
                <Text style={styles.modalViewText} bold fontSize="xs">
                  Insert Name Here
                </Text>
                <Text style={styles.modalViewText} fontSize="xs">
                  Title
                </Text>
              </VStack> */}
            </HStack>

            <HStack style={styles.modalNavRightSide} space={5}>
              {/* <Pressable onPress={() => setModalVisible(false)}>
                <Image source={bookmark} alt="bookmark"></Image>
              </Pressable> */}
              <Pressable onPress={() => setModalVisible(false)}>
                <Image source={threeDots} alt="menu"></Image>
              </Pressable>
            </HStack>
          </HStack>
        </View>
        
        <View style={styles.modalView}>
          {/* Logo Image of Hug Community */}
          <View style = {styles.betaLogo}>
            <Image h="190" w="420" bg="light.300" source={require("../../assets/TechnologyHug/beta_test/beta_logo.png")} alt="Beta Logo"/>
          </View>

          {/* Learn More Button */}
          <Container style={styles.learnMoreButtonSection}>
            <Button style={styles.learnMoreButton} bg ="black" rounded="3xl" onPress={() => setModalVisible(false)}>
              <Text bold fontSize="md" color="white">
                Learn More
              </Text>
            </Button>
          </Container>

          {/* Lens section */}
          <Container style={styles.lens_section}>
            <Container justifyContent = "space-between" flexDirection= "row" marginBottom={1}>
                <Text bold fontSize="lg" color="white">
                Lenses
                </Text>
                <TouchableOpacity>
                    <Container borderWidth={1} borderColor="white" marginLeft = {195} flexDirection= "row" alignContent="center" rounded="3xl">
                        <Text bold fontSize="md" color = "light.300"> Explore Lenses </Text>
                        <ChevronRightIcon size="3" color = "light.300" alignSelf="center"/>
                    </Container>
                </TouchableOpacity>
            </Container>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center" marginTop={2} marginBottom={2}>
                <TouchableOpacity>
                    <Center style={styles.lens} rounded="2xl">
                        <Image h="270" w="115" source={require("../../assets/TechnologyHug/beta_test/lens1.png")} alt="Lens 1"/>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Center style={styles.lens} rounded="2xl">
                        <Image h="270" w="115" source={require("../../assets/TechnologyHug/beta_test/lens2.png")} alt="Lens 2"/>
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Center style={styles.lens} rounded="2xl">
                        <Image h="270" w="115" source={require("../../assets/TechnologyHug/beta_test/lens3.png")} alt="Lens 3"/>
                    </Center>
                </TouchableOpacity>
              </HStack>
            </ScrollView>
          </Container>

          {/* Games and Minis section */}
          <Container style={styles.game_mini_section}>
            <Container justifyContent = "space-between" flexDirection= "row">
                <Text bold fontSize="lg" color="white">
                Games and Minis
                </Text>
            </Container>
            <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
                <Center style = {styles.game_mini}>
                    <Image h="220" w="390" source={require("../../assets/TechnologyHug/beta_test/game_mini.png")} alt="Games and Minis"/>
                </Center>
            </ScrollView>
          </Container>

        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    beta_test: {
        minWidth: '100%',
        padding: 10,
        marginLeft: 0,
      },
    game_mini_section: {
        flex: 6.2,
        minWidth: '100%',
        padding: 10,
        marginLeft: 0,
        marginTop: -10,
    },
    game_mini: {
        height: 226,
        width: 395,
        bg:"black",
        rounded:"2xl",
        borderWidth:"1",
        borderColor:"white",
        borderRadius: "15px",
        flexDirection: "row",
        paddingTop : 10,
        paddingBottom : 10,
      },
    lens_section: {
        flex: 6.2,
        minWidth: '100%',
        padding: 10,
        marginLeft: 0,
        marginTop: -10,
    },
    lens: {
        height: 230,
        weight: 115,
    },
    modalNavView: {
        marginTop: -30,
        width: 420,
        flex: 1,
        alignSelf: "center",
        
    },
    modalView: {
        marginTop: -30,
        width: 420,
        flex: 6,
        alignSelf: "center",
        backgroundColor: "#000",
        
    },

    modalViewText: {
        color: "#fff",
    },

    modalNav: {
        height: 40,
        marginLeft: 16,
        marginTop: 60,
        justifyContent: "space-between"
    },

    modalNavRightSide: {
        marginLeft: 140,
    },

    modalMoreButton: {
        alignSelf: "center",
        marginTop: -45,
    },

    betaLogo: {
        flex: 2,
        minWidth: '100%',
        alignItems: 'center',
    },

    learnMoreButtonSection: {
        flex: 3,
        minWidth: '100%',
        justifyContent: "center",
        padding: 10,
        marginTop: 60,
        marginBottom: -40,
    },

    learnMoreButton: {
        textAlignVertical: "center",
        justifyContent: 'center',
        alignSelf: "center",
        borderWidth: 1,
        borderColor:"white",
    },

});
