import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>books</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-30 p-10'>
                {
                    data.map((singleBook)=><Book singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;