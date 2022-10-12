export const ItemTypes = {
  COMPOST: 'compost',
  RECYCLE: 'recycle',
  GARBAGE: 'garbage',
  LANDFILL: 'landfill',
};

export const wasteToSort = [
  {
    id: 1,
    url: 'https://toppng.com/uploads/preview/free-png-plastic-water-bottle-png-11519803083hnhiljypmg.png',
    description: 'blue plastic water bottle',
    wasteType: ItemTypes.RECYCLE,
  },
  {
    id: 2,
    url: 'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-water-bottle-icon-png-image_319695.jpg',
    description: 'green plastic water bottle',
    wasteType: ItemTypes.RECYCLE,
  },
  {
    id: 3,
    url: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-glass-medical-bottle-image_2236429.jpg',
    description: 'brown glass bottle',
    wasteType: ItemTypes.RECYCLE,
  },
  {
    id: 4,
    url: 'https://www.clipartmax.com/png/middle/318-3188704_food-waste-biodegradable-waste-cafeteria-biodegradable-waste-clipart.png',
    description: 'food waste',
    wasteType: ItemTypes.COMPOST,
  },
  {
    id: 5,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrM9rfgwEv9ywFFOLN0eweEQZAR2qWYGy5YA&usqp=CAU',
    description: 'leftover bread',
    wasteType: ItemTypes.COMPOST,
  },

  {
    id: 6,
    url: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-diaper-download-image_1258741.jpg',
    description: 'disposable diaper',
    wasteType: ItemTypes.GARBAGE,
  },
  {
    id: 7,
    url: 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fbeautyrest_canada%2Fcolor%2Fgilmour%20tt_1069050-b3.jpg?width=878&height=600&scale=both&trim.threshold=20&trim.percentpadding=0.5',
    description: 'matress',
    wasteType: ItemTypes.LANDFILL,
  },
];
