/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../data/events.json";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const { events } = data;
  return (
    <div className="section-padding events">
      <div className="container">
        <div className="row">
          {events.singleBlog.map((data, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <article className="events__single-event h-100 translateEffect1">
                <div className="events__single-event__image">
                  <Link to="/single-event">
                    <img className="img-fluid" src={data.image} alt="" />
                  </Link>
                </div>
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4">
                      <Link to="/single-event">{data.title}</Link>
                    </h2>
                    <p className="m-0">{data.description}</p>
                  </div>
                  <div className="events__single-event__meta">
                    <div>
                      <FaRegCalendarAlt /> {data.date} {data.month}, {data.year}
                    </div>
                    <div>
                      <FaMapMarkerAlt /> {data.location}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="blog__pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="/#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
