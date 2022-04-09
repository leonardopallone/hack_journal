import { useState, useEffect } from 'react';

const Vision_boardForm = ({ addVision_board, id, title, complete, updateVision_board, setEdit }) => {
  const [vision_board, setVision_board] = useState({ title: '', complete: false })

  useEffect( () => {
    if (id) {
      setVision_board({ title, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateVision_board(id, vision_board)
      setEdit(false)
    } else {
      addVision_board(vision_board)
    }
    setVision_board({ title: '', complete: false })
  }

  return (
    <>
      <h3>{ id ? "Edit" : "Create" } Vision_board</h3>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          value={vision_board.title}
          onChange={(e) => setVision_board({...vision_board, title: e.target.value })}
          placeholder="Title"
          required
        />
        {
          id ?
            <input
              type="checkbox"
              name='complete'
              checked={vision_board.complete}
              onChange={(e) => setVision_board({...vision_board, complete: !vision_board.complete })}
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

export default Vision_boardForm;