const Fifth = () => {
  return (
    <section className="p-[20px_80px] ph:p-[10px]">
        <div className="bg-[#263057] p-[30px_80px] rounded-md text-white ph:p-[10px_20px]">
            <h1 className="text-[34px] font-semibold mb-[10px] ph:text-[19px] ph:mt-[10px] ph:mb-[15px]">Проверить возможность подключения по вашему адресу</h1>
            <form action="">
                <input type="text" name="" className="w-[55%] p-[10px_20px] rounded-md mr-[30px] text-black ph:w-[100%] ph:mb-[10px]" placeholder="Улица" />
                <input type="text" name="" className="w-[15%] p-[10px_20px] rounded-md mr-[30px] text-black ph:w-[100%] ph:mb-[10px]" placeholder="Дом" />
                <button type="submit" className="p-[10px_60px] bg-[#6984F0] rounded-full ph:w-[100%] ph:mb-[10px]">Проверить</button>
            </form>
        </div>
    </section>
  )
}

export default Fifth