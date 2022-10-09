import Head from 'next/head'
import Header from './header'
import { useRouter } from 'next/router'



export default function Home() {

  const router = useRouter();
  
  return (
    <div>
      <Head>
        <title>PULP / Borrowers Platform</title>
      </Head>
     <Header />
      <div className='font-ProtoMono-Light  text-center w-full h-full pt-[3vw] flex-col bg-gradient-to-b from-orange-400 to-yellow-300 text-white'>
        <div className='text-[3vw] font-ProtoMono-SemiBold  text-center mb-[5vw] mt-[2vw] text-green-900 '>
        Private Uncollateralized Lending Protocol
        </div>
        <div className='text-[2vw] font-ProtoMono-Light text-center mt-[5vw] mb-[8vw]'>Prove your Good Reputation!</div>
        <div className='font-ProtoMono-Light text-[1.3vw] w-full h-[5vw] mt-20 mb-[6vw] text-center grid grid-cols-3 ' id="bottomMenu">
          <div  className='font-ProtoMono-Light flex-col justify-center'>
            <div className='bg-white h-full w-[5vw] m-auto mb-10 text-center' style={{
                  background: 'url(/static/check-circle.png) center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:'center'
                }}>
            </div>
            <div>Self Soverign Identity</div>
          </div>
          <div>
            <div className='bg-white h-full w-[5vw] m-auto mb-10' style={{
                    background: 'url(/static/sun.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div>Equitable</div>
          </div>
          <div>
            <div className='bg-white h-full w-[5vw] mb-10 m-auto' style={{
                    background: 'url(/static/user.png) center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
              </div>
            <div>Private</div>
          </div>
        </div>
       <div className='flex justify-center'>
        <div onClick={() => router.push("/traits")}  className='text-[1.2vw] font-ProtoMono-Light text-center mt-[7vw] mb-[5vw] rounded-xl bg-white text-orange-400 w-[30%] p-5  hover:text-white hover:bg-green-900 '>Change Your future</div>
       </div>
      </div>
    </div>
  )
}
