import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import JsonData from '../../unidades_de_saude.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReactPaginate from 'react-paginate';

import './styles.css';
 

function UbsPage(){
  let navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = DataUbs.slice(pagesVisited, pagesVisited + usersPerPage).map(data => {}); 

  const returnHandle = () =>{
    navigate('/');
  }

  const DataUbs = JsonData.filter((val) => {
    if(searchData === ""){
      return val;
    }else if (String(val.NOME).toLowerCase().includes(searchData.toLowerCase())){
      return val;
    }else if (String(val.LOGRADOURO).toLowerCase().includes(searchData.toLowerCase())){
      return val;
    }else if (String(val.BAIRRO).toLowerCase().includes(searchData.toLowerCase())){
      return val;
    }
  }).slice(pagesVisited, pagesVisited + usersPerPage).map((data) =>   {
    return(
      <tr key={data.CNES}>
        <td>{data.CNES}</td>
        <td>{data.UF}</td>
        <td>{data.IBGE}</td>
        <td>{data.NOME}</td>
        <td>{data.LOGRADOURO}</td>
        <td>{data.BAIRRO}</td>
        <td>{data.LATITUDE}</td>
        <td>{data.LONGITUDE}</td>
      </tr>
    );
  }); 
  const data = JsonData.slice(0,1000);
  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return(
    <div>
      <Header/>

      {/* Campo de pesquisa  */}
      <div className="col-sm-8 col-lg-5 search">
        <button className="br-button secondary mr-3" onClick={returnHandle}><FontAwesomeIcon icon={faAngleLeft}/></button>
        <div className="br-input">
          <label htmlFor="input-default">Filtrar</label>
          <input id="input-default" type="text" placeholder="Pesquisar unidades de saúde" onChange={event => {setSearchData(event.target.value)}}/>
        </div>
      </div>

      {/* Tabela de unidades de */}
      <table className="table overflow-auto">
        <thead>
          <tr>
            <th>CNES</th>
            <th>UF</th>
            <th>IBGE</th>
            <th>NOME</th>
            <th>LOGRADOURO</th>
            <th>BAIRRO</th>
            <th>LATITUDE</th>
            <th>LONGIDUTE</th>
          </tr>
        </thead>

        <tbody>
          {DataUbs}

        </tbody>
      </table>
      <div className="paginate">
        <ReactPaginate
              previousLabel={"Anterior"}
              nextLabel={"Próximo"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previusBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
      </div>
            
      <Footer/>
    </div>
  );
}

export default UbsPage;