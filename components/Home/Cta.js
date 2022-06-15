export default function Cta({data}) {
  const { title, sub_title, buttons } = data
  return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 rounded-2xl md:py-14 lg:px-10 py-8 px-3 flex md:flex-row flex-col mb-10">
          <div className="md:w-1/2 px-4">
            <h2 className="text-3xl font-semibold mb-3">{title}</h2>
            <p className="text-xl font-normal text-gray-500 mb-5">{sub_title}</p>
          </div>
          <div className="md:w-1/2 px-4">
            <div className=" flex md:flex-row flex-col md:justify-end justify-start text-center">
              {buttons[0] && buttons[0].button_text && <a href={buttons[0].button_url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-white border border-slate-300 py-3 px-5 text-gray-600 text-base font-medium md:mr-3 md:mb-0 mb-3 md:w-auto w-full">{buttons[0].button_text}</a>}
              {buttons[1] && buttons[1].button_text && <a href={buttons[1].button_url} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-zinc-600 border  border-zinc-600 py-3 px-5 text-white text-base font-medium md:w-auto w-full">{buttons[1].button_text}</a>}
            </div>
          </div>
        </div>
      </div>
  )
}
