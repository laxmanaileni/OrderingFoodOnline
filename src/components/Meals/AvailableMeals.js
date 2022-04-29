import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Hyderbad Biryani",
    description: "Hyderbad Chicken Biryani with Raitha and Mirchika Salan",
    price: 230,
  },
  {
    id: "m2",
    name: "Mutton Biryani",
    description: "Hyderbad Mutton Biryani with Raitha and Mirchika Salan",
    price: 250,
  },
  {
    id: "m3",
    name: "Meethi Mutton",
    description: "Fresh mutton and tasty dish",
    price: 230,
  },
  {
    id: "m4",
    name: "Kadai Chicken",
    description: "Chicken curry which we can eat with Naan",
    price: 230,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      id={meal.id}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
