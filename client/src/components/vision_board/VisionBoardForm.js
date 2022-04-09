import { useState, useEffect } from 'react';

const VisionBoardForm = ({ addVisionBoard, id, title, complete, updateVisionBoard, setEdit }) => {
  const [visionBoard, setVisionBoard] = useState({ title: '', complete: false })

  useEffect( () => {
    if (id) {
      setVisionBoard({ title, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateVisionBoard(id, visionBoard)
      setEdit(false)
    } else {
      addVisionBoard(visionBoard)
    }
    setVisionBoard({ title: '', complete: false })
  }

  return (
    <>
      <h3>{ id ? "Edit" : "Create" } Vision_board</h3>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          value={visionBoard.title}
          onChange={(e) => setVisionBoard({...visionBoard, title: e.target.value })}
          placeholder="Title"
          required
        />
        {
          id ?
            <input
              type="checkbox"
              name='complete'
              checked={visionBoard.complete}
              onChange={(e) => setVisionBoard({...visionBoard, complete: !visionBoard.complete })}
            />
          :
          null
        }
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default VisionBoardForm;