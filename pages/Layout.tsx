import dynamic from 'next/dynamic'

const Header = dynamic(() => import('components/Header'), { ssr: false })
const Footer = dynamic(() => import('components/Footer'), { ssr: false })

import {Box} from '@chakra-ui/react'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Box>
      {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout