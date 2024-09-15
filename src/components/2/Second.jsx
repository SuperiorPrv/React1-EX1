import img1 from '/src/assets/images/4.png';

const Second = () => {
  return (
    <section className='bg-[#263057] p-[30px_70px] ph:p-[20px_30px] lg:p-[30px_40px]'>
        <div className='flex justify-between items-center p-[10px_120px] lg:p-[10px_50px] bg-white rounded-md md:block ph:p-[10px_20px]'>
            <div className='md:text-center'>
                <h1 className='text-[40px] font-semibold text-[#263057] mb-[-5px] md:text-[34px]'>ИНТЕРНЕТ</h1>
                <h2 className='text-[35px] font-semibold text-[#263057] mb-[20px] md:text-[20px] ph:mb-[10px]'>на высокой скорости</h2>
                <button className='p-[10px_40px] bg-[#6984F0] text-white rounded-full ph:mb-[30px] ph:m-auto'>Выбрать тариф</button>
            </div>
            <img src={img1} alt="" className='ph:mb-[30px] md:m-auto' />
        </div>
    </section>
  )
}

export default Second