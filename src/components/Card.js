import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex, VStack, Image, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { mockData } from "../mock/Mock";

export const Card = () => {
  const [cardData, setCardData] = React.useState(mockData);
  const [isNotSmallScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Flex m="2" gap={2} flexDir={isNotSmallScreen ? "row" : "column"}>
        {cardData.map((item) => (
          <Box
            w="340px"
            h="196px"
            bg="#FFFFFF"
            border="1px solid #E0E0E0"
            shadow="0px 0px 20px 2px rgba(9, 14, 130, 0.05)"
            borderRadius="16px"
            p={4}
          >
            <Flex flexDir="row" justify="space-between">
              <Flex flexDir="column">
                <Text fontSize="26px" fontWeight="600" color="#020655">
                  {item.title}
                  <Text color="#7D7D7D" fontSize="16px" fontWeight="500">
                    {item.title2}
                  </Text>
                </Text>

                <Text mt="6" fontSize="14px" color="#090E82;" fontWeight="500">
                  Started: {item.time2}
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Text
                  mt="2"
                  ml="14"
                  color="#7D7D7D"
                  fontSize="12px"
                  fontWeight="500"
                >
                  {item.time}
                </Text>
                <Flex flexDir="row">
                  <Flex flexDir="column">
                    <Box
                      mt="4"
                      mr="2"
                      w="60px"
                      h="54px"
                      background="#E1F1FF;"
                      border="2px solid #9EA9C8;"
                      borderRadius="8px;"
                    >
                      <Text
                        align="center"
                        fontSize="24px"
                        color="#9EA9C8;"
                        fontWeight="700"
                        p="2"
                      >
                        72
                      </Text>
                    </Box>
                    <Text fontSize="9px" fontWeight="600" align="center">
                      Min. Commit
                    </Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Box
                      mt="4"
                      w="60px"
                      h="54px"
                      background="#FFF3DC;"
                      border="2px solid #ECC446;"
                      borderRadius="8px;"
                    >
                      <Text
                        align="center"
                        fontSize="24"
                        color="#ECC446;"
                        fontWeight="700"
                        p="2"
                      >
                        72
                      </Text>
                    </Box>
                    <Text fontSize="9px" fontWeight="600" align="center">
                      Live Count
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex flexDir="row" justify="space-between" gap="6" mt="3">
              <Text mt="2" fontSize="24px" color="#020655" fontWeight="600">
                {item.time3}
              </Text>
              <Button
                w="50px"
                h="28px"
                mt="3"
                p={2}
                background="#ECEDFF;"
                border="1px solid #090E82;"
                borderRadius="8px;"
              >
                <Flex flexDir="row">
                  <Image pr="1" src="notifications.png" alt="notification" />
                  <Text fontSize="14px" fontWeight="500">
                    02
                  </Text>
                </Flex>
              </Button>
              <Button background="#090E82;" borderRadius="8px;">
                <Text color="#FFFFFF" fontSize="14px" fontWeight="700" p="7">
                  <Link to="/manage-event" children={mockData}>
                    Manage Event
                  </Link>
                </Text>
              </Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
};
