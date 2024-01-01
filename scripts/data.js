//product data
const productList =[
    {
        id:1,
        image: "assets/sneaker1.webp",
        title : "Air Jordan 1 (Red)",
        type : "Sneaker",
        desc: "Experience the perfect synergy of style and functionality in these sneakers, meticulously designed to enhance your every move with comfort, support, and a dash of urban chic.",
       price: 2500,
      discountPercentage: 10,
      size: [5,6,7,8]
    
    },
    {
        id:2,
        image: "assets/sneaker2.webp",
        title : "Air Jordan 1 (Black)",
        type : "Sneaker",
        desc: "Stride with confidence in these sleek sneakers, expertly crafted for a harmonious balance of fashion and performance, ensuring you stand out with each step.",
       price: 2500,
      discountPercentage: 10,
      size: [5,6,8]
    
    },
    {
      id:3,
      image: "assets/sneaker3.webp",
      title : "AIR MAX 97 'WHITE/WOLF GREY'",
      type : "Sneaker",
      desc: "Elevate your steps with cutting-edge style and superior cushioning in these dynamic sneakers, crafted for unmatched performance and trendsetting flair.",
     price: 2500,
    discountPercentage: 10,
    size: [5,6,7,8]
  
  },
  {
    id:4,
    image: "assets/sneaker4.webp",
    title : "AIR MAX 90 TD 'ANTHRACITE DARK GREY'",
    type : "Sneaker",
    desc: "Stride with confidence in these sleek sneakers, expertly crafted for a harmonious balance of fashion and performance, ensuring you stand out with each step.",
   price: 3000,
  discountPercentage: 20,
  size: [5,6,7,8]

},
{
  id:5,
  image: "assets/sneaker5.webp",
  title : "Nike Free Huarache Light – Wolf Grey – Infrared",
  type : "Sneaker",
  desc: "Elevate your steps with cutting-edge style and superior cushioning in these dynamic sneakers, crafted for unmatched performance and trendsetting flair.",
 price: 3000,
discountPercentage: 10,
size: [5,6,8]

},
{
  id:6,
  image: "assets/sneaker6.webp",
  title : "Nike Free Rn Flyknit 2017 Red",
  type : "Sneaker",
  desc: "Unleash your potential in these modern sneakers, where innovation meets fashion, providing an unparalleled fusion of comfort, durability, and style.",
 price: 3000,
discountPercentage: 30,
size: [5,6,8]

},
{
  id:7,
  image: "assets/sneaker7.webp",
  title : "AIR FORCE 1 CARHARTT WIP",
  type : "Sneaker",
  desc: "Stride with confidence in these sleek sneakers, expertly crafted for a harmonious balance of fashion and performance, ensuring you stand out with each step..",
 price: 3000,
discountPercentage: 20,
size: [5,6,8]

},
{
  id:8,
  image: "assets/sneaker8.webp",
  title : "Nike Air Force 1 High “Golden Tan",
  type : "Sneaker",
  desc: "Unleash your potential in these modern sneakers, where innovation meets fashion, providing an unparalleled fusion of comfort, durability, and style",
 price: 3000,
discountPercentage: 30,
size: [5,6,8]

},
{
  id:9,
  image: "assets/workrun1.webp",
  title : "PowerStrides",
  type : "WorkoutAndRunning",
  desc: "Dominate your fitness journey in these high-performance workout shoes, where durability meets style for an unbeatable combination of comfort and support.",
 price: 2000,
discountPercentage: 10,
size: [5,6,8]

},
{
  id:10,
  image: "assets/workrun2.webp",
  title : "FlexFury",
  type : "WorkoutAndRunning",
  desc: "Command the gym in these powerhouse workout shoes, expertly crafted for endurance, agility, and style, empowering you to conquer any fitness challenge.",
 price: 2000,
discountPercentage: 15,
size: [5,6,8]

},
{
  id:11,
  image: "assets/workrun3.webp",
  title : "RunRebel",
  type : "WorkoutAndRunning",
  desc: "Dominate your fitness journey in these high-performance workout shoes, where durability meets style for an unbeatable combination of comfort and support..",
 price: 2500,
discountPercentage: 20,
size: [5,6,8]

},
{
  id:12,
  image: "assets/workrun4.webp",
  title : "SprintSculpt",
  type : "WorkoutAndRunning",
  desc: "Reach new heights in your fitness routine with these workout shoes, seamlessly blending functionality and fashion for an unmatched combination of performance and trendsetting flair",
 price: 2100,
discountPercentage: 10,
size: [5,6,8]

},
{
  id:13,
  image: "assets/workrun5.webp",
  title : "TurboFlex",
  type : "WorkoutAndRunning",
  desc: "Command the gym in these powerhouse workout shoes, expertly crafted for endurance, agility, and style, empowering you to conquer any fitness challenge.",
 price: 2500,
discountPercentage: 30,
size: [5,6,8]

},
{
  id:14,
  image: "assets/workrun6.webp",
  title : "StaminaStride",
  type : "WorkoutAndRunning",
  desc: "Dominate your fitness journey in these high-performance workout shoes, where durability meets style for an unbeatable combination of comfort and support.",
 price: 2000,
discountPercentage: 10,
size: [5,6,8]

},

{
  id:15,
  image: "assets/sandle1.webp",
  title : "SunSplash Sandals",
  type : "Sandle",
  desc: "Embrace relaxation in these chic sandals, offering a perfect blend of fashion and ease for a carefree, stylish summer.",
 price: 1000,
discountPercentage: 10,
size: [5,6,7,8]

},
{
  id:16,
  image: "assets/sandle2.webp",
  title : "SolaceStrap Sandals",
  type : "Sandle",
  desc: "Step into sunshine with these trendy sandals, combining fashion-forward design with unparalleled comfort for the ultimate summer escapade.",
 price: 1000,
discountPercentage: 9,
size: [5,6,7,8]

},
{
  id:17,
  image: "assets/sandle3.webp",
  title : "SeaBreeze Slides",
  type : "Sandle",
  desc: "Escape in style with these fashionable sandals, designed for comfort and flair, ensuring your feet stay happy on all your summer adventures.",
 price: 1000,
discountPercentage: 6,
size: [5,7,8]

},
{
  id:18,
  image: "assets/sandle4.webp",
  title : "ZenStep Sandals",
  type : "Sandle",
  desc: "Experience blissful comfort and laid-back style in these sandals, where every step feels like a leisurely stroll on the beach",
 price: 1000,
discountPercentage: 5,
size: [5,6,7,8]

},
{
  id:19,
  image: "assets/casual black.webp",
  title : "Men Casual Black",
  type : "Casual",
  desc: "Effortlessly blend style and comfort in these casual shoes, designed for everyday versatility and a laid-back, fashion-forward statement.",
 price: 2000,
discountPercentage: 15,
size: [5,6,7,8]

},
{
  id:20,
  image: "assets/casual brown.webp",
  title : "Men Casual Brown",
  type : "Casual",
  desc: "Discover the perfect companions for your everyday style in these casual shoes, where fashion and comfort converge in seamless harmony.",
 price: 1500,
discountPercentage: 10,
size: [5,6,7,8]

},
{
  id:21,
  image: "assets/casual gray.webp",
  title : "Men Casual Grey",
  type : "Casual",
  desc: "Step into relaxed chic with these casual shoes, offering a perfect fusion of comfort and style for any casual outing.",
 price: 2200,
discountPercentage: 10,
size: [5,6,7,8]

},
{
  id:22,
  image: "assets/casual white.webp",
  title : "Men Casual White",
  type : "Casual",
  desc: "Elevate your casual look with these versatile shoes, combining modern design with ease, ensuring you stay on trend with every step.",
 price: 3000,
discountPercentage: 12,
size: [5,6,7,8]

},
] ;