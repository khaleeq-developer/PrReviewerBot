function containsDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }
  