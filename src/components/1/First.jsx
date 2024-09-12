import img1 from '/src/assets/images/1.png';
import img2 from '/src/assets/images/2.png';
import img3 from '/src/assets/images/3.png';

const First = () => {
  return (
    <header className='flex justify-between p-[20px_60px] items-center ph:p-[20px]'>
        <img src={img1} alt="" className='ph:w-[80px]' />
        <a href="" className='hover:underline ph:hidden'>Тарифы для дома</a>
        <a href="" className='hover:underline ph:hidden'>Тарифы для бизнеса</a>
        <a href="" className='hover:underline ph:hidden'>Контакты</a>
        <img src={img2} alt="" className='ph:w-[130px]' />
        <button className='p-[5px_25px] bg-[#6984F0] text-white rounded-full ph:hidden'>Личный кабинет</button>
        <button className='p-[5px_25px] bg-[#263057] text-white rounded-full ph:hidden'>Оплатить</button>
        <img src={img3} alt="" className='hidden ph:block' />
    </header>
  )
}

export default First