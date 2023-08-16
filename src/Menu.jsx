import { useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Input from './components/Input'
import InputArea from './components/InputArea'
import InputSelect from './components/InputSelect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './src/Neftapp'
import Output from './components/Output'

function App() {


  return (
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/output' element={<Output />} />
      </Routes>
)
}

export default App
