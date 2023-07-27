import "@/style/benifitCard.css"

function BenifitsListCard({title1 , title2}) {
  return (
    <div className='benifit-card'>
      <div className="benifit-card-section">
      <img src="/assets/svg/Stack1.svg" alt="stack img" className="stack-svg" />
      <h3 className='block-heading'>  {title1}  </h3>
      </div>
      <hr className="block-breaker"/>
      <div className="benifit-card-section">
      <img src="/assets/svg/Stack2.svg" alt="stack img" className="stack-svg" />
      <h3 className='block-heading'> {title2}  </h3>
      </div>
    </div>
  )
}

export default BenifitsListCard