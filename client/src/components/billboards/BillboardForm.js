import { useState, useEffect } from 'react';

const BillboardForm = ({ addBillboard, id, genre, updateBillboard, setEdit }) => {
  const [billboard, setBillboard] = useState({ genre: '' })
  
  useEffect( () => {
    if (id) {
      setBillboard({ genre: genre })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateBillboard(id, billboard)
      setEdit(false)
    } else {
      addBillboard(billboard)
    }
    setBillboard({ genre: '' })
  }
  
  return(
    <>
      <h1>Create Billboard</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='genre'
          value={billboard.genre}
          onChange={ (e) => setBillboard({...billboard, genre: e.target.value})}
          required
          placeholder='Billboard Name'
        />
        {/* <textarea
        name='desc'
        value={billboard.desc}
        onChange={ (e) => setBillboard({...billboard, desc: e.target.value})}
        required
        placeholder='Description'
        ></textarea> */}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default BillboardForm;