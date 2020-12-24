var obj = { prop: 1 };

function updateObjectWithKeyAndValue(object, 'prop2', 2){
  Object.assign({obj}, {prop2:'2'});
  return obj;

}