import Head from 'next/head'
import Header from './header'
import { useRouter } from 'next/router'


export default function Checkedbox() {

  const router = useRouter();
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
      <div className='rounded-[150px]    bg-white w-[78%] h-[28vw] m-auto p-16 '>
          <div className='text-[1.4vw] font-ProtoMono-Light  text-gray-900 mb-[1vw] m-auto w-full'>Please select the Good Reputation Traits that you would like to verify.</div>
          <div className='text-[1.3vw] font-ProtoMono-Light text-gray-900  mb-10'>(Minimum of Two Required)</div>
          <div className=' text-[1.5vw] text-gray-900 space-y-3 flex-col  text-left w-auto pl-[10%] ' id="checked-box" >
          <div>
            <input type="checkbox" class="accent-green-900 h-6 w-6 rounded-full mr-3 " />Age
          </div>
          <div>
            <input type="checkbox" class="accent-green-900 h-6 w-6 rounded-full mr-3 " />DAO Contributor
          </div>
          <div>
            <input type="checkbox" class="accent-green-900 h-6 w-6 rounded-full mr-3  " />Educational Institution
          </div>
          <div>
            <input type="checkbox" class="accent-green-900 h-6 w-6 rounded-full mr-3  " />Community Member
          </div>
          </div>
          <button onClick={() => router.push("/qrscan")} className='rounded-lg text-[1.2vw] p-4 bg-white border-2 border-green-900 mt-[3vw] text-gray-900 hover:bg-green-900 hover:text-white'>Continue</button>
          
        </div>
      </div>
        
       
      </div>
    </div>
  )
}
