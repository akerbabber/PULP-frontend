import Head from 'next/head'
import Header from './header'


export default function Home() {
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
          <div className='rounded-xl font-ProtoMono-Light border-orange-400 text-orange-400  border-2 bg-white p-4 flex self-center mr-4'>Log in</div>
          <div className='rounded-xl font-ProtoMono-Light  bg-orange-400  p-4 flex self-center text-white'>I am a Lender</div>
        </div>
      </div>
    </div>
      <div className='font-ProtoMono-Light  text-center w-full h-full pt-[3vw] flex-col bg-gradient-to-b from-orange-400 to-yellow-300 text-white'>
        <div className='text-[3vw] font-ProtoMono-SemiBold  text-center mb-[1vw] mt-[2vw] '>
        Change your future today
        </div>
        <div className='text-[1.8vw] font-ProtoMono-Light text-center mb-[2vw] p-20'>These are the reccomended traits you can choose to add to your Polygon ID Wallet to prove your Good Reputation. We believe YOU deserve a chance. Claim back your Identity.</div>
        <div className='font-ProtoMono-Light text-[1.3vw] w-full h-[5vw] mt-20 mb-[6vw] text-center flex justify-around ' id="bottomMenu">
          <div  className='font-ProtoMono-Light flex-col justify-center'>
            <div className='bg-white h-full w-[5vw] m-auto mb-10 text-center' style={{
                  background: 'url(/static/check-circle.png) center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'center'
                }}>
            </div>
            <div>Age</div>
          </div>
          <div>
            <div className='bg-white h-full w-[5vw] m-auto mb-10' style={{
                    background: 'url(/static/sun.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div>DAO Contributor</div>
          </div>
          <div>
            <div className='bg-white h-full w-[5vw] mb-10 m-auto' style={{
                    background: 'url(/static/user.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div>Educational Institution</div>
          </div>
          <div>
            <div className='bg-white h-full w-[5vw] mb-10 m-auto' style={{
                    background: 'url(/static/user.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div>Trustworthy Community</div>
          </div>
        </div>
       <div className='flex justify-center'>
        <div className='text-[1.2vw] font-ProtoMono-Light text-center mt-[7vw] mb-[5vw] rounded-xl bg-white text-orange-400 w-[30%] p-3 '>Change Your future</div>
       </div>
      </div>
    </div>
  )
}
