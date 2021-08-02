import { CircularProgress } from "@material-ui/core"
import "./style.css"

const  Spinner = () => {
    return(
       <div className="spinner">
           <CircularProgress />
       </div>
    )
}

export default Spinner;