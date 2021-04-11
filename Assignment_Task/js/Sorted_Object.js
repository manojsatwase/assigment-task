// It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

// Write a code to sort the object by id 
// I.e final output should have objected sort by id’s


const Sorted_By_Object_Id = (_ => {
 const arr_obj = [
  {
   "id": 4, "name": "abc"
  }, {
   "id": 10, "name": "ab2"
  }, {
   "id": 5, "name": "abc3"
  }, {
   "id": 6, "name": "abc5"
  }
 ];
 const sortedById = arr_obj.sort((a, b) => a.id - b.id)
 return sortedById;
})

export default Sorted_By_Object_Id;