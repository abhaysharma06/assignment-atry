import React from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  VStack,
  Image,
  Spacer,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

export const Screen2 = () => {
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
        </Box>
      </HStack>
      <hr />
      <HStack>
        <Text mt="2" ml="4" fontSize="36px" color="#020655" fontWeight="700">
          Ongoing Events
        </Text>
      </HStack>

      <hr />

      <Flex flexDir="row" justify="space-between">
        <Text mt="2" ml="4" fontSize="12px" color="#7D7D7D" fontWeight="700">
          Fri, 24 Jan'22
        </Text>

        <Text mt="2" mr="4" fontSize="12px" color="#7D7D7D" fontWeight="700">
          STARTED: 19:00
        </Text>
      </Flex>

      <Flex flexDir="row" justify="space-between">
        <Text mt="2" ml="4" fontSize="22px" color="#090E82" fontWeight="700">
          Event Handler
        </Text>
        <Text mt="2" mr="4" fontSize="22px" color="#000000;" fontWeight="700">
          H:5
        </Text>
      </Flex>

      <Flex flexDir="row" m="4" gap="3">
        <Button
          h="7"
          bg="#090E82;"
          color="#FFFFFF"
          variant="outline"
          borderRadius="8"
        >
          <Text>Statistics</Text>
        </Button>
        <Button h="7" bg="#ECEDFF" color="#090E82" variant="outline">
          <Text>Event Details</Text>
        </Button>
        <Button h="7" bg="#ECEDFF" color="#090E82" variant="outline">
          <Text>Host Details</Text>
        </Button>
      </Flex>

      <Flex flexDir={isNotSmallScreen ? "row" : "column"}>
        <Box
          // width="max-content
          width="80"
          m="5"
          background="#FFFFFF"
          boxShadow="0px 0px 20px 2px rgba(9, 14, 130, 0.05);"
          borderRadius="8px;"
        >
          <Flex flexDir="row" justify="space-between">
            <Text
              mt="3"
              ml="3"
              fontStyle="normal;"
              fontSize="18px"
              color="#121212"
              fontWeight="600"
            >
              Final Count
            </Text>
            <Text mr="3" fontSize="36px" color="#090E82" fontWeight="700">
              500
            </Text>
          </Flex>
        </Box>
        <Box
          // width="max-content
          width="80"
          m="5"
          background="#FFFFFF"
          boxShadow="0px 0px 20px 2px rgba(9, 14, 130, 0.05);"
          borderRadius="8px;"
        >
          <Flex flexDir="row" justify="space-between">
            <Text
              mt="4"
              ml="3"
              fontStyle="normal;"
              fontSize="18px"
              color="#121212"
              fontWeight="600"
            >
              <Flex flexDir="row">
                <Image
                  mt="1"
                  mb="1"
                  mr="3"
                  src="wifi_tethering.png"
                  alt="wifi_tethering"
                />
                Live Count
              </Flex>
            </Text>
            <Text mr="3" fontSize="36px" color="#090E82" fontWeight="700">
              500
            </Text>
          </Flex>
        </Box>
        <Box
          // width="max-content
          width="80"
          m="5"
          background="#FFFFFF"
          boxShadow="0px 0px 20px 2px rgba(9, 14, 130, 0.05);"
          borderRadius="8px;"
        >
          <Flex flexDir="row" justify="space-between">
            <Text
              mt="4"
              ml="3"
              fontStyle="normal;"
              fontSize="18px"
              color="#121212"
              fontWeight="600"
            >
              <Flex flexDir="row">
                <Image mt="1" mb="1" mr="3" src="article.png" alt="article" />
                Negative List
              </Flex>
            </Text>
            <Text mr="3" fontSize="36px" color="#090E82" fontWeight="700">
              -500
            </Text>
          </Flex>
        </Box>
        <Box
          // width="max-content
          width="80"
          m="5"
          background="#FFFFFF"
          boxShadow="0px 0px 20px 2px rgba(9, 14, 130, 0.05);"
          borderRadius="8px;"
        >
          <Flex flexDir="row" justify="space-between">
            <Text
              mt="4"
              ml="3"
              fontStyle="normal;"
              fontSize="18px"
              color="#121212"
              fontWeight="600"
            >
              <Flex flexDir="row">
                <Image
                  mt="1"
                  mb="1"
                  mr="3"
                  src="pan_tool_alt.png"
                  alt="pan_tool"
                />
                Manual Count (Total)
              </Flex>
            </Text>
            <Text mr="3" fontSize="36px" color="#090E82" fontWeight="700">
              500
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex flexDir="row" m="4" gap="3">
        <Button
          bg="#ECEDFF"
          color="#090E82"
          variant="outline"
          borderRadius="8px"
        >
          <Flex flexDir="row">
            <Image mt="1" mb="1" mr="3" src="pie_chart.png" alt="chat" />
            <Text fontSize="14px" fontWeight="600">
              View Report
            </Text>
          </Flex>
        </Button>
      </Flex>

      <Flex flexDir={isNotSmallScreen ? "row" : "column"}>
        <Flex flexDir="row">
          <Text ml="4" color="#121212" fontSize="16px" fontWeight="500">
            MINIMUM COMMITMENT:
          </Text>
          <Text ml="1" color="#090E82" fontSize="16px" fontWeight="700">
            500
          </Text>
        </Flex>
        <Flex flexDir="row">
          <Text ml="4" color="#121212" fontSize="16px" fontWeight="500">
            ESTIMATED TURNOUT:
          </Text>
          <Text ml="1" color="#090E82" fontSize="16px" fontWeight="700">
            500
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir="row" m="4" gap="3">
        <Textarea w="md" placeholder="Add Notes" />
      </Flex>

      <Flex flexDir="row" m="4" gap="3">
        <Button
          w="md"
          color="#ECEDFF"
          bg="#090E82"
          variant="outline"
          borderRadius="8px"
        >
          <Flex flexDir="row">
            <Text fontSize="14px" fontWeight="600">
              End Now
            </Text>
          </Flex>
        </Button>
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
