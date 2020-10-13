import React from 'react';

import ListItem from './ListItem';
import './List.css';

const List = props =>{
    if(props.items.length === 0){
        return(
            <div className='no-item'>
                <h2>No to-do item found.</h2>
            </div>
        );
    }

    return(
        <ul className="itemList">
            {
                props.items.map(item =>(
                    <ListItem 
                        key={item.id}
                        tag={item.tag}
                        content={item.content}
                        date={item.date}
                        completed={item.completed}
                    
                    />
                ))
            }
        </ul>
    )
}

export default List;