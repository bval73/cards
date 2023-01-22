
export const search = ((items,searchWord) => {
  let searchedItems = [];
  const keyword = searchWord.toLowerCase()

  items.map((item) => {
    if(item.name.first.toLowerCase() === keyword || item.name.last.toLowerCase() === keyword || item.email.toLowerCase() === keyword || item.location.city.toLowerCase() === keyword || item.location.state.toLowerCase() === keyword || item.phone === keyword){
      searchedItems.push(item)
    }
  });

  return searchedItems;
});

