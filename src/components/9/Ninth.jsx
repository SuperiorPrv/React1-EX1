import img1 from '/src/assets/images/10.png';
import img2 from '/src/assets/images/11.png';
import img3 from '/src/assets/images/12.png';

const Ninth = () => {
  return (
    <article className='p-[40px_80px] lg:p-[40px] text-center ph:p-[10px]'>
        <h1 className='text-[40px] font-semibold ph:text-[30px]'>Документы</h1>
        <div className='flex justify-between p-[30px] bg-[#F1F2F4] rounded-lg mt-[30px] mb-[30px] lg:block lg:bg-white lg:p-[10px] lg:mt-[10px] lg:mb-[0px]'>
            <div className='flex text-start w-[30%] items-center lg:w-[100%] lg:mb-[20px] lg:bg-[#F1F2F4] lg:p-[10px] lg:rounded-lg'>
                <img src={img1} alt="" className='h-[70px] mr-[20px] lg:h-[50px]' />
                <p>Договор оферты на оказание услуг связи (Интернет)</p>
            </div>
            <div className='flex text-start w-[32%] items-center lg:w-[100%] lg:mb-[20px] lg:bg-[#F1F2F4] lg:p-[10px] lg:rounded-lg'>
                <img src={img2} alt="" className='h-[70px] mr-[20px] lg:h-[50px]' />
                <p>Договор оферты на оказание услуг связи (Цифровое Телевидение)</p>
            </div>
            <div className='flex text-start w-[30%] items-center lg:w-[100%] lg:mb-[20px] lg:bg-[#F1F2F4] lg:p-[10px] lg:rounded-lg'>
                <img src={img3} alt="" className='h-[70px] mr-[20px] lg:h-[50px]' />
                <p>Лицензия 1</p>
            </div>
        </div>
        <button className='p-[10px_60px] bg-[#6984F0] text-white rounded-full ph:mb-[20px]'>Все документы</button>
    </article>
  )
}

export default Ninth