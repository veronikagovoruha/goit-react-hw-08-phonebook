export const getPhones = ({phones}) => {
    return phones.items;
};

export const getFilteredItems = ({ phones: { filter, items } }) => {
  if (!filter) {
    return items;
  }
  const newItems = items.filter((e) => {
    const { name } = e;
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return newItems;
};