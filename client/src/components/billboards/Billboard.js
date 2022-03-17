import { useState } from 'react';
import BillboardForm from './BillboardForm'

const Billboard = ({ id, genre, updateBillboard, deleteBillboard }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h1>{genre}</h1>
      {
        editing ?
        <>
          <BillboardForm 
            id={id}
            genre={genre}
            updateBillboard={updateBillboard}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteBillboard(id)}>Delete</button>
        </>
      }
    </>
  )
}

export default Billboard;