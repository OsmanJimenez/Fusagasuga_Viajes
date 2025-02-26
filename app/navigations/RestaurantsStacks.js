import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreen from "../screens/Restaurants";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant";
import RestaurantScreen from "../screens/Restaurants/Restaurant";
import AddReviewRestaurantScreen from "../screens/Restaurants/AddReviewRestaurant";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: () => ({
      title: "Lugares"
    })
  },
  AddRestaurant: {
    screen: AddRestaurantScreen,
    navigationOptions: () => ({
      title: "Nuevo Lugar"
    })
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: props => ({
      title: props.navigation.state.params.restaurant.name
    })
  },
  AddReviewRestaurant: {
    screen: AddReviewRestaurantScreen,
    navigationOptions: () => ({
      title: "Nuevo comentario"
    })
  }
});

export default RestaurantsScreenStacks;
