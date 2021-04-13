import React from 'react';
import ReactDOM from 'react-dom';
import NavPage from './views/NavPage'
import SummaryPage from './views/SummaryPage'
import ProjectPage from './views/ProjectPage'
import StackPage from './views/StackPage'
import DocumentPage from './views/DocumentPage'
import FooterPage from './views/FooterPage.js'
import './index.css'
import './style.css'
import './theme-dark.css'
import './theme.css'

ReactDOM.render(
  <React.StrictMode>
    <NavPage />
    <SummaryPage />
    <ProjectPage />
    <StackPage />
    <DocumentPage />
    <FooterPage />
  </React.StrictMode>,
  document.getElementById('root')
);


