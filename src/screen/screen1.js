import React from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  VStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Card } from "../components/Card";

export const Screen = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <HStack>
        <Box width="full" pl="5" mt="10">
          <Flex flexDir="row" justify="space-between">
            <Text fontSize="22px" fontWeight="600" color="#020655">
              Hi, Username
              <Text fontSize="12px" color="#7D7D7D" fontWeight="700">
                VENUE NAME
              </Text>
            </Text>
            <Flex flexDir="row">
              <Image
                mr="3"
                background="whiteAlpha.100"
                rounded="full"
                src="profile.png"
                alt="profile"
              />
              <span
                style={{
                  backgroundColor: "#B71B42",
                  color: "white",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  color: "white",
                  position: "absolute",
                  top: "40px",
                  right: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "7px",
                  fontWeight: "800",
                }}
              >
                1
              </span>
            </Flex>
          </Flex>
          <hr />
        </Box>
      </HStack>

      <HStack>
        <Text m="3" fontSize="36px" color="#020655" fontWeight="700">
          Ongoing Events
        </Text>
      </HStack>
      <hr />
      <Flex>
        <Card />
      </Flex>
      {isNotSmallScreen ? (
        ""
      ) : (
        <Flex>
          <Box
            position="static"
            p="2"
            w="full"
            background="#FFFFFF;"
            boxShadow="0px 2px 15px 2px rgba(9, 14, 130, 0.3);"
            borderRadius="20px 20px 0px 0px;"
            bottom={0}
            right={0}
            left={0}
          >
            <Flex flexDir="row" justify="space-around">
              <VStack>
                <Image src="today.png" alt="Rectangle 1" />
                <Text color="#090E82" fontSize="10px" fontWeight="700">
                  Ongoing{" "}
                </Text>
              </VStack>
              <VStack>
                <Image src="add_circle.png" alt="Rectangle 2" />
                <Text color="#7D7D7D;" fontSize="10px" fontWeight="700">
                  Create
                </Text>
              </VStack>
              <VStack>
                <Image src="event_available.png" alt="Rectangle 2" />
                <Text color="#7D7D7D;" fontSize="10px" fontWeight="700">
                  Existing
                </Text>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};
