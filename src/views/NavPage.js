import React from 'react';


function NavPage() {

  return (
    <div>
        <header>
      <div class="container">
        <h1>개발자 <strong>류준열</strong> 입니다</h1>
      </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid text-uppercase">
        <a class="navbar-brand" href="#">RYU JUN YEOL</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse sticky-fixed" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#summary">Summary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#project">Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#stacks">Stacks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#document">Document</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <form class="d-flex">
            <div class="btn-box">
              <a href="https://restpack.io/html2pdf/save-as-pdf" class="btn btn-3" target="_blank" >SAVE PDF</a> 
            </div>
            <button type="button" data-use-dark-mode="true" class="btn btn-dark btn-toggle me-2">
              Dark
            </button>
            <button type="button" data-use-dark-mode="false" class="btn btn-light btn-toggle border">
              White
            </button>
          </form>
        </div>
      </div>
    </nav>
      
    </div>
  );
}
export default NavPage
