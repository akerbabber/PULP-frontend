import Head from 'next/head'
import Header from './header'


export default function Final() {
  return (
    <div>
      <Head>
        <title>PULP / Borrowers Platform</title>
      </Head>
     <Header />
      <div className='font-ProtoMono-Light  text-center w-full h-[52vw] pt-[3vw] flex-col bg-gradient-to-b from-orange-400 to-yellow-300 text-gray-900'>
        <div className='text-[3vw] font-ProtoMono-SemiBold  text-center mb-[5vw] mt-[2vw] text-green-900 '>
        Private Uncollateralized Lending Protocol
        </div>
        <div className='text-[2vw] font-ProtoMono-Light text-center mt-[5vw]'>Congrats Borrower.eth! </div>
        <div className='text-[2vw] font-ProtoMono-Light text-center mb-[8vw]'>You have been matched with Helper.eth Lender. </div>
        <div className='text-[2vw] font-ProtoMono-Light text-center mt-[4vw]'>Good luck, we believe in you!</div>
       <div className='flex space-x-10 ml-[30%] justify-center border-2 rounded-xl border-gray-900 w-[40%] mt-10'>
        <div className='text-[1.4vw] font-ProtoMono-Light text-center mt-[2vw]'>Need to Borrow more?</div>
        <div className='text-[1.2vw] font-ProtoMono-Light text-center mt-[2vw] mb-[3vw] rounded-xl bg-white text-orange-400 w-[30%] p-3  hover:text-white hover:bg-green-900 '>Get Started!</div>
       </div>
      </div>
    </div>
  )
}
