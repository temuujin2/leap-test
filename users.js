const users = [
    { id: 11, name: 'Bat', age: 23, group: 'editor' },
    { id: 47, name: 'Bold', age: 28, group: 'admin' },
    { id: 85, name: 'Tulga', age: 34, group: 'editor' },
    { id: 97, name: 'Suren', age: 28, group: 'admin' }
  ];

  const countNum = () => {
    const adminNm = users.reduce((acc, el) =>{
        if(el.group == 'admin') {
            acc.admin++
        }
        else
        return adminNm
    }) 
  }