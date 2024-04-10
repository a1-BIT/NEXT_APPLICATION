'use client'
import { CldImage, CldUploadWidget } from "next-cloudinary"
import { useState } from "react"

interface CloudInfo {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('')
    return (
        <>
        {
            publicId && <CldImage src={publicId} width={300} height={200} alt="test"/>
        }
        <CldUploadWidget
            uploadPreset="tzpiaw4n"
            options={{ sources: ['local', 'dropbox', 'url'] }}
            onSuccess={(result,widget)=> {
                if(result.event !== 'success') return
                const info = result.info  as CloudInfo
                setPublicId(info.public_id)
                console.log(result)
            }}
        >
            {({ open }) => <button className="btn btn-primary" onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
        </>
    )
}
export default UploadPage