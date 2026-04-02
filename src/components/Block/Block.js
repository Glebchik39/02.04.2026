import './Block.css';
import data from '../../Topics (1).json';
import { Link } from 'react-router-dom';


export function Block() {
  const firstTopic = data[0];

  return (
    <div>
      <center><h1>{firstTopic.title}</h1></center>
      <div className='content'>
        {firstTopic.subtopics.map((subtopic) => (
          <div key={subtopic.id}>
            <h2>{subtopic.title}</h2>
            <p>{subtopic.text}</p>
          </div>
        ))}
      </div>
      <Link to='/about'>Назад</Link>
    </div>
  );
}

export default Block;