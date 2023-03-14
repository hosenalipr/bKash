import React from 'react'
import BkashServices from '../BkashServices/BkashServices'
import BlogImg from '../BlogImg/BlogImg'
import BlogService from '../BlogService/BlogService'
import Business from '../Business/Business'
import EducationalInstitutions from '../EducationalInstitutions/EducationalInstitutions'
import Media from '../Media/Media'
import Merchant from '../Merchant/Merchant'
import OnlineBusiness from '../OnlineBusiness/OnlineBusiness'

const Blog = () => {
    return (
        <div>
            <BlogImg />
            <BlogService />
            <BkashServices />
            <Media />
            {/* <Business />
            <OnlineBusiness />
            <Merchant />
            <EducationalInstitutions /> */}
        </div>
    )
}

export default Blog
