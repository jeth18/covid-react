import { getVaccines } from "../../service/service.api"
import { useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import initVaccines from "../../state/actionCreators";


export default function Vaccines() {

    const vaccines = useSelector(state => state);
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function getDatosVaccines(){
          try {
            let response: any[] = await getVaccines();
            response = await response;
            dispatch(initVaccines(response));
            setLoading(true);
          } catch (error) {
            console.log('error', error);
          }
        }
        getDatosVaccines();
    }, [dispatch]);

    return ( 
        <div>
            {loading && JSON.stringify(vaccines)}
        </div>
    )
}