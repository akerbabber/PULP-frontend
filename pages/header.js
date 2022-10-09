import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Header() {

  const router = useRouter();

  return (
    <div>
      <div className='flex w-full h-[6vw] bg-white justify-between p-5'>
        <div className='flex' id="topMenu">
        <div onClick={() => router.push("/")} className='bg-white h-full w-[5vw] mb-10 text-center cursor-pointer' style={{
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
  )
}