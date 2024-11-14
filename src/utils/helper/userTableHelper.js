export function userTableHelper(data, requiredColumns) {
    return data.map(user => {
       const filteredUser = {};
       requiredColumns.forEach(column => {
           if (user.hasOwnProperty(column)) {
               filteredUser[column] = user[column];
           }
       });
       return filteredUser;
   });
}
