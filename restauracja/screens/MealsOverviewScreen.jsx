import { Text, View, StyleSheet, FlatList} from 'react-native';
import { MEALS, CATEGORIES} from '../data/dummy-data' ;
import MealItem from '../components/MealItem';

function MealsOverviewScreen (props){
    const id = props.route.params.categoryId
    const displayedMeals = MEALS.filter( (meatItem)=>{
        return meatItem.categoryIds.indexOf(id) >= 0 ;
    })

    function renderMealItem(itemData){
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
        }

        return <MealItem {...mealItemProps} />    }

    return(
        <View>
            <FlatList data={displayedMeals}
                      keyExtractor={(item)=>item.id}
                      renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen;