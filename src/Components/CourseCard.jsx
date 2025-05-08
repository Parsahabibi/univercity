import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({title , subtitle , des , link , image}) => {
    return (
        <div className='p-6 bg-purple-main rounded-[22px] flex items-start justify-between gap-10 h-full relative'>
        <div className='lg:w-1/2 xl:w-3/4 flex flex-col justify-between h-full'>
            <div>
                <h3 className='mb-4 text-white text-xl xl:text-2xl font-bold'>
                    {'دوره آموزشی برنامه نویسی بکند با محوریت زبان پایتون'}
                </h3>
                <span className='text-base text-white leading-6 block mb-3'>
                    {'انجمن علمی کامپیوتر دانشگاه بوعلی سینا با همکاری انجمن علمی مهندسی کامپیوتر دانشگاه بین‌المللی امام‌خمینی برگزار می‌کند:'}
                </span>
                <span className='text-base text-white leading-6 block'>
                    {'این دوره آموزش برای افرادی مناسب است که می‌خواهند وارد دنیای توسعه وب شوند. اگر به دنبال ارتقاء مهارت‌های خود در زمینه توسعه وب هستید، این دوره بهترین انتخاب برای شماست.'}
                </span>
            </div>
            <div className='flex justify-start items-end pt-6'>
                <Link to={''}>
                    <div className='py-3 px-12 border border-green-dark flex items-center justify-center max-w-[160px] max-h-[50px] rounded-2xl'>
                        <span className='text-xl text-green-dark'>بیشتر</span>
                    </div>
                </Link>
            </div>
        </div>

        <div className='lg:w-1/2 2xl:w-1/4 h-full'>
            <img src='./assets/images/banner.png' alt='' className='w-full h-full' />
        </div>
    </div>
    )
}

export default CourseCard
