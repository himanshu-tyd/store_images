
const cloud_name='himanshutyd'
const upload_preset='upload'


export const imageUpload=async(file ,setLoader)=>{
    setLoader(true)
    try {
        
        const form=new FormData()

        form.append('file',file)
        form.append('cloud_name',cloud_name)
        form.append('upload_preset',upload_preset)

        const res=await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{
            method:'POST',
            body:form
         })

         if(!res.ok){
            throw new Error('opps something get wrong!')
         }

        const data=await res.json()

    

         return data


    } catch (e) {
        console.log(e);
    }finally{
        setLoader(false)
    }
}