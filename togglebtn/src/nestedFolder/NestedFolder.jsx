import React, { useState } from 'react'

const NestedFolder = ({ ExploreData }) => {
    const [state, setState] = useState(false)

    if (ExploreData.folderItems) {
        return (
            <div>
                <div>
                    <h2 onClick={() => setState(!state)}>{ExploreData.name}</h2>
                </div>
                <div style={{ display:state?'block':"none",paddingLeft: "15px" }}>
                    {
                        ExploreData.folderItems.map((i) => (
                            <NestedFolder ExploreData={i} />
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {ExploreData.name}
                </div>
        )
    }

}

export default NestedFolder