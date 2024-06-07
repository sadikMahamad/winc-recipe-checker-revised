import React from 'react';
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [chosenRecipe, SetChosenRecipe] = useState();
  return (
    <Box bg="blue.500" w="100vw" h="100%">
      {chosenRecipe ? (
        <RecipePage recipe={chosenRecipe} clickFn={SetChosenRecipe} />
      ) : (
        <RecipeListPage clickFn={SetChosenRecipe} />
      )}
    </Box>
  );
};
