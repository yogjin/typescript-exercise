type Category = "한식" | "중식" | "일식" | "양식" | "분식";
interface Restaurant {
  category: Category;
  name: string;
  distance?: number;
  menu: string[];
}

interface Restaurants {
  restaurants: Restaurant[];
  add: (restaurant: Restaurant) => void;
  filterByCategory: (category: Category) => Restaurant[];
}
