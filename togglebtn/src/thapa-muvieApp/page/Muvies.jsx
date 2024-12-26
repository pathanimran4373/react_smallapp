import React, { useContext } from 'react';
import { contextApi } from '../contextApiStore/context';
import {Link} from "react-router-dom"

const Movies = () => {
  const { isLoading, data, isError } = useContext(contextApi);
  // console.log(data)
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>Error:
      {/* {isError} */}
    </h1>;
  }

  return (
    <>
      <div className="">
        {data && data.map((value) => {
          const { Title, Type, Year, imdbID } = value;
          return (
            <Link to={`detail/${imdbID}`} key={imdbID}>
              <div className="">{Title}:{Year}:{Type}</div>
            </Link>
          )
        }
        )}
      </div>
    </>
  );
};
export default Movies