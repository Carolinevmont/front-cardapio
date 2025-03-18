import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import Cabecalho from './components/header/header';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <Cabecalho />
      <div className="container">
        <div className="card-grid">
          {data?.map(foodData => (
            <Card
              key={foodData.title} 
              price={foodData.price}
              title={foodData.title}
              image={foodData.image}
            />
          ))}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal}>Cadastrar novo produto</button>
      </div>
    </>
  );
}

export default App;