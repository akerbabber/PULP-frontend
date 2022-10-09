import Head from 'next/head'
import Header from './header'


export default function Amount() {
  return (
    <div>
      <Head>
        <title>PULP / Borrowers Platform</title>
      </Head>
      <div>
      <div className='flex w-full h-[6vw] bg-white justify-between p-5'>
        <div className='flex' id="topMenu">
        <div className='bg-white h-full w-[5vw] mb-10 text-center' style={{
                  background: 'url(/static/Logo.png) center',
                  width:'7vw',
                  backgroundRepeat: 'no-repeat',
                }}>
            </div>
        </div>
        <div className='flex'>
          <div className='rounded-xl font-ProtoMono-Light border-orange-400 text-orange-400  border-2 bg-white p-2 flex self-center mr-4'>Log in</div>
          <div className='rounded-xl font-ProtoMono-Light  bg-orange-400  p-4 flex self-center text-white'>I am a Lender</div>
        </div>
      </div>
    </div>
      <div className='font-ProtoMono-Light p-[1vw]  text-center w-full h-[52vw] pt-[2vw] flex-col items-center  bg-gradient-to-b from-orange-400 to-yellow-300 text-white'>
        <div className='text-[3vw] font-ProtoMono-SemiBold  text-center mt-[2vw] text-green-900'>
        Change your future in a few simple steps
        </div>
        <div className='text-[1.7vw] font-ProtoMono-Light text-center mb-[3vw] p-12 w-full m-auto self-center' id="steps">
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
                                <div class="bg-white border-2 border-gray-900  h-11 w-11 rounded-full shadow flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="" height="" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                            <div class="w-1/3 bg-green-900 h-1 flex items-center">
                                <div class="bg-white border-2 border-gray-900 h-11 w-11 rounded-full shadow flex items-center justify-center">
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
      <div className='rounded-[150px]    bg-white w-[78%] h-[20vw] m-auto p-20'>
          <div className='text-[1.6vw] font-ProtoMono-SemiBold  text-gray-900 mb-[3vw] m-auto w-full'>How much would you like to borrow?</div>
          <div className='flex space-x-7 items-center justify-center '>
              <span className='text-[1.4vw] text-gray-900'>Borrowing Amount:</span>
              <input className='text-[1.4vw] w-[30%] rounded-md border-green-900 border-2 pl-2 pt-2 pb-2 text-center text-gray-900' placeholder='DAI' />
          </div>
          <button className='rounded-lg text-[1.2vw] p-4 bg-white border-2 border-green-900 mt-[3vw] text-gray-900 hover:bg-green-900 hover:text-white'>Continue</button>
          
        </div>
      </div>
        
       
      </div>
    </div>
  )
}
