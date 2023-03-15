import * as React from "react"


export type CourierImageProps = {
  imageUrl: string
  name?: string
}
const sampleImage =
  'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'

const CourierImage = ({ imageUrl, name }: CourierImageProps) => (
  <img
    className="h-12 w-12 rounded-full ring-4 ring-white sm:h-12 sm:w-12"
    src={imageUrl}
    alt={name}
  />
)

export default CourierImage;