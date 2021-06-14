const colors = [
   'gray',
   'red',
   'yellow',
   'green',
   'blue',
   'indigo',
   'purple',
   'pink',
];
const pickRandomColor = () => {
   return colors[Math.round(Math.random() * colors.length)];
};

export default pickRandomColor;