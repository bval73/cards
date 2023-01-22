

export const updateInfo = ((info,name,id) => {
  let updateInfo = {
    id:{
      value:'',
      name: "SSN"
    },
    name:{
      first:'',
      last:''
    },
    email:'',
    dob:{
      date:'',
      age:''
    },
    cell:'',
    gender:'',
    nat:'',
    phone:'',
    location:{
      city:'',
      state:''
    }
  }
updateInfo.id.value = id
updateInfo.name.first = name[0].firstChild.data;
updateInfo.name.last = name[0].lastChild.data;
info.map((item) =>{
  let field = item.getAttribute('field')
  switch (field) {
    case 'cell':
    case 'phone':
    case 'nat':
    case 'gender':
    case 'email':
      updateInfo[field] = item.lastChild.data;
      break;
    case 'date':
      const bday = new Date(item.lastChild.data).toISOString();
      
      updateInfo.dob[field] = bday;
      break;
    case 'age':
      updateInfo.dob[field] = item.lastChild.data;
      break;
    case 'city':
    case 'state':
      updateInfo.location[field] = item.lastChild.data;
      break;
    default:
      break;
  }
  
});
return updateInfo;
})