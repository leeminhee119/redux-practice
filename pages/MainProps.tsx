import CurrentSponsorState from '../ts-components/CurrentSponsorState'
import ItemArticle from '../ts-components/ItemArticle'
import SelectSponsorItem from '../ts-components/SelectSponsorItem'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

const MainProps = ({sponsorState}:any) => {
    const [selectedAmount, setSelectedAmount] = useState(0)
    function updateCountSales(dCount:number, dSales:number) {
        fetch('http://localhost:3001/api/singleAPI', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dSales: selectedAmount
            })
        }).then(res => {
            if (res.status !== 200) {
                console.log('error!!') 
            } else {
                res.json().then(data => {
                    console.log(data)
                })
            }
        })
    }
    return (
        <>
        <div style={{
            width: '600px',
            margin: '0 auto',
        }}>
            <CurrentSponsorState text={sponsorState}/>
            <div style={{
                display: 'flex',
                height: '600px'
            }}>
                <ItemArticle/>
                <SelectSponsorItem 
                // update={(addAmount:number)=>{
                //     setSelectedAmount(num=>num=addAmount)
                // }}
                />
            </div>
        </div>
        </>
    )
}

// const getServerSideProps: GetServerSideProps = async (context) => {
//     const res = await fetch(`/api/singleAPI`)
//     const sponsorState = await res.json()
  
//     if (!sponsorState) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       }
//     }
//     return { props: { data: sponsorState } }
// }


export default MainProps