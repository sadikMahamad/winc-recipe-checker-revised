import React from 'react';
import {
  CardBody,
  Box,
  Stack,
  Heading,
  Text,
  Card,
  Image,
  CardHeader,
  Center,
} from "@chakra-ui/react";

// labels
const Label = ({ children, color }) => (
  <Center>
    <Text
      textAlign="Center"
      fontSize="sm"
      textTransform={"uppercase"}
      w="80%"
      m="1"
      p="1"
      borderRadius="5px"
      bgColor={color}
    >
      {children}
    </Text>
  </Center>
);

// Recipecard, background, image and contents
export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <>
      <Card
        bg="white"
        boxShadow="2xl"
        borderRadius="5px"
        alignItems="center"
        onClick={() => clickFn(recipe)}
        maxWidth="300px"
        mt="2rem"
      >
        <CardBody>
          <Stack spacing={1}>
            <Box mb="150px" h="20%" overflow="hidden">
              <Image src={recipe.image} alt={recipe.label} objectFit="cover" borderRadius="5px" borderBottomRadius="0%" position="absolute" top="0" left="0" h="175px" w="100%"/>
            </Box>
            <Box>
              <Center>
                <Text textTransform={"uppercase"} mt="3" fontSize="sm">
                  {recipe.mealType.join(",")}
                </Text>
              </Center>
            </Box>
            <CardHeader>
              <Center>
                <Heading mt="-2" textAlign="center" size="lm">
                  {recipe.label}
                </Heading>
              </Center>
            </CardHeader>
            <Box>
              <Center>
                <Text fontSize="md">Dish: {recipe.dishType.join(",")}</Text>
              </Center>
            </Box>
            <Box>
              {recipe.healthLabels.includes("Vegan") && (
                <Center pt="1">
                  <Text
                    mt="5"
                    padding="1"
                    textAlign="center"
                    fontSize="sm"
                    textTransform={"uppercase"}
                    w="80%"
                    borderRadius="5px"
                    bgColor="purple.200"
                  >
                    Vegan
                  </Text>
                </Center>
              )}
              {recipe.healthLabels.includes("Vegetarian") && (
                <Center pt="1">
                  <Text
                    padding="1"
                    textAlign="center"
                    fontSize="sm"
                    textTransform={"uppercase"}
                    w="80%"
                    borderRadius="5px"
                    bgColor="green.300"
                  >
                    Vegetarian
                  </Text>
                </Center>
              )}
            </Box>

            <Box>
              <Center>
                <Text
                  textAlign="center"
                  padding="2"
                  fontSize="sm"
                  textTransform={"uppercase"}
                  w="80%"
                  borderRadius="5px"
                  bgColor="green.100"
                >
                  {recipe.dietLabels.join(", ")}
                </Text>
              </Center>
            </Box>
            {recipe.cautions.length > 0 && (
              <Box>
                <Center>
                  <Heading fontSize="sm" p="3">
                    {" "}
                    Cautions:
                  </Heading>
                </Center>
                {recipe.cautions.map((caution, allergy) => (
                  <Label key={allergy} color="red.200">
                    {caution}
                  </Label>
                ))}
              </Box>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
