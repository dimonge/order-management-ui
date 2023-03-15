import type { GetServerSideProps, NextPage } from 'next'
import { APP_BOARD_URL } from '@/routes/routes'

const Home: NextPage = () => {
  return <div />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: APP_BOARD_URL,
      permanent: false
    }
  }
}

export default Home
