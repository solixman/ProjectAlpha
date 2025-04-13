import { useState } from "react"

function State(){
const [ShowMore , setShowMore] = useState(true);

function handleShowMore(){
    setShowMore(!ShowMore)
}

return (
 <>
<button onclick={handleShowMore}>
{ ShowMore ? 'hide': 'Show'  } details
</button>

<p>ShowMore</p>

{ShowMore && <p>ujgvhngchngcjvkfxitrtjgxfvxj</p>}



   </> 
)
} 

export default State
























