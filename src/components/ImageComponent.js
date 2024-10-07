import imageUrlBuilder from '@sanity/image-url'
import React, { use, useEffect } from 'react'
import { createClient } from '@sanity/client'
import Image from 'next/image'

const client = createClient({
  projectId: "p0ke04pe",
  dataset: "production",
  useCdn: false,
  apiVersion: '2021-08-31'
});
const builder = imageUrlBuilder(client);
const ImageComponent = ({value}) => {
 
 
  return (
    <div >
      <Image src={builder.image(value.asset).url()} style={{width:"auto"}} alt="image not found" width={300} height={400}  />
    </div>
  )
}

export default ImageComponent
