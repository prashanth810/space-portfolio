import React from 'react'
import TimeLine from '../../componsnts/time lines/TimeLine'
import { experiences } from '../../componsnts/constants/Myskills'

const Experience = () => {
    return (
        <section>
            <div className='w-full mt-28'>
                <TimeLine data={experiences} />
            </div>
        </section>
    )
}

export default Experience
