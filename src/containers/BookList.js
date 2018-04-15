import React, {Component} from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book) => {
                return (
                    <li key={ book.title }
                       onClick={() => {this.props.selectBook(book)}}
                    >{ book.title }</li>
                )
        })
    }

    render(){
        return (
            <div>Book List Component
                <ul>
                    {this.renderList()}
                 </ul>
            </div>
             )
    }
}

function mapStateToProps(state){
    return {
        books : state.books
    }
}

/*
// alternate if mapDispatchToProps is to paas action directly in connect method
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook : selectBook}, dispatch)
}
*/

export default connect(mapStateToProps, {selectBook : selectBook})(BookList);