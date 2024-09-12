import img1 from '/src/assets/images/6.png';

const Seventh = () => {
  return (
    <article className='p-[20px_80px] text-center ph:p-[20px_30px]'>
        <h1 className='text-center text-[40px] font-semibold mb-[40px] ph:text-[25px] ph:mb-[30px]'>О КОМПАНИИ</h1>
        <div className='flex gap-[50px] items-center ph:block'>
            <div className='w-[40%] ph:w-[100%]'>
                <img src={img1} alt="" />
            </div>
            <div className='w-[48%] ph:w-[100%]'>
                <p className='mb-[30px] text-start ph:mt-[20px] ph:mb-[20px]'>Сегодня – это крупнейшая компания в Старом Осколе с широким спектром телекоммуникационных услуг: Интернет, телефония, IP телевидение, видеонаблюдение.</p>
                <p className='text-start'>Мы улучшаем качество жизни людей, предоставляя возможность свободного общения в информационном сообществе. Предлагаем самые современные Интернет технологии наивысшего качества. </p>
            </div>
        </div>
        <button className='m-auto p-[10px_30px] bg-[#6984F0] rounded-full text-white mt-[40px] mb-[20px] ph:w-[100%] ph:mt-[30px] ph:mb-[10px]'>Подробно о компании</button>
    </article>
  )
}

export default Seventh