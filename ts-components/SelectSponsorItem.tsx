import React, {useState, useEffect} from 'react'

interface SponsorItemInterface {
    defaultAmount: number,
    handleClick: any,
    isSelected: boolean,
}
const SponsorItem = (props: SponsorItemInterface) => {
    const [addSales, setAddSales] = useState(props.defaultAmount)
    function handleChangeAmount(event: any) {
        setAddSales(() => props.defaultAmount+parseInt(event.target.value))
    }
    function handleSponsor() {
        // useEffect(() => {
        //     async function fetchData() {
        //         const res = await
        //     }
        // })
        fetch('/api/singleAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                addSales: addSales
            })
        }).then(response => response.json())
    }
    return (
        <>
        <div
        style={{
            border: `1px solid ${props.isSelected?'#f00':'#ddd'}`,
            width: '90%',
            height: '30%',
            marginBottom: '10px'
        }}
        onClick={props.handleClick} >
            <div>{props.defaultAmount}+</div>
            <input type="text" placeholder="0" 
            // value={0}
            onChange={handleChangeAmount} 
            disabled={!props.isSelected}
            />
            <button onClick={handleSponsor}>{addSales} 원 후원하기</button>
        </div>
        </>
    )
}

const SelectSponsorItem = (update: any) => {
    const Items = [1000, 38000, 45000]
    const ItemLength = Items.length
    const [boolArr, setBoolArr] = useState({   //선택된 아이템의 인덱스만 true
        arr: new Array(ItemLength).fill(false)
    })
    return (
        <div style={{
            border: '1px solid',
            width: '70%',
            height: '100%',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {
                Items.map((item:any, index:number) => {
                    return (
                        <SponsorItem key={index} 
                        defaultAmount={item} 
                        handleClick={()=>{
                            const tempArr = new Array(ItemLength).fill(false)
                            tempArr[index] = true
                            setBoolArr({arr:tempArr})
                        }}
                        isSelected={boolArr.arr[index]}
                        />
                    )
                })
            }
        </div>
    )
}

export default SelectSponsorItem