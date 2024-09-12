const Fourth = () => {
  return (
    <section className="p-[20px_80px] ph:p-[10px]">
        <div className="bg-[#263057] p-[30px_80px] rounded-md text-white ph:p-[10px_20px]">
            <h1 className="text-[34px] font-semibold mb-[10px] ph:text-[19px] ph:mt-[10px] ph:mb-[15px]">Трудно выбрать? Мы поможем!</h1>
            <form action="">
                <input type="text" name="" className="w-[35%] p-[10px_20px] rounded-md mr-[30px] text-black ph:w-[100%] ph:mb-[10px]" placeholder="+992 ___-___-___" />
                <input type="text" name="" className="w-[35%] p-[10px_20px] rounded-md mr-[30px] text-black ph:w-[100%] ph:mb-[10px]" placeholder="Как вас зовут?" />
                <div className="hidden ph:flex ph:mb-[10px]">
                    <input type="checkbox" className="ph:mr-[10px]" name="" />
                    <p>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
                </div>
                <button type="submit" className="p-[10px_60px] bg-[#6984F0] rounded-full ph:w-[100%] ph:mb-[10px]">Жду звонка</button>
            </form>
            <div className="flex mt-[20px] ph:hidden">
                <input type="checkbox" className="mr-[10px]" name="" id="" />
                <p>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
            </div>
        </div>
    </section>
  )
}

export default Fourth