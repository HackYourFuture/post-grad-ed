import React, { useState, useContext } from 'react';
import './ListItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleS, faEdit as faEditS, faTrashAlt as faTrashAltS} from '@fortawesome/free-solid-svg-icons';



const ListItem = props =>{
    const isCompleted = props.isCompleted;
    console.log(isCompleted)

    const[completed, setCompleted] = useState(isCompleted);

    const completeHandler = async() =>{
        setCompleted(true)
        // try{
        //     await sendRequest(

        //     )
        // }catch(err){

        // }
    } 
    const cancelCompleteHandler = async () => {
        setCompleted(false)
        // try {
        //   await sendRequest(
        //     `${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${props.id}`,
        //     'PUT',
        //     null,
        //     {
        //       Authorization: 'Bearer ' + auth.token,
        //     }
        //   )

        // } catch (err) {}
      }
      const editHandler = async() =>{
        setCompleted(true)
        // try{
        //     await sendRequest(

        //     )
        // }catch(err){

        // }
    } 
    const deleteHandler = async() =>{
        setCompleted(true)
        // try{
        //     await sendRequest(

        //     )
        // }catch(err){

        // }
    } 


    return(
        <li className='listItem'>
            <div className='listItem__content'>
            <div className="listItem__checkbox">
                { !completed && (
                        <FontAwesomeIcon
                            icon={faCircle}
                            size="2x"
                            className="not-completed"
                            onClick={completeHandler}
                        />
                   
                )
                }
                {completed &&(
                     <FontAwesomeIcon
                     icon={faCircleS}
                     size="2x"
                     className="completed"
                     onClick={cancelCompleteHandler}
                   />
                   
                )}
                 </div>

                 <div className='listItem__title'>
                     {props.content}
                 </div>
                 <div className='listItem__date'>
                     {props.date}
                 </div>
                 <div className ='listItem__editButton'>
                    <FontAwesomeIcon
                        icon={faEditS}
                        size="2x"
                        className="editIcon"
                        onClick={editHandler}
                    />
                 </div>
                 <div className ='listItem__deleteButton'>
                    <FontAwesomeIcon
                        icon={faTrashAltS}
                        size="2x"
                        className="deleteIcon"
                        onClick={deleteHandler}
                    />
                 </div>


            </div>
        </li>

    )
}
export default ListItem;