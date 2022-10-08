import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PULP / Lenders Platform</title>
      </Head>
      <div className='flex w-[95vw]'>
        <div className='flex' id="topMenu">
          <div>Logo</div>
          <div>PULP</div>
        </div>
        <div>
          <div>Login</div>
          <div>I am a Borrower</div>
        </div>
      </div>
      <div>
        <div className='text-[4vw] font-nato text-center '>
        Private Undercollateralized Lending Protocol
        </div>
        <div></div>
      </div>
    </div>
  )
}
