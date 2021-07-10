import React from 'react';
import Modal from "./Modal";

const Modals = () => {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Este es el contenido del modal 1</h3>
        <img src="https://placeimg.com/400/400/animals" alt="generic-img"/>
      </Modal>
      <button>Modal 2</button>
      <Modal>
        <h3>Este es el contenido del modal 2</h3>
        <p>I'm baby succulents palo santo jianbing pabst banh mi iceland cliche
          YOLO tumblr 90's hashtag truffaut brunch. Narwhal sartorial drinking
          vinegar brunch lumbersexual man braid messenger bag waistcoat.
          Four dollar toast subway tile plaid lomo ethical iPhone twee tofu polaroid.</p>
        <img src="https://placeimg.com/400/400/nature" alt="generic-img"/>
      </Modal>
    </div>
  )
}

export default Modals