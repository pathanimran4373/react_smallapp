// import React, { useEffect } from 'react'
// import { showUser } from '../Slice'
// import { useDispatch, useSelector } from 'react-redux'

// const Read = () => {
//     const { users, loading } = useSelector((state) => state.app)
//     const dispatch = useDispatch()
//     console.log(users)
//     useEffect(() => {
//         dispatch(showUser())
//     }, [])
//     if (loading) {
//         return <h1>Loading......</h1>
//     }
//     return (
//         <div>
//             <h1>Read</h1>
//             <div>
//                 {
//                     users && users.map((item) => (
//                         <div key={item.id}>
//                             <span>{item.name}</span>
//                             <span>{age.name}</span>
//                             <span>{email.name}</span>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Read
import React, { useEffect } from 'react';
import { showUser } from '../Slice';
import { useDispatch, useSelector } from 'react-redux';

const Read = () => {
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div>
      <h1>Read</h1>
      <div>
        {users &&
          users.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.age}</span>
              <span>{item.email}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
