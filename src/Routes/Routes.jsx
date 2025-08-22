import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Abute from '../Components/Abute/Abute';
import BooksDetails from '../Pages/BooksDeatils/BooksDetails';
import Readlist from '../Pages/Readlist/Readlist';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
      
    children:[
        {
            index:true,
            
            path:"/",
            loader:()=>fetch('booksData.json'),
            Component:Home

        },
        {
          path:'/abute',
          Component:Abute
          
        },
        {
          path:'/',
          Component:Home

        },
        {
          path:'/bookDetails/:id',
        
          loader:()=>fetch('booksData.json'),
          Component:BooksDetails
        },
        {
          path:'readlist',
          loader:()=>fetch('booksData.json'),
          Component:Readlist
        }

    ]
  
    
  },

]);