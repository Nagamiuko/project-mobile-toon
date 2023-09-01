import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigate from '../navigate/Navigate';
import { useSelector, useDispatch } from 'react-redux';
import { getBookDetails } from '../../redux/actions/bookApi';
import './detail.css';
import { BiListUl, BiCommentDetail } from 'react-icons/bi';
const DetailToon = () => {
  const [bookid] = useSearchParams();
  const id = bookid.get('Book');
  const { bookDetail } = useSelector(state => state.book);
  const dipatch = useDispatch();
  console.log(bookDetail);

  useEffect(() => {
    dipatch(getBookDetails(id));
  }, [id]);

  return (
    <>
      <div className="box-bg-wh">
        <div className="navigate">
          <Navigate titlebook={bookDetail?.title}/>
        </div>
        <div className="box-contant-tb">
          <div className="card">
            <div className="card-pad">
              <div className="row">
                <div className="col">
                  <div className="title-book">
                    <h3>{bookDetail?.title}</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="box-img-cover">
                    <img
                      src={bookDetail?.cover_image?.cover_image_url}
                      alt={bookDetail?.cover_image?.cover_name}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="box-bg-top-ep row">
                    <div className="list-mep font20">
                      <div className="ep">
                        <BiListUl /> &nbsp; จำนวนตอน
                      </div>
                      <div className="ep-count">100</div>
                    </div>
                    <div className="list-mep font20">
                      <div className="ep">
                        <BiCommentDetail /> &nbsp;
                         คอมเม้นท์
                      </div>
                      <div className="ep-count">100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="title-book font16" dangerouslySetInnerHTML={{__html:bookDetail?.tagline}}>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="t-book">
                     <div className="text-tname">
                     ผู้แต่ง: {bookDetail?.t_name}
                     </div>
                     <div className="text-tname">
                     ผู้แปล: {bookDetail?.a_name}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailToon;
