
export const sortAsc = ((sortBy,items) => {
  let sortedItems= [];
  items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
  .map((item, i) => 
      sortedItems.push(item)
  );

  return sortedItems
});

export const sort2Level = ((sortBy,items) => {
  let sortedItems= [];
  items.sort((a, b) => a[sortBy[0]][sortBy[1]].localeCompare(b[sortBy[0]][sortBy[1]]))
  .map((item) => 
    sortedItems.push(item)
  );

  return sortedItems
});

export const sortNumeric =((sortBy,items) => {
 let sortedItems = []; 

 items.sort((a, b) =>
 a[sortBy[0]][sortBy[1]] - b[sortBy[0]][sortBy[1]])
  .map((data) => {
  
    sortedItems.push(data)
    return sortedItems;
 })
 return sortedItems
})

export const sortTele =((sortBy,items) => {
  let sortedItems = []; 
 
  items.sort((a, b) =>
  a[sortBy[0]][sortBy[1]] - b[sortBy[0]][sortBy[1]])
   .map((data) => {
   
     sortedItems.push(data)
     return sortedItems;
  })
  return sortedItems
 })

