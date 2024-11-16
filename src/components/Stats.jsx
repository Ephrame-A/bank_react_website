import React from 'react'
import { stats} from '../constants'
import styles from '../style'
function Stats() {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((s)=>(
        <div key={s.id} className='flex-1 flex justify-start items-center flex-row m-3'>
<h4 className='font-poppins font-semibold xs:text-[40px] 
text-[30px] leading-[43px] xs-leading-[53] text-white'>{s.value}</h4>
<p className='font-poppins font-normal xs:text-[20px] 
text-[15px] leading-[21px] xs-leading-[26] text-gradient uppercase ml-3'>{s.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats