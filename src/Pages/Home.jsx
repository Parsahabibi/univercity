import React from 'react'
import Header from '../Components/Header'
import { navItemsData } from '../constant/navItem'
import { course, courseData } from '../constant/course'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-gray-main'>
            <Header active={4} image={'./assets/images/svg/blog.svg'} title={'انجمن علمی مهندسی کامپیوتر'} subTitle={'کدنویسی، نوآوری، آینده'} />
            <div className='px-[52px] '>
                <div className='bg-white p-[30px] 2xl:px-[60px] xl:py-14 rounded-md flex flex-col-reverse xl:flex-row items-center justify-center xl:justify-between !mb-[60px]'>
                    <div className='py-8 px-6 bg-purple-main rounded-lg w-full xl:w-7/12 mt-5 xl:mt-0'>
                        <h2 className='text-4xl xl:text-5xl text-white font-semibold mb-6'>معرفی انجمن</h2>
                        <span className='text-lg xl:text-lg leading-7 xl:leading-9 block text-white mb-4'>
                            انجمن علمی متشکل از گروه علاقه مندان به کامپیوتر، تکنولوژی و هوش مصنوعی است که با هدف گسترش دانش ایجاد شبکه و حمایت از پژوهش در این حوزه
                            تشکیل می شود.
                        </span>
                        <span className='text-lg xl:text-lg leading-7 xl:leading-9 block text-white mb-4'>
                            این انجمن با برگزاری کارگاه ها ، سمینارها مسابقات و ایجاد ارتباط با صنعت به رشد
                            و توسعه جامعه کامپیوتر کمک میکنند.
                        </span>
                        <span className='text-lg xl:text-lg leading-7 xl:leading-9 block text-white mb-4'>
                            به عبارت ساده تر انجمن کامپیوتر مکانی است که دانشجویان، پژوهشگران و متخصصان کامپیوتر میتوانند در آن به تبادل نظر یادگیری و همکاری با هم بپردازند
                        </span>
                    </div>
                    <div className='w-[300px] h-[300px] xl:w-[450px] xl:h-[450px] flex items-center justify-center'>
                        <img src='./assets/images/svg/CE_logo.svg' alt='' className='w-full h-full' />
                    </div>
                </div>
                <div className='py-9 px-[88px] bg-gray-dark rounded-[22px] flex items-center justify-between !mb-[60px]'>
                    {
                        navItemsData.map(
                            (item, index) =>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='w-[100px] h-[100px] rounded-[36px] bg-green-dark flex items-center justify-center mb-3'>
                                        <img src={item.image} alt='' className='w-[70px] h-[70px]' />
                                    </div>
                                    <span className='text-lg lg:text-xl text-white '>{item.title}</span>
                                </div>

                        )
                    }
                </div>
                <div className='px-[44px] py-8 bg-white rounded-md flex flex-col xl:flex-row items-center justify-between !mb-[60px]'>
                    <h2 className='text-4xl xl:text-5xl text-black font-semibold mb-8 xl:mb-0'>دوره ها و کارگاه های آموزشی</h2>
                    <div className='flex items-center flex-row-reverse gap-10'>
                        {
                            courseData.map(
                                (item) =>
                                    <div
                                        key={item.id}
                                        className="rounded-xl p-4 bg-cover bg-center w-[180px] h-[240px] flex flex-col items-start justify-start"
                                        style={{
                                            backgroundImage: item.bg_image ? `url(${item.bg_image})` : 'none',
                                            backgroundColor: item.bg_image ? 'transparent' : item.bg_color,
                                        }}
                                    >
                                        <div className='flex items-start justify-between w-full h-full'>
                                            <span className='text-2xl text-black'>{item.title}</span>
                                            <div className='w-[50px] h-[50px] flex items-center justify-center'>
                                                <img src={item.icon} alt='' className='w-full h-full' />
                                            </div>
                                        </div>
                                        <Link to={item.link}>
                                            <div className='p-[10px] rounded border border-black flex items-center gap-3'>
                                                <img src='./assets/images/icons/Arrow.svg' alt='' />
                                                <span className='text-base text-black'>مشاهده</span>
                                            </div>
                                        </Link>
                                    </div>
                            )
                        }
                    </div>
                </div>
                <div className='px-[44px] py-8 bg-white rounded-md !mb-[60px]'>
                    <h2 className='text-4xl xl:text-5xl text-black font-semibold mb-16'>اخبار و رویداد ها</h2>
                    <div className="grid grid-cols-2 items-start justify-between gap-x-8 gap-y-12">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
