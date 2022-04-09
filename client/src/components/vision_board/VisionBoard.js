import { useState } from 'react';
import VisionBoardForm from './VisionBoardForm';
import { Link } from 'react-router-dom';

const Vision_board = ({ id, title, complete, updateVision_board, deleteVision_board }) => {
  const [editing, setEdit] = useState(false)
  const [vision_board, setVision_board] = useState({ title: title, complete: complete })

  const handleComplete = () => {
    setVision_board({ ...vision_board, complete: !complete })
    updateVision_board(id, vision_board)
  }

  return (
    <>
      {
        editing ?
          <>
            <VisionBoardForm
              id={id}
              title={title}
              complete={complete}
              updateVision_board={updateVision_board}
              setEdit={setEdit}
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
        <>
          <h3>Vision# {id} {title}</h3>
          <p>{complete ? "Completed" : "Not Completed"}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => handleComplete()}
          >
            Toggle Complete
          </button>
          <button
            onClick={() => deleteVision_board(id)}
          >
            Delete
          </button>
          <Link 
            to={`/vision_board/${id}/vision_items`}
            state={{ vision_boardId: id, vision_boardTitle: title }}
          >
            <button>
              Notes
            </button>
          </Link>
        </>
      }
    </>
  )
}

export default Vision_board;