import React from 'react';
import NewRoute from './Routes/NewRoute';
import AdminRoute from './Routes/AdminRoute';
import StudentRoute from './Routes/StudentRoutes';
import TeacherRoutes from './Routes/TeacherRoutes';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewRoute />} />
      </Routes>


      <NewRoute/>
      <AdminRoute/>
      <StudentRoute/>
      <TeacherRoutes/>

    </div>
  )
}

export default App
