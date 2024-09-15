import l from '/src/assets/images/13.png';
import r from '/src/assets/images/18.png';
import img1 from '/src/assets/images/14.png';
import img2 from '/src/assets/images/15.png';
import img3 from '/src/assets/images/16.png';
import img4 from '/src/assets/images/17.png';

const Tenth = () => {
  return (
    <article className='p-[40px_80px] text-center md:p-[20px_20px] bg-[#F1F2F4]'>
        <h1 className='text-[40px] font-semibold mb-[20px] ph:mb-[15px]'>ПАРТНЁРЫ</h1>
        <div className='flex justify-between items-center'>
            <img src={l} alt="" />
            <img src={img1} alt="" />
            <img src={img2} className='xl:hidden' alt="" />
            <img src={img3} className='xl:hidden' alt="" />
            <img src={img4} className='xl:hidden' alt="" />
            <img src={r} alt="" />
        </div>
    </article>
  )
}

export default Tenth