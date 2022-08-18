import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MealList } from '../components/MealList/MealList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You Don't Have Favorite Meal or Meals</Text>
    </View>
  }
  return <MealList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
})
