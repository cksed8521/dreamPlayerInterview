import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import './UploadImg.scss'

function UploadImg() {
  const [imageName, setImageName] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const UploadImage = (e) => {
    const file = e.target.files[0]
    setImageName(e.target.files[0].name)

    setLoading(true)
    getBase64(file).then((base64) => {
      localStorage['fileBase64'] = base64
      setImage(base64)
    })
    setLoading(false)
  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }

  return (
    <Container>
      <div className="outUploadImg">
        <div className="sendPicBtn">
          <label>
            <input
              type="file"
              placeholder="Upload an image"
              onChange={UploadImage}
            />
            上傳圖片
          </label>
        </div>

        {loading ? (
          <h3>loading....</h3>
        ) : (
          <>
            <h2>FileName</h2>
            <h3>{imageName}</h3>
            <div className="prevImg">
              <img src={image} />
            </div>
          </>
        )}
      </div>
    </Container>
  )
}

export default UploadImg
