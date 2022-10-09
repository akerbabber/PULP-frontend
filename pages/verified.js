import Head from 'next/head'
import Header from './header'
import { useRouter } from 'next/router'


export default function Verified() {

  const router  = useRouter();

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
                                <div class="bg-white border-2 border-gray-900  h-11 w-11 rounded-full shadow flex items-center justify-center">
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
      <div className='rounded-[150px]    bg-white w-[78%] h-[28vw] m-auto p-16 '>
          <div className='text-[1.4vw] font-ProtoMono-Light mb-[2vw] text-gray-900 m-auto w-full'>Great! Now open your Polygon ID Wallet and scan the following QR codes.</div>

          <div className='grid grid-cols-2 pl-10 pr-10 mb-[0.3vw]' id='barcode'>
                <div>
                  <div className='text-[1.2vw] font-ProtoMono-Light  text-gray-900 '>AGE</div>
                  <div className='bg-white h-[8vw] w-[8vw] m-auto' style={{
                    background: 'url(/static/age.jpg) center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
              <div className='bg-white h-[2vw] w-[2vw] m-auto' style={{
                    background: 'url(/static/checked.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
                </div>
                <div>
                  <div className='text-[1.2vw] font-ProtoMono-Light  text-gray-900 '>DAO Contributor</div>
                  <div className='bg-white h-[8vw] w-[8vw] m-auto' style={{
                    background: 'url(/static/dao.jpg) center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
              <div className='bg-white h-[2vw] w-[2vw] m-auto' style={{
                    background: 'url(/static/checked.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
                </div>
          </div>
          <div className='text-[1.4vw] font-ProtoMono-Light text-orange-600 mt-10 '>Congratulations! You have a Good Reputation.</div>
          <button onClick={() => router.push("/wallets")} className='rounded-lg text-[1.2vw] p-4 bg-white border-2 border-green-900 mt-[1vw] text-gray-900 hover:bg-green-900 hover:text-white'>Continue</button>
          
        </div>
      </div>
        
       
      </div>
    </div>
  )
}
