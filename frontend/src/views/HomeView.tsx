

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-green-800 bg-opacity-90 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/beaver-logo.png" alt="BOBER Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold">BOBER</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#tokenomics" className="hover:text-yellow-300">Tokenomics</a>
            <a href="#roadmap" className="hover:text-yellow-300">Roadmap</a>
            <a href="#how-to-buy" className="hover:text-yellow-300">How to Buy</a>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-2 px-4 rounded-full">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/beaver-background.png" 
            alt="Cute beaver holding a twig" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-yellow-400">BOBER</span> The Beaver Coin
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The cutest dam builder in the crypto forest! Join our ecosystem and help Bober build the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full text-lg">
              Buy $BOBER
            </button>
            <button className="border-2 border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-20 font-bold py-3 px-8 rounded-full text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-green-800 bg-opacity-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-yellow-400">BOBER</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="/beaver-character.png" 
                alt="BOBER character" 
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                BOBER is a meme coin with a mission - to bring the hardworking spirit of beavers to the crypto world. 
                Just like beavers build dams that create entire ecosystems, $BOBER aims to build a strong community 
                that supports each other.
              </p>
              <p className="text-lg mb-6">
                Our cute beaver mascot represents persistence, teamwork, and the ability to create something 
                amazing from simple materials (or in our case, from simple transactions).
              </p>
              <div className="bg-green-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Contract Address:</h3>
                <div className="flex items-center bg-green-800 p-3 rounded-lg overflow-x-auto">
                  <code className="text-yellow-300">0xBe4v3r...B0b3r</code>
                  <button className="ml-auto bg-green-700 hover:bg-green-600 px-3 py-1 rounded">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-yellow-400">Token</span>omics
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Liquidity Pool</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-green-800 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Community Rewards</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-green-800 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Development</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-green-800 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Marketing</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-green-800 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Key Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span><strong>Total Supply:</strong> 1,000,000,000 $BOBER</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span><strong>Tax:</strong> 5% buy/sell (3% liquidity, 2% marketing)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span><strong>Chain:</strong> Ethereum (ERC-20)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span><strong>LP Locked:</strong> 1 year (proof available)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span><strong>Contract Renounced:</strong> Yes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 bg-green-800 bg-opacity-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-yellow-400">Dam</span> Building Roadmap
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-yellow-500"></div>
            
            {/* Roadmap items */}
            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="relative md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-10 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-yellow-400">Phase 1: Gathering Twigs</h3>
                  <p className="text-lg">Q2 2023</p>
                </div>
                <div className="hidden md:block w-16 h-16 rounded-full bg-yellow-500 border-4 border-green-900 flex items-center justify-center mx-auto">
                  <span className="text-green-900 font-bold">1</span>
                </div>
                <div className="md:w-5/12 md:pl-10 bg-green-900 p-6 rounded-xl">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Token launch & initial liquidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Community building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>First CEX listing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>500 holders</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-10 md:text-right mb-6 md:mb-0 order-3">
                  <h3 className="text-2xl font-bold text-yellow-400">Phase 2: Building the Dam</h3>
                  <p className="text-lg">Q3 2023</p>
                </div>
                <div className="hidden md:block w-16 h-16 rounded-full bg-yellow-500 border-4 border-green-900 flex items-center justify-center mx-auto order-2">
                  <span className="text-green-900 font-bold">2</span>
                </div>
                <div className="md:w-5/12 md:pl-10 bg-green-900 p-6 rounded-xl order-1 md:order-3">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>NFT collection launch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Partnerships with other projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Top 10 CEX listing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>5,000 holders</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-10 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-yellow-400">Phase 3: Ecosystem Lake</h3>
                  <p className="text-lg">Q4 2023</p>
                </div>
                <div className="hidden md:block w-16 h-16 rounded-full bg-yellow-500 border-4 border-green-900 flex items-center justify-center mx-auto">
                  <span className="text-green-900 font-bold">3</span>
                </div>
                <div className="md:w-5/12 md:pl-10 bg-green-900 p-6 rounded-xl">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>BOBER merch store</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>BOBER DAO launch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Charity initiatives for wildlife</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>25,000 holders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How to Buy <span className="text-yellow-400">$BOBER</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-green-900 p-6 rounded-xl">
              <div className="text-yellow-400 text-3xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Get a Wallet</h3>
              <p className="mb-4">
                Download MetaMask or Trust Wallet and set it up. Make sure to store your seed phrase safely!
              </p>
              <div className="flex space-x-3">
                <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-lg">
                  MetaMask
                </button>
                <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-lg">
                  Trust Wallet
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-green-900 p-6 rounded-xl">
              <div className="text-yellow-400 text-3xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Get Some ETH</h3>
              <p className="mb-4">
                Buy Ethereum from an exchange like Coinbase or Binance, then send it to your wallet.
              </p>
              <div className="flex space-x-3">
                <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-lg">
                  Buy ETH
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-green-900 p-6 rounded-xl">
              <div className="text-yellow-400 text-3xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Swap for BOBER</h3>
              <p className="mb-4">
                Connect to Uniswap, paste our contract address, and swap your ETH for $BOBER.
              </p>
              <div className="flex space-x-3">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold px-4 py-2 rounded-lg">
                  Buy on Uniswap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-green-800 bg-opacity-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the <span className="text-yellow-400">Beaver</span> Lodge
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Our community is building the biggest dam in crypto. Come help us gather twigs and build something amazing!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-green-700 hover:bg-green-600 p-4 rounded-xl flex items-center">
              <img src="/telegram-icon.png" alt="Telegram" className="h-8 w-8 mr-2" />
              Telegram
            </a>
            <a href="#" className="bg-green-700 hover:bg-green-600 p-4 rounded-xl flex items-center">
              <img src="/twitter-icon.png" alt="Twitter" className="h-8 w-8 mr-2" />
              Twitter
            </a>
            <a href="#" className="bg-green-700 hover:bg-green-600 p-4 rounded-xl flex items-center">
              <img src="/discord-icon.png" alt="Discord" className="h-8 w-8 mr-2" />
              Discord
            </a>
            <a href="#" className="bg-green-700 hover:bg-green-600 p-4 rounded-xl flex items-center">
              <img src="/dextools-icon.png" alt="Dextools" className="h-8 w-8 mr-2" />
              Chart
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-green-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <img src="/beaver-logo.png" alt="BOBER Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold">BOBER</span>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-yellow-300">Terms</a>
              <a href="#" className="hover:text-yellow-300">Privacy</a>
              <a href="#" className="hover:text-yellow-300">Disclaimer</a>
            </div>
            <div>
              <p className="text-sm opacity-75">
                © 2023 BOBER Coin. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;