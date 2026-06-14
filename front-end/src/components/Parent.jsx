 import React from 'react'
 import Child from "./Child"

const Parent = ()=> {
    return (
        <div>
            <Child name = "shakthi"
           age = {25}
           isActive={true}
           mark = {[99,98,97,96,95]}
           address={{
            pincode:641605,
            email:"shakthik24102007@gmail.com",
            mobile:8122814121
           }} />
           <Child name="Siva"
           age={25}
           isActive={true}
           mark = {[89,78,98,78]}
           address={{
            pincode:457532,
            email:"sivaranjanijothi33@gmail.com",
            mobile:9123512533
           }} />

            </div>
    )
}
export default Parent