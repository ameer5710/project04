import Image from "next/image";

import mantech from "../../public/me.jpg"
export default function Home() {
  return (

<div>
    <Image className="w-50 h-50 md:w-15 ml-auto rounded-full " src="/me.jpg" alt="" width="380" height="250"/>
    
</div>




  )
}