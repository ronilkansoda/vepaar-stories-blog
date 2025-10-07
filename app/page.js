import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage">
      <section className="top-picks">
        <div className="inner">
          <div className="top-picks-title">Top Picks</div>
          <div className="top-picks-items">
            <div className="tp-item">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumb1" />
              <div className="tp-title">boAt parent Imagine Marketing returns to profit in FY25 even as...</div>
            </div>
            <div className="tp-item">
              <img src="https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumb2" />
              <div className="tp-title">Lenskart bags SEBI approval for IPO; to raise Rs 2,150 Cr via...</div>
            </div>
            <div className="tp-item">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=600&q=80&auto=format&fit=crop" alt="thumb3" />
              <div className="tp-title">Ola Electric gets govt certification for in-house ferrite motor...</div>
            </div>
            <div className="tp-item">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&auto=format&fit=crop" alt="thumb4" />
              <div className="tp-title">Dhan parent co Raise Financial Services joins unicorn club as it raise...</div>
            </div>
          </div>
        </div>
      </section>

      <main className="content-grid">
        <div className="feature">
          <img className="feature-image" src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="feature" />
          <div className="feature-meta">In-focus</div>
          <h1 className="feature-title">The Wellness Co. is bringing science-backed preventive healthcare to India</h1>
          <p className="feature-excerpt">From cryotherapy and oxygen chambers to genetic testing and fitness programmes. The Wellness Co. says it is redefining healthcare through personalised plans.</p>
          <div className="feature-by">Megha Ghosh</div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-list">
            <h3>The CapTable</h3>
            <div className="sidebar-right">
              <div className="mini-item">
                <div className="mini-text">Zappfresh beat bigger rivals to the stock market. So, why won't investors bite?</div>
                <img className="s-thumb" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80&auto=format&fit=crop" alt="zappfresh" />
              </div>
              <div className="mini-item">
                <div className="mini-text">India’s startups go thirsty as the world drowns in AI money</div>
                <img className="s-thumb" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80&auto=format&fit=crop" alt="ai-money" />
              </div>
              <div className="mini-item">
                <div className="mini-text">How founders are navigating funding winters</div>
                <img className="s-thumb" src="https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80&auto=format&fit=crop" alt="funding" />
              </div>
              <div className="mini-item">
                <div className="mini-text">IndusInd Bank, Bank of Baroda, Kotak Mahindra Bank: Nomura shares targets post Q2 updates</div>
                <img className="s-thumb" src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini3" />
              </div>
            </div>
          </div>


        </aside>
      </main>

      <section className="section-two">
        <div className="section-inner">
          <div className="left-big">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="cover" />
            <div className="tag">COVER STORY</div>
            <h2>The New Silk Sheets: What’s Fueling India’s Luxury Hotel Boom?</h2>
            <p className="small-excerpt">A look at how hospitality brands are investing in experience-led differentiation to capture high-value guests.</p>
          </div>

          <div className="right-list">
            <div className="mini-item">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini1" />
              <div className="mini-text">Prestige Estates shares in focus today after subsidiary gets GST notice in Mumbai</div>
            </div>
            <div className="mini-item">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini2" />
              <div className="mini-text">At $4,000 an ounce, gold is on fire: What should Indian buyers do now?</div>
            </div>
            <div className="mini-item">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=200&q=80&auto=format&fit=crop" alt="mini3" />
              <div className="mini-text">IndusInd Bank, Bank of Baroda, Kotak Mahindra Bank: Nomura shares targets post Q2 updates</div>
            </div>
          </div>
        </div>

        <div className="below-list">
          <div className="col">
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop" alt="list1" />
              <div className="list-text">TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview</div>
            </div>
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop" alt="list1" />
              <div className="list-text">TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview</div>
            </div>
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop" alt="list1" />
              <div className="list-text">TCS, Infosys, HCL, Wipro, TechM Q2 results: 4 things to watch, earnings preview</div>
            </div>
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80&auto=format&fit=crop" alt="list2" />
              <div className="list-text">Reliance Power, Reliance Infra shares in focus after SEBI show cause notices; firms reply</div>
            </div>
          </div>

          <div className="col">
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop" alt="list3" />
              <div className="list-text">'Tell me which country should we join': Jaishankar says India never aligned with any power</div>
            </div>
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop" alt="list3" />
              <div className="list-text">'Tell me which country should we join': Jaishankar says India never aligned with any power</div>
            </div>
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=400&q=80&auto=format&fit=crop" alt="list3" />
              <div className="list-text">'Tell me which country should we join': Jaishankar says India never aligned with any power</div>
            </div>
            <div className="list-item">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&auto=format&fit=crop" alt="list4" />
              <div className="list-text">'You pay cow tax on liquor, tolls, cement': Investment banker breaks down a ₹3,000 cr bill</div>
            </div>
          </div>
        </div>
      </section>
      <section className="full-carousel" aria-label="Top videos carousel">
        <div className="carousel-track">
          <div className="carousel-item">
            <div className="media">
              <img src="https://images.unsplash.com/photo-1508385082359-f7f6b1b3a3a9?w=1400&q=80&auto=format&fit=crop" alt="slide1"/>
              <div className="overlay">
                <div className="duration">6:06</div>
                <button className="play-button" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="carousel-caption">Andrés Velasco On India, UK, China And Trade</div>
          </div>

          <div className="carousel-item">
            <div className="media">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80&auto=format&fit=crop" alt="slide2"/>
              <div className="overlay">
                <div className="duration">1:59</div>
                <button className="play-button" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="carousel-caption">Kedarnath Dham Receives Its First Snowfall Of The Season</div>
          </div>

          <div className="carousel-item">
            <div className="media">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80&auto=format&fit=crop" alt="slide3"/>
              <div className="overlay">
                <div className="duration">3:57</div>
                <button className="play-button" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="carousel-caption">Boeing 787 Safety Alert In India</div>
          </div>

          <div className="carousel-item">
            <div className="media">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1400&q=80&auto=format&fit=crop" alt="slide4"/>
              <div className="overlay">
                <div className="duration">3:34</div>
                <button className="play-button" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="carousel-caption">India’s Moment In Global Luxury: Rahul Mishra</div>
          </div>
          <div className="carousel-item">
            <div className="media">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1400&q=80&auto=format&fit=crop" alt="slide4"/>
              <div className="overlay">
                <div className="duration">3:34</div>
                <button className="play-button" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="carousel-caption">India’s Moment In Global Luxury: Rahul Mishra</div>
          </div>
          <div className="carousel-item">
            <div className="media">
              <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=1400&q=80&auto=format&fit=crop" alt="slide4"/>
              <div className="overlay">
                <div className="duration">3:34</div>
                <button className="play-button" aria-label="Play">▶</button>
              </div>
            </div>
            <div className="carousel-caption">India’s Moment In Global Luxury: Rahul Mishra</div>
          </div>
        </div>
      </section>
    </div>
  );
}
