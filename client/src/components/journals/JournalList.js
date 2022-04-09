import Journal from './Journal';

const JournalList = ({ journals}) => (

  <>
    { journals.map( j => 
    <Journal 
    key={j.id} 
    {...j} 
    // updateJournal={updateJournal} 
    // deleteJournal={deleteJournal}
    /> )}
  </>

)

export default JournalList;