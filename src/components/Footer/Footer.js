import React,{Fragment} from 'react'
import { FacebookFilled , InstagramOutlined , GoogleOutlined  } from '@ant-design/icons';
export default function Footer() {
  return (
    <Fragment>
    <div className="bg-gray-900 absolute -bottom-32 w-full h-36 flex  justify-center items-center text-white text-2xl space-x-12">
      <FacebookFilled />
      <InstagramOutlined />
      <GoogleOutlined />
    </div>
    </Fragment>
  )
}
