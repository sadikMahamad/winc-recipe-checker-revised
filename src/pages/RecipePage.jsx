import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
  Stack,
  Tag,
  Center,
  Wrap,
  Button,
  Tooltip,
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, clickFn }) => {
  const Nutrients = [
    recipe.totalNutrients.ENERC_KCAL,
    recipe.totalNutrients.FAT,
    recipe.totalNutrients.CHOCDF,
    recipe.totalNutrients.PROCNT,
    recipe.totalNutrients.CHOLE,
    recipe.totalNutrients.NA,
  ];

  return (
    <Center h="100%">
      <Card width={["90%", "70%"]} boxShadow="2xl" bg="White" cursor={"hand"}>
      
        <CardHeader>
          
          <Grid h='100px' templateColumns='repeat(2, 1fr)' gap="2vw">
            <GridItem  colSpan={1}> 
              <Tooltip label="Back to the recipepage">
                <Button bg="white" w="30px" h="50px" p={2} _hover={{ backgroundColor: "white" }} mt="10px" mb="10px">
                  <Image src="../src/assets/return.png" alt="Back to recipe page" onClick={() => clickFn()} transform={"scale {2"}/>
                </Button>
              </Tooltip>
            </GridItem>
            <GridItem  colSpan={1} maxW="60px" maxH="60px" mt="15px"> 
                <img src="../src/assets/winc.png"/>
            </GridItem>    
          </Grid>
          
        </CardHeader>
        <Grid  h='400px' >
         
          <Box
            backgroundImage={`url(${recipe.image})`}           
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            borderRadius={"5px"}
            objectFit="cover"
            border="1px"
            display="inline-flex"
          />  
             
        </Grid>
        <CardBody>

        <Box> 
          <Grid templateColumns='repeat(2, 1fr)' gap={70}>
            <Box pt='10px' pb='10px' pl='10px' pr='10px'>
              <Text fontSize="sm" color='grey'textTransform={"uppercase"} fontWeight={"semibold"}>
                {recipe.mealType.length > 1
                  ? recipe.mealType.join("/")
                  : recipe.mealType}{" "}
              </Text>
              <Text fontSize="sm" fontWeight={"bold"} pb={3}>
                {recipe.label}
              </Text>
              <Text fontStyle={"regular"} fontSize={"sm"}>
               Total cooking time:{recipe.totalTime} minutes
                <br></br>
                Servings:  {recipe.yield} servings
              </  Text>
                
              <Text fontWeight={"bold"} pt={3}>
                Ingredients:
              </Text>
              <List>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <ListItem key={ingredient.text} fontSize={["xs", "sm", "md"]}>
                      <Text>{ingredient.text}</Text>
                    </ListItem>
                  );
                })}
              </List>
              
              <Text fontWeight={"bold"} pt={3}>
                Total nutriënts:
              </Text>
              {Nutrients.map((nut) => {
                return (
                  <Stack>
                    <Text mt='10px' fontWeight={"bold"} textTransform={"uppercase"} fontSize="xs">
                        {nut.label}
                      </Text>
                      <Text mb={-2}>
                        {Math.round(nut.quantity)} {nut.unit}
                      </Text>
                    </Stack>
                  );
                })}
            </Box>

            <Box pt='10px' pb='10px' pl='10px' pr='10px'>
              <Text fontWeight={"semibold"} pt={3}>
                {recipe.healthLabels.length >= 1 ? "Health labels:" : ""}
              </Text>
              <Wrap>
                {recipe.healthLabels.map((label) => {
                  return (
                    <Tag key={label} size={"sm"} maxBlockSize={3} bg="purple.100" m={2} textAlign={"center"} color="purple.800" fontWeight={"semibold"} py={1} textTransform={"uppercase"}>
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Text fontWeight={"semibold"} pt={3}>
                {recipe.dietLabels.length >= 1 ? "Diet:" : ""}
              </Text>
              <Wrap>
                {recipe.dietLabels.map((label) => {
                  return (
                    <Tag key={label} size={"sm"} mt='10px' maxBlockSize={2} bg="green.100" textAlign={"center"} color="green.800" fontWeight={"semibold"} py={1} textTransform={"uppercase"}>
                      {label}
                    </Tag>
                  );
                })}
              </Wrap>
              <Text fontWeight={"semibold"} pt={3} color="red.800">
                {recipe.cautions.length >= 1 ? "Cautions:" : ""}
              </Text>
              <Tooltip label="Check for allergy">
                <WarningIcon w={recipe.cautions.length >= 1 ? 5 : 0} h={5} color="red.500" transform={"translateY(15px)"}/>
              </Tooltip>
              <Wrap>
                {recipe.cautions.map((warning) => {
                  return (
                    <Tag key={warning} size={"sm"} mt='30px' bg="red.100" textAlign={"center"} color="red.600" fontWeight={"bold"} py={1} textTransform={"uppercase"} wrap={"wrap"}>
                      {warning}
                    </Tag>
                  );
                })}
              </Wrap>
            </Box>  
          </Grid> 
        </Box>
        
        </CardBody>

        <Box>
          <Text
            textAlign="left" fontWeight={300} fontSize={15} mt={[15, 45]} mb={[15, 45]} maxWidth={500} marginLeft={30}>
            © 2024 <strong>Winc Recipe Checker</strong>
          </Text>
        </Box>
      </Card>
    </Center>
  );
};
