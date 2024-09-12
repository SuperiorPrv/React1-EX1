import speedDisp from '/src/assets/images/5.png';

const Third = () => {
  return (
    <section className='text-center bg-[#F1F2F4] p-[40px]'>
        <h1 className='text-[37px] text-[#263057] font-semibold mb-[20px] ph:text-[25px]'>ТАРИФЫ ДЛЯ ДОМА</h1>
        <div className='bg-white'>
            <div className='flex justify-between p-[40px_80px] mb-[40px] ph:flex-wrap ph:p-[10px_20px]'>
                <a href="" className='font-semibold underline text-[20px] ph:text-[15px] ph:mb-[5px]'>Интернет</a>
                <a href="" className='text-[18px] ph:text-[15px] ph:mb-[5px]'>Интернет + Кабельное ТВ <span className='p-[4px_8px] bg-[#6984F0] rounded-full text-white ml-[5px] text-[14px] hover:no-underline ph:p-[2px_4px] ph:text-[10px]'>ХИТ</span></a>
                <a href="" className='text-[18px] ph:text-[15px] ph:mb-[5px]'>Интернет + Smart TV</a>
                <a href="" className='text-[18px] ph:text-[15px]'>Интернет + Телефония</a>
            </div>
            <div className='grid grid-cols-[200px_200px_240px_200px_200px] justify-center gap-[30px] mb-[40px] ph:overflow-auto'>
                <div className='h-[200px] text-start'>
                    <h2 className='font-semibold text-[30px]'>Medium</h2>
                    <div className='flex w-[65%] justify-between items-center mt-[5px] mb-[5px]'>
                        <img src={speedDisp} alt="" />
                        <h4 className='text-[20px] font-semibold'>30 Мбит/с</h4>
                    </div>
                    <p className='mb-[10px] cursor-pointer hover:underline'>Подробнее</p>
                    <hr className='mb-[10px]' />
                    <p className='text-[22px]'><span className='font-bold'>300 </span>₽/мес</p>
                    <button className='w-[100%] text-center rounded-full bg-[#6984F0] text-white py-[5px] mt-[10px]'>Подключить</button>
                </div>
                <div className='h-[200px] text-start'>
                    <h2 className='font-semibold text-[30px]'>Medium</h2>
                    <div className='flex w-[65%] justify-between items-center mt-[5px] mb-[5px]'>
                        <img src={speedDisp} alt="" />
                        <h4 className='text-[20px] font-semibold'>30 Мбит/с</h4>
                    </div>
                    <p className='mb-[10px] cursor-pointer hover:underline'>Подробнее</p>
                    <hr className='mb-[10px]' />
                    <p className='text-[22px]'><span className='font-bold'>300 </span>₽/мес</p>
                    <button className='w-[100%] text-center rounded-full bg-[#6984F0] text-white py-[5px] mt-[10px]'>Подключить</button>
                </div>
                <div className='h-[270px] text-start mt-[-44px] bg-[#273158] text-[white] p-[20px] rounded-lg ph:mt-[0px]'>
                    <span className='bg-white text-black p-[2px_8px] rounded-full font-semibold'>ХИТ</span>
                    <h2 className='font-semibold text-[30px]'>Medium</h2>
                    <div className='flex w-[65%] justify-between items-center mt-[5px] mb-[5px]'>
                        <img src={speedDisp} alt="" />
                        <h4 className='text-[20px] font-semibold'>30 Мбит/с</h4>
                    </div>
                    <p className='mb-[10px] cursor-pointer hover:underline'>Подробнее</p>
                    <hr className='mb-[10px]' />
                    <p className='text-[22px]'><span className='font-bold'>300 </span>₽/мес</p>
                    <button className='w-[100%] text-center rounded-full bg-[#6984F0] text-white py-[5px] mt-[10px]'>Подключить</button>
                </div>
                <div className='h-[200px] text-start ph:mt-[44px]'>
                    <h2 className='font-semibold text-[30px]'>Medium</h2>
                    <div className='flex w-[65%] justify-between items-center mt-[5px] mb-[5px]'>
                        <img src={speedDisp} alt="" />
                        <h4 className='text-[20px] font-semibold'>30 Мбит/с</h4>
                    </div>
                    <p className='mb-[10px] cursor-pointer hover:underline'>Подробнее</p>
                    <hr className='mb-[10px]' />
                    <p className='text-[22px]'><span className='font-bold'>300 </span>₽/мес</p>
                    <button className='w-[100%] text-center rounded-full bg-[#6984F0] text-white py-[5px] mt-[10px]'>Подключить</button>
                </div>
                <div className='h-[200px] text-start ph:mt-[44px]'>
                    <h2 className='font-semibold text-[30px]'>Medium</h2>
                    <div className='flex w-[65%] justify-between items-center mt-[5px] mb-[5px]'>
                        <img src={speedDisp} alt="" />
                        <h4 className='text-[20px] font-semibold'>30 Мбит/с</h4>
                    </div>
                    <p className='mb-[10px] cursor-pointer hover:underline'>Подробнее</p>
                    <hr className='mb-[10px]' />
                    <p className='text-[22px]'><span className='font-bold'>300 </span>₽/мес</p>
                    <button className='w-[100%] text-center rounded-full bg-[#6984F0] text-white py-[5px] mt-[10px]'>Подключить</button>
                </div>
            </div>
            <button className='p-[10px_80px] rounded-full text-white bg-[#6984F0] mb-[30px]'>Все тарифы</button>
        </div>
    </section>
  )
}

export default Third