import React from 'react'
import Header from '../Components/Header'
import { navItemsData } from '../constant/navItem'

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
                <div className='py-9 px-[88px] bg-gray-dark rounded-[22px] flex items-center justify-between'>
                    {
                        navItemsData.map(
                            (item, index) =>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='w-[100px] h-[100px] rounded-[36px] bg-green-dark flex items-center justify-center mb-3'>
                                        <img src={item.image} alt='' className='w-[70px] h-[70px]'/>
                                    </div>
                                    <span className='text-lg lg:text-xl text-white '>{item.title}</span>
                                </div>

                        )
                    }
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Home
