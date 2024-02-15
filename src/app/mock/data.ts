const data: {
  id: number;
  product_name: string;
  description: string;
  link: string;
  materialsHome: string[];
  materialsKit: string[];
  instructions: {
    steps: string;
    imgDir: string;
  }[];
}[] = [
  {
    id: 1,
    product_name: "Sodium Alginate worms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptatibus vel quod dolorem tempora odit molestiae ipsam sit eius!   Nesciunt delectus eaque maxime nulla, dolore natus inventore quibusdam    nihil quod in repellat ipsum ducimus praesentium libero quia quidem esse eligendi!",
    link: "https://www.youtube.com/embed/F9U-yoJbgWs?si=j9ZMtkGG37D32bCo",
    materialsHome: ["1 Bottle of Sodium", "1 clear Dish", "1 Pipette"],
    materialsKit: ["1 Bottle of Sodium", "1 clear Dish", "1 Pipette"],
    instructions: [
      {
        steps:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos quam quidem magnam quia eligendi nemo expedita distinctio, iste ea!",
        imgDir: "/img.jpg",
      },
      {
        steps:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos quam quidem magnam quia eligendi nemo expedita distinctio, iste ea!",
        imgDir: "/img.jpg",
      },
      {
        steps:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos quam quidem magnam quia eligendi nemo expedita distinctio, iste ea!",
        imgDir: "/img.jpg",
      },
    ],
  },
];

export default data;
