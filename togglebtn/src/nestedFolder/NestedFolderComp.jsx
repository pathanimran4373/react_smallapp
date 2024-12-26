import React from 'react'
import NestedFolder from './NestedFolder'
import ExploreData from './Db'

const NestedFolderComp = () => {
    return (
        <div>
            <h1>Nested Folder</h1>

            <NestedFolder ExploreData={ExploreData} />
        </div>
    )
}

export default NestedFolderComp