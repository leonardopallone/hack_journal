
import VisionBoard from './VisionBoard';

const VisionBoardList = ({visionboards, updateVisionBoard, deleteVisionBoard }) => (
  <>
    { visionboards.map( t =>
      <VisionBoard
        key={t.id}
        {...t}
        updateVisionBoard={updateVisionBoard}
        deleteVisionBoard={deleteVisionBoard}
      />
    )}
  </>
)

export default VisionBoardList;