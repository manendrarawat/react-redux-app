export default function(state = null, action) {
    console.log('reducer active book');
    switch (action.type) {
      case "BOOK_SELECTED":
        return action.payload;
    }
  
    return state;
  }