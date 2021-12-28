
interface Dictionary<T> {
    [Key: string]: T
}

export default function History() {
    
    let mapFechas:Dictionary<number> = {}

    function joinMonthYear(array:Array<any>):void{
        Object.entries(array).forEach(([key,value]) => {
          let yearMonth =  new Date(key).getFullYear().toString()+ '-' + new Date(key).getMonth().toString()
          console.log(yearMonth)
          mapFechas[yearMonth] ? 
            mapFechas[yearMonth] += value 
             : 
             mapFechas[yearMonth] = value
        })
        console.log(mapFechas)
    }

    return (
        <div>
            history
        </div>
    )
}