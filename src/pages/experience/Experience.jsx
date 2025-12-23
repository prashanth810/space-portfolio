import React from 'react'
import TimeLine from '../../componsnts/time lines/TimeLine'
import { experiences } from '../../componsnts/constants/Myskills'

const Experience = () => {
    return (
        <section>
            <div className='w-full'>
                <TimeLine data={experiences} />
            </div>
        </section>
    )
}

export default Experience
