export const NestedRoutesCode = `
so firstly you need to make a children in routes.jsx inside the page you want to be the main 
    
    import Home from './Home';

    export const HOME_PAGE = "/"
        
    export const pages = [
    {
        title: "Home",
        path: HOME_PAGE,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: ':name',
                element: <Topics/>
            }
        ]
    },
    
and than make a "base" 

import {Link, Outlet} from "react-router-dom";    

    const  topics = [
        {id: 1, name: "props"},
        {id: 2, name: "useState"},
        {id: 3, name: "swiper"},
        {id: 4, name: "useEffect"},
        {id: 5, name: "validation"},
        {id: 6, name: "useParams"},
        {id: 7, name: "translate"},
        {id: 8, name: "uiComponents"},
    ]
    
and then just call it 

            {  
                topics.map(el => {
                    return (
                       <div>
                           <Link
                               key={el.id}
                               to={\`${"something but in our example its /home"}/${"and the name that you gave el.name"}\`} 
                           >
                                {el.name}
                           </Link>

                           <Outlet />
                       </div>
                    )
                })
            }
            

`