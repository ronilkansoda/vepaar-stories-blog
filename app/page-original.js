import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-7">
      {/* Full-width carousel */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-gray-50 py-5" aria-label="Top videos carousel">
        <div className="flex gap-5 px-9 overflow-x-auto snap-x snap-mandatory webkit-overflow-scrolling-touch scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          <div className="min-w-[300px] h-48 flex-shrink-0 snap-start rounded-lg overflow-hidden relative md:min-w-[320px]">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1508385082359-f7f6b1b3a3a9?w=1400&q=80&auto=format&fit=crop" alt="slide1" className="w-full h-48 object-cover"/>
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-start gap-2.5 z-30">
                <div className="bg-black/75 text-white px-2 py-1 rounded text-xs font-bold">6:06</div>
                <button className="bg-blue-500/95 text-white border-none w-10 h-10 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-blue-600" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="absolute left-3 bottom-16 text-white font-bold z-28 max-w-80 drop-shadow-lg">Andrés Velasco On India, UK, China And Trade</div>
          </div>

          <div className="min-w-[300px] h-48 flex-shrink-0 snap-start rounded-lg overflow-hidden relative md:min-w-[320px]">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80&auto=format&fit=crop" alt="slide2" className="w-full h-48 object-cover"/>
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-start gap-2.5 z-30">
                <div className="bg-black/75 text-white px-2 py-1 rounded text-xs font-bold">1:59</div>
                <button className="bg-blue-500/95 text-white border-none w-10 h-10 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-blue-600" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="absolute left-3 bottom-16 text-white font-bold z-28 max-w-80 drop-shadow-lg">Kedarnath Dham Receives Its First Snowfall Of The Season</div>
          </div>

          <div className="min-w-[300px] h-48 flex-shrink-0 snap-start rounded-lg overflow-hidden relative md:min-w-[320px]">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80&auto=format&fit=crop" alt="slide3" className="w-full h-48 object-cover"/>
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-start gap-2.5 z-30">
                <div className="bg-black/75 text-white px-2 py-1 rounded text-xs font-bold">3:57</div>
                <button className="bg-blue-500/95 text-white border-none w-10 h-10 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-blue-600" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="absolute left-3 bottom-16 text-white font-bold z-28 max-w-80 drop-shadow-lg">Boeing 787 Safety Alert In India</div>
          </div>

          <div className="min-w-[300px] h-48 flex-shrink-0 snap-start rounded-lg overflow-hidden relative md:min-w-[320px]">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1400&q=80&auto=format&fit=crop" alt="slide4" className="w-full h-48 object-cover"/>
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-start gap-2.5 z-30">
                <div className="bg-black/75 text-white px-2 py-1 rounded text-xs font-bold">3:34</div>
                <button className="bg-blue-500/95 text-white border-none w-10 h-10 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-blue-600" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="absolute left-3 bottom-16 text-white font-bold z-28 max-w-80 drop-shadow-lg">India's Moment In Global Luxury: Rahul Mishra</div>
          </div>
          
          <div className="min-w-[300px] h-48 flex-shrink-0 snap-start rounded-lg overflow-hidden relative md:min-w-[320px]">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1400&q=80&auto=format&fit=crop" alt="slide5" className="w-full h-48 object-cover"/>
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-start gap-2.5 z-30">
                <div className="bg-black/75 text-white px-2 py-1 rounded text-xs font-bold">3:34</div>
                <button className="bg-blue-500/95 text-white border-none w-10 h-10 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-blue-600" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="absolute left-3 bottom-16 text-white font-bold z-28 max-w-80 drop-shadow-lg">India's Moment In Global Luxury: Rahul Mishra</div>
          </div>

          <div className="min-w-[300px] h-48 flex-shrink-0 snap-start rounded-lg overflow-hidden relative md:min-w-[320px]">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1400&q=80&auto=format&fit=crop" alt="slide6" className="w-full h-48 object-cover"/>
              <div className="absolute left-3 right-3 bottom-3 flex items-center justify-start gap-2.5 z-30">
                <div className="bg-black/75 text-white px-2 py-1 rounded text-xs font-bold">3:34</div>
                <button className="bg-blue-500/95 text-white border-none w-10 h-10 rounded-full text-lg cursor-pointer flex items-center justify-center hover:bg-blue-600" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="absolute left-3 bottom-16 text-white font-bold z-28 max-w-80 drop-shadow-lg">India's Moment In Global Luxury: Rahul Mishra</div>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="flex py-5 overflow-hidden">
        <div className="w-full flex items-center gap-5">
          <div className="text-4xl lg:text-5xl font-extrabold mr-6 text-gray-900 flex-shrink-0">Top Picks</div>
          <div className="flex gap-6 flex-1 overflow-x-auto pb-2 snap-x snap-mandatory webkit-overflow-scrolling-touch scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            <div className="min-w-[220px] w-[220px] font-semibold relative flex-shrink-0 snap-start md:min-w-[180px] md:w-[180px] sm:min-w-[160px] sm:w-[160px]">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumb1" className="w-full h-30 object-cover rounded mb-2 md:h-25 sm:h-[90px]" />
              <div className="font-semibold mt-1.5 leading-tight text-gray-900 text-sm">boAt parent Imagine Marketing returns to profit in FY25 even as...</div>
            </div>
            <div className="min-w-[220px] w-[220px] font-semibold relative flex-shrink-0 snap-start md:min-w-[180px] md:w-[180px] sm:min-w-[160px] sm:w-[160px]">
              <img src="https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumb2" className="w-full h-30 object-cover rounded mb-2 md:h-25 sm:h-[90px]" />
              <div className="font-semibold mt-1.5 leading-tight text-gray-900 text-sm">Lenskart bags SEBI approval for IPO; to raise Rs 2,150 Cr via...</div>
            </div>
            <div className="min-w-[220px] w-[220px] font-semibold relative flex-shrink-0 snap-start md:min-w-[180px] md:w-[180px] sm:min-w-[160px] sm:w-[160px]">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=600&q=80&auto=format&fit=crop" alt="thumb3" className="w-full h-30 object-cover rounded mb-2 md:h-25 sm:h-[90px]" />
              <div className="font-semibold mt-1.5 leading-tight text-gray-900 text-sm">Ola Electric gets govt certification for in-house ferrite motor...</div>
            </div>
            <div className="min-w-[220px] w-[220px] font-semibold relative flex-shrink-0 snap-start md:min-w-[180px] md:w-[180px] sm:min-w-[160px] sm:w-[160px]">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&auto=format&fit=crop" alt="thumb4" className="w-full h-30 object-cover rounded mb-2 md:h-25 sm:h-[90px]" />
              <div className="font-semibold mt-1.5 leading-tight text-gray-900 text-sm">Dhan parent co Raise Financial Services joins unicorn club as it raise...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 mt-6 items-start">
        <div className="order-1">
          <img className="h-56 w-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-md mb-5 object-cover" src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="feature" />
          <div className="text-sm font-bold text-gray-700 mb-2">In-focus</div>
          <h1 className="text-4xl lg:text-5xl leading-none my-0 mb-4 text-gray-900">The Wellness Co. is bringing science-backed preventive healthcare to India</h1>
          <p className="text-gray-600 text-lg mb-5">From cryotherapy and oxygen chambers to genetic testing and fitness programmes. The Wellness Co. says it is redefining healthcare through personalised plans.</p>
          <div className="font-bold text-gray-900">Megha Ghosh</div>
        </div>

        <aside className="order-2 lg:order-2">
          <div>
            <h3 className="text-3xl lg:text-4xl my-0 mb-3 font-extrabold text-gray-900">The CapTable</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4 py-2.5 border-t border-gray-200">
                <div className="flex-1 mr-3 font-semibold text-gray-900">Zappfresh beat bigger rivals to the stock market. So, why won't investors bite?</div>
                <img className="w-30 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80&auto=format&fit=crop" alt="zappfresh" />
              </div>
              <div className="flex items-center justify-between gap-4 py-2.5 border-t border-gray-200">
                <div className="flex-1 mr-3 font-semibold text-gray-900">India's startups go thirsty as the world drowns in AI money</div>
                <img className="w-30 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80&auto=format&fit=crop" alt="ai-money" />
              </div>
              <div className="flex items-center justify-between gap-4 py-2.5 border-t border-gray-200">
                <div className="flex-1 mr-3 font-semibold text-gray-900">How founders are navigating funding winters</div>
                <img className="w-30 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80&auto=format&fit=crop" alt="funding" />
              </div>
              <div className="flex items-center justify-between gap-4 py-2.5 border-t border-gray-200">
                <div className="flex-1 mr-3 font-semibold text-gray-900">IndusInd Bank, Bank of Baroda, Kotak Mahindra Bank: Nomura shares targets post Q2 updates</div>
                <img className="w-30 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini3" />
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Section Two */}
      <section className="mt-12 border-t border-gray-200 pt-7 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start max-w-6xl mx-auto">
          <div>
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="cover" className="w-full h-56 object-cover rounded-md" />
            <div className="text-red-500 font-extrabold mt-3">COVER STORY</div>
            <h2 className="text-3xl my-2 text-gray-900">The New Silk Sheets: What's Fueling India's Luxury Hotel Boom?</h2>
            <p className="text-gray-600">A look at how hospitality brands are investing in experience-led differentiation to capture high-value guests.</p>
          </div>

          <div>
            <div className="flex gap-3 py-3 border-t border-gray-200">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini1" className="w-28 h-18 object-cover rounded" />
              <div className="font-semibold text-gray-900">Prestige Estates shares in focus today after subsidiary gets GST notice in Mumbai</div>
            </div>
            <div className="flex gap-3 py-3 border-t border-gray-200">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini2" className="w-28 h-18 object-cover rounded" />
              <div className="font-semibold text-gray-900">At $4,000 an ounce, gold is on fire: What should Indian buyers do now?</div>
            </div>
            <div className="flex gap-3 py-3 border-t border-gray-200">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini3" className="w-28 h-18 object-cover rounded" />
              <div className="font-semibold text-gray-900">IndusInd Bank, Bank of Baroda, Kotak Mahindra Bank: Nomura shares targets post Q2 updates</div>
            </div>
          </div>
        </div>

        {/* Below List */}
        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop" alt="list1" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview</div>
            </div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop" alt="list2" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview</div>
            </div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop" alt="list3" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview</div>
            </div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80&auto=format&fit=crop" alt="list4" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">Reliance Power, Reliance Infra shares in focus after SEBI show cause notices; firms reply</div>
            </div>
          </div>

          <div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop" alt="list5" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">'Tell me which country should we join': Jaishankar says India never aligned with any power</div>
            </div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop" alt="list6" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">'Tell me which country should we join': Jaishankar says India never aligned with any power</div>
            </div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop" alt="list7" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">'Tell me which country should we join': Jaishankar says India never aligned with any power</div>
            </div>
            <div className="flex gap-3.5 py-3 border-t border-gray-200 items-center">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&auto=format&fit=crop" alt="list8" className="w-36 h-24 object-cover rounded-md" />
              <div className="font-semibold text-gray-900">'You pay cow tax on liquor, tolls, cement': Investment banker breaks down a ₹3,000 cr bill</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}