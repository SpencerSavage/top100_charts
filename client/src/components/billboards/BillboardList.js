import Billboard from './Billboard';

const BillboardList = ({ billboards, updateBillboard, deleteBillboard }) => (
  <>
    { billboards.map( bb => 
      <Billboard 
        key={bb.id}
        {...bb}
        updateBillboard={updateBillboard}
        deleteBillboard={deleteBillboard}
      />
    )}
  </>
)

export default BillboardList;