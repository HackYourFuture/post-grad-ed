import React from 'react';
import TagItem from './TagItem';


const TagBar = props =>{
        // if(props.items.length === 0){
        //     return(
        //         <div className='no-tag'>
        //             <h2>No tag found.</h2>
        //         </div>
        //     );
        // }
    
        return(
            <ul className="tagBar">
                {/* {
                    props.items.map(item =>(
                        <TagItem 
                            key={item.id}
                        />
                    ))
                } */}
            </ul>
        )
    }

  export default TagBar;
  