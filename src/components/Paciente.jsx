import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre:{' '}
        <span className='font-normal normal-case'>Hook</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{' '}
        <span className='font-normal normal-case'>Reynaldo</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email:{' '}
        <span className='font-normal normal-case'>reynaldo@gmail.com</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta:{' '}
        <span className='font-normal normal-case'>06/04/2023</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas:{' '}
        <span className='font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, placeat quidem? Architecto, dicta ducimus. Incidunt laboriosam atque numquam! Deserunt sunt libero magnam dolor blanditiis id veritatis odit nemo officia eligendi.</span>
      </p>
    </div>
  )
}

export default Paciente
