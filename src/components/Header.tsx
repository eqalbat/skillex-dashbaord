import React from 'react'

interface HeaderProps {
  siteTitle: string
}
const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <div className='w-[240px]'>
      <div className='flex justify-center'>
        <div className='text-[24px] font-RobotoSlab font-semibold'>{siteTitle}<span className="text-green-500">.</span></div>
      </div>
      <div className='mt-[60px]'>
        <div className='grid justify-items-center'>
          <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="circle">
                <circle cx='50' cy='50' r='40' />
              </clipPath>
            </defs>
            <image href="https://source.unsplash.com/random/80x80" x={`10`} y={`10`} width={`80`} height={`80`} clipPath="url(#circle)" />
          </svg>
          <span>Jerome Wilson</span>
          <div></div>
        </div>
      </div>
      <div>menu</div>
      <div>footer</div>
    </div>
  )
}

export default Header