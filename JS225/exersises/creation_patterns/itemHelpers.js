// itemHelpers.js

export function validName(name) {
  return name.replace(/\s/g, '').length >= 5 ? name : false;
}

export function validCat(category) {
  // allow multi-word categories if you want
  return category.length >= 5 ? category : false;
}

export function validQuan(quantity) {
  return quantity !== undefined ? quantity : false;
}

export function getCode(name, category) {
  const splitName = name.split(' ');

  if (splitName.length > 1 && splitName[0].length === 2) {
    return (
      splitName[0].toUpperCase() +
      splitName[1][0].toUpperCase() +
      category.slice(0, 2).toUpperCase()
    );
  } else {
    return name.slice(0, 3).toUpperCase() + category.slice(0, 2).toUpperCase();
  }
}
