import i1 from '/src/assets/images/19.png';
import i2 from '/src/assets/images/20.png';
import i3 from '/src/assets/images/21.png';
import i4 from '/src/assets/images/22.png';

const Eleventh = () => {
  return (
    <footer className='bg-[#263057] p-[50px_80px] lg:p-[30px]'>
        <div className='flex justify-between text-white text-[18px] mb-[70px] mt-[30px] lg:block lg:text-center'>
            <div className='lg:mb-[25px]'>
                <a href="" className='block mb-[10px]'>О компании</a>
                <a href="" className='block mb-[10px]'>Новости</a>
                <a href="">Документы</a>
            </div>
            <div className='lg:mb-[25px]'>
                <a href="" className='block mb-[10px]'>Тарифы для дома</a>
                <a href="" className='block mb-[10px]'>Тарифы для бизнеса</a>
                <a href="">Контакты</a>
            </div>
            <div className='lg:mb-[25px]'>
                <a href="" className='block mb-[10px]'>Тест скорости</a>
                <a href="">Карта покрытия</a>
            </div>
            <div className='lg:mb-[25px]'>
                <div className='mb-[10px]'>
                    <button className='p-[5px_30px] text-white bg-[#6984F0] rounded-full mr-[10px] lg:w-[70%] lg:mb-[10px]'>Личный кабинет</button>
                    <button className='p-[5px_40px] text-black bg-[white] rounded-full mr-[10px] lg:w-[70%]'>Оплатить</button>
                </div>
                <p className='mb-[10px]'>+7 (4725) 43-97-20</p>
                <div className='flex justify-between w-[50%] lg:w-[50%] md:w-[70%]'>
                    <img src={i1} className='cursor-pointer' alt="" />
                    <img src={i2} className='cursor-pointer' alt="" />
                    <img src={i3} className='cursor-pointer' alt="" />
                    <img src={i4} className='cursor-pointer' alt="" />
                </div>
            </div>
        </div>
        <div className='flex justify-between text-gray-400 lg:block lg:w-[100%] lg:text-center'>
            <p className='text-[15px] lg:mb-[20px]'>© ЗАО «Осколнэт», 2022</p>
            <p className='w-[50%] text-[15px] lg:w-[100%] lg:mb-[20px]'>Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookies и других пользовательских данных, в соответствии с Политикой конфиденциальности</p>
            <p className='text-[15px] lg:mb-[10px]'>сайт эксперт</p>
        </div>
    </footer>
  )
}

export default Eleventh