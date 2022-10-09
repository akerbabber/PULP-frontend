import Head from 'next/head'
import Header from './header'
import { useRouter } from 'next/router'

export default function Wallets() {

  const router = useRouter();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change network to Goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <div>
      <Head>
        <title>PULP / Borrowers Platform</title>
      </Head>
      <Header />
      <div className='font-ProtoMono-Light p-[1vw]  text-center w-full h-[52vw] pt-[2vw] flex-col items-center  bg-gradient-to-b from-orange-400 to-yellow-300 text-white'>
        <div className='text-[3vw] font-ProtoMono-SemiBold  text-center mt-[2vw] text-green-900'>
        Change your future in a few simple steps
        </div>
        <div className='text-[1.7vw] font-ProtoMono-Light text-center mb-[3vw] p-6 w-full m-auto self-center' id="steps">
        <div class="h-full w-full py-16">
            <div class="container mx-auto">
                <dh-component>
                    <div class="w-11/12 lg:w-[90%] mx-auto">
                        <div class="bg-gray-200 h-1 flex items-center justify-between">
                            <div class="w-1/3 bg-green-900 h-1 flex items-center">
                                <div class="bg-green-900  h-11 w-11 rounded-full shadow flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="" height="" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                              <div class="w-1/3 bg-green-900 h-1 flex items-center">
                                <div class="bg-green-900  border-gray-900  h-11 w-11 rounded-full shadow flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="" height="" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                            <div class="w-1/3 bg-green-900 h-1 flex items-center">
                                <div class="bg-green-900 h-11 w-11 rounded-full shadow flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="" height="" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                                <div class="bg-green-900 border-2 border-gray-900  h-11 w-11 rounded-full shadow flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="" height="" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                        </div>
                    </div>
                </dh-component>
            </div>
        </div>
        <div className='grid grid-cols-4 text-[1.3vw] pl-[3vw] pr-[3vw] text-gray-900  '>
          <div>Input Information</div>
          <div>Choose Traits</div>
          <div>Verify Traits</div>
          <div>Ethereum Wallet</div>
        </div>
        </div>
      <div className='flex justify-around'>
      <div className='rounded-[150px]    bg-white w-[78%] h-[28vw] m-auto p-8 '>
          <div className='text-[1.4vw] font-ProtoMono-Light mb-[2vw] text-gray-900 m-auto w-full'>Finally, sign in with your Ethereum Wallet to save these changes.</div>
              <div id="wallets-container">
              <ul role="list" class="p-6 divide-y divide-slate-200 w-[94%] ml-10">
                <li class=" first:pt-0 last:pb-0">
                  <div class="ml-3 flex border-2 border-b-0 p-3 border-gray-600 hover:bg-yellow-100 ">
                  <div className='bg-white h-[3vw] mb-[0.3vw] w-[11%] text-center' style={{
                      background: 'url(/static/metamask.png) center',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center'
                    }}>
                  </div>
                    <div className='text-[1.6vw] font-medium text-slate-900 flex self-center'>Meta Mask</div>
                    <div className='bg-white h-[3vw] mb-[0.3vw] ml-[60%] w-[11%] text-center' style={{
                      background: 'url(/static/right.png) center',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center'
                    }}>
                  </div>
                  </div>
                </li>
                <li class=" first:pt-0 last:pb-0">
                  <div class="ml-3 flex border-l-2 border-r-2 p-3 border-gray-600 hover:bg-yellow-100 ">
                  <div className='bg-white h-[3vw] mb-[0.3vw] w-[11%] text-center' style={{
                      background: 'url(/static/walletconnect.png) center',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center'
                    }}>
                  </div>
                    <div className='text-[1.6vw] font-medium text-slate-900 flex self-center'>Wallet Connect</div>
                    <div className='bg-white h-[3vw] mb-[0.3vw] ml-[52%] w-[11%] text-center' style={{
                      background: 'url(/static/right.png) center',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center'
                    }}>
                  </div>
                  </div>
                </li>
                <li class=" first:pt-0 last:pb-0">
                  <div class="ml-3 flex border-l-2 border-r-2 border-b-2 p-3 border-gray-600 hover:bg-yellow-100 ">
                  <div className='bg-white h-[3vw] mb-[0.3vw] w-[11%] text-center' style={{
                      background: 'url(/static/coinbase.png) center',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center'
                    }}>
                  </div>
                    <div className='text-[1.6vw] font-medium text-slate-900 flex self-center'>CoinBase wallet</div>
                    <div className='bg-white h-[3vw] mb-[0.3vw] ml-[50%] w-[11%] text-center' style={{
                      background: 'url(/static/right.png) center',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'center'
                    }}>
                  </div>
                  </div>
                </li>

            </ul>
              </div>
         
         <button onClick={() => router.push("/final")} className='rounded-lg text-[1.2vw] p-4 bg-white border-2 border-green-900 mt-[1vw] text-gray-900 hover:bg-green-900 hover:text-white'>Continue</button>
          
        </div>
      </div>
        
       
      </div>
    </div>
  )
}
