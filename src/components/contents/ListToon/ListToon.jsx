import React from 'react';
import './List.css';
import { useSelector } from 'react-redux';
import img from '../../../assets/icon/nocover.png';
import { useNavigate } from 'react-router-dom';
const ListToon = () => {
  const navigator = useNavigate()
  const { books } = useSelector(state => state.book);

  const Navigate = (dataId) => {
      navigator(`/BookPreview?Book=${dataId._id}`)
  } 
  return (
    <div>
      <div className="box-container-book">
        <div className="box-flex-list">
           {books && books.map((data, k) => (
              <div className="flex-list-book" key={k} onClick={() => Navigate(data)}>
                <div className="box-img">
                  <img 
                     src={data?.cover_image?.cover_image_url || img} 
                     alt="" 
                  />
                </div>
                <div className="name-book">
                  <p>{data?.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListToon;
