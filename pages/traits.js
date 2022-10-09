import Head from 'next/head'
import Header from './header'
import { useRouter } from 'next/router'


export default function Traits() {
  const router  = useRouter();
  return (
    <div>
      <Head>
        <title>PULP / Borrowers Platform</title>
      </Head>
      <Header />
      <div className='font-ProtoMono-Light p-[1vw]  text-center w-full h-[52vw] pt-[2vw] flex-col bg-gradient-to-b from-orange-400 to-yellow-300 text-white'>
        <div className='text-[3vw] font-ProtoMono-SemiBold  text-center mt-[2vw]  '>
        Change your future today
        </div>
        <div className='text-[1.7vw] font-ProtoMono-Light text-center mb-[1vw] p-12'>These are the reccomended traits you can choose to add to your Polygon ID Wallet to prove your Good Reputation. We believe YOU deserve a chance. Claim back your Identity.</div>
        <div className='font-ProtoMono-Light text-[1.3vw] w-full h-[5vw] mt-10 text-center grid grid-cols-4 gap-6 p-5  ' id="bottomMenu">
          <div  className='font-ProtoMono-Light flex-col justify-center'>
            <div className='bg-white h-full mb-[0.3vw] w-auto m-auto text-center' style={{
                  background: 'url(/static/calendar.png) center',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'center'
                }}>
            </div>
            <div className='mb-[0.3vw] text-gray-900'>Age</div>
            <div className='font-ProtoMono-Light text-[1vw]'>Prove you are over the age of 18. </div>
          </div>
          <div>
            <div className='bg-white h-full mb-[0.3vw] w-auto m-auto' style={{
                    background: 'url(/static/table.png) center',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div className='mb-[0.3vw] text-gray-900'>DAO Contributor</div>
            <div className='font-ProtoMono-Light text-[1vw]'>Showcase that you are a  respected DAO Contributor. Prove that you a part of governing a trustable ecosystem. </div>
          </div>
          <div>
            <div className='bg-white h-full mb-[0.3vw] w-auto m-auto' style={{
                    background: 'url(/static/edit.png) center',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div className='mb-[0.3vw] text-gray-900'>Educational Institution</div>
            <div className='font-ProtoMono-Light text-[1vw]'>Demonstrate that you have furthered your education either through university, online courses and more</div>
          </div> 
          <div>
            <div className='bg-white h-full mb-[0.3vw] w-auto m-auto' style={{
                    background: 'url(/static/users.png) center',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div className='mb-[0.3vw] text-gray-900'>Trustworthy Community</div>
            <div className='font-ProtoMono-Light text-[1vw]'>Convey your participation in a trustworthy and accredited community. </div>
          </div>
        </div>
        <div className='flex justify-center'>
        <div className='text-[1.4vw] font-ProtoMono-SemiBold fixed bottom-36 text-green-900    m-auto w-full'>We require you choose AT LEAST two Good Reputation traits to verify.</div>
        <div onClick={() => router.push("/amount")}  className='text-[1.2vw] font-ProtoMono-Light rounded-xl bg-white text-orange-400 p-3 fixed bottom-10 m-auto w-[30%] hover:text-white hover:bg-green-900'>Get Started</div>
        </div>
      </div>
    </div>
  )
}
