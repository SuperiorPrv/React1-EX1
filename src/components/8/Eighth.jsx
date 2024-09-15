import img1 from '/src/assets/images/7.png';
import img2 from '/src/assets/images/8.png';
import img3 from '/src/assets/images/9.png';

const Eighth = () => {
  return (
    <article className='p-[40px_80px] bg-[#F1F2F4] text-center md:p-[40px] ph:p-[10px_20px]'>
        <h1 className='text-[40px] font-semibold mb-[20px]'>НОВОСТИ</h1>
        <div className='grid grid-cols-[320px_320px_320px] justify-center gap-[30px] text-start overflow-auto'>
            <div className='p-[20px] bg-white rounded-md'>
                <img src={img1} alt="" />
                <h5 className='mt-[15px] mb-[10px] font-semibold text-[18px]'>05.03.2022</h5>
                <p className='mb-[20px]'>05 марта 2022 с 17:00 до 23:00 на сети интернет будут проводиться планово-профилактические работы. </p>
                <button className='text-[#6984F0] font-semibold'>Подробнее</button>
            </div>
            <div className='p-[20px] bg-white rounded-md'>
                <img src={img2} alt="" />
                <h5 className='mt-[15px] mb-[10px] font-semibold text-[18px]'>01.02.2022</h5>
                <p className='mb-[20px]'>С 1 февраля 2022г меняется «Канал подарков». На кнопке 33 появится новый канал «Plan B».</p>
                <button className='text-[#6984F0] font-semibold'>Подробнее</button>
            </div>
            <div className='p-[20px] bg-white rounded-md'>
                <img src={img3} alt="" />
                <h5 className='mt-[15px] mb-[10px] font-semibold text-[18px]'>20.01.2022</h5>
                <p className='mb-[20px]'>«Осколнэт» предоставляет всем клиентам набор современных, надежных и необходимых телеком-услуг для дома.</p>
                <button className='text-[#6984F0] font-semibold'>Подробнее</button>
            </div>
        </div>
        <button className='mt-[30px] mb-[20px] p-[10px_60px] bg-[#6984F0] rounded-full text-white'>Все новости</button>
    </article>
  )
}

export default Eighth