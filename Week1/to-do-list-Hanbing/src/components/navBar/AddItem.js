import React from 'react';

import './AddItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as faPlus } from '@fortawesome/free-solid-svg-icons';

const AddItem = () =>{

    const addItemHandler = () =>{

    }
    


    return(
        <div classname='AddItemContainer'>
            <FontAwesomeIcon
                     icon={faPlus}
                     size="2x"
                     className="AddItemButton"
                     onClick={addItemHandler}
                   />

        </div>


    )
}

export default AddItem;