// Best_company.js
import React, { useState } from "react";
import { Link, BrowserRouter } from 'react-router-dom';
import companyImg from "../../../assets/image/companyImg.png"
import classes from './Best_company.module.scss';
import { companies, companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate'; // Import data from data.js

function Best_company() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <BrowserRouter>
      <section className="sectionWrap container">
        <div className={classes.company_title}>
          <h1>인기 업체</h1>
        </div>
        <ul className={classes.companyList}>
          {companies.map((company, index) => (
            <li key={index}>
              <button
                className={company === selectedCompany ? `${classes.clicked}` : ''}
                type="button" onClick={() => handleClick(company)}
              >
                {company}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <ul className={classes.companyItem}>
            {companiesItem.map((companyItem, index) => {
              const post = posts.find((post) => post.id === index + 1); // Find the corresponding post
              return (
                <li key={index} className={classes.companyItemLink}>
                  <Link to="#">
                    <div className={classes.companyItemLinkImg}>
                      <img alt={companyItem} src={companyImg}></img>
                    </div>
                    <div className={classes.companyItemLinkInfo}>
                      <div className={classes.companyItemLinkHashTag}>
                        <p>{companiesHashTag[index]}</p>
                      </div>
                      <div className={classes.companyItemLinkTitle}>
                        <h1>{companyItem}</h1>
                      </div>
                      <div className={classes.companyItemLinkDesc}>
                        <span> 선호 파트너 형태</span>
                      </div>
                      {post && ( // Check if post exists
                        <ul className={classes.companyItemLinkTag}>
                          {post.tags.map((tag, index) => (
                            <li key={index}>#{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>

      </section>
    </BrowserRouter>
  );
}

export default Best_company;
