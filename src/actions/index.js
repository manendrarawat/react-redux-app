export default function selectBook(book){
    console.log('selectBook Action invoked : ')
    return {
        type : "BOOK_SELECTED",
        payload : book
    }
}