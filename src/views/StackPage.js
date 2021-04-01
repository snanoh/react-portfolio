import React from 'react'

function StackPage() {
    return (
        <div>
            <section class="container pt mt mb-5" id="stacks">
                <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Stacks</h2>
                <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
                만들고자 하는 목표에 대해 필요한 기술들을 빠르게 습득하고 구현합니다.
                할 수 있는 경계선을 더 넓혀 나가고자 합니다.
                </div>
                <div class="card shadow">
                <div class="card-body">
                    <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead>
                        <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                            <th>기술 구분</th>
                            <th>로고</th>
                            <th>활용 수준</th>
                            <th>평가</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="col" class="table-title letsp-md">JavaScript</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8`} target="_blank">
                                <img src={`http://localhost:3000/asset/img/js.png`} alt="JavaScript Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">JavaScript, ECMAScript, Webpack</span> 과 Babel등을 위주로 개발하며 모듈화를 통한 플러그인 개발 및 <span class="ls-0">SDK</span>도 가능합니다.<br/>
                            브라우저 환경의 <span class="ls-0">JavaScript</span>의 경우 브라우저 호환성을 중요시하여 IE 환경에서도 정상 작동하도록 개발하고 있으며
                            최신 문법인 <span class="ls-0">ES6</span> 또한 자유자재로 사용하고 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">Node.js</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/Node.js`} target="_blank">
                                <img src={`../asset/svg/nodejs.svg`} alt="Node.js Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">Node.js</span>로 <span class="ls-0">Express, Koa</span>등 웹 개발 프레임워크를 구축할 수 있으며, <span class="ls-0">React</span>와 <span class="ls-0">MERN Stack</span> 방식으로 조합하여 개발할 수 있습니다<br/>
                            <span class="ls-0">Handlebars, Liquid</span>와 같은 <span class="ls-0">Template Engine</span>을 <span class="ls-0">View</span> 형태로 제공하여 구축하거나 서버 로깅 등을 할 수 있습니다                    
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">React</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EB%A6%AC%EC%95%A1%ED%8A%B8_(%EC%9B%B9_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)`} target="_blank">
                                <img src={`../asset/svg/react.svg`} alt="React Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">Redux</span>와 <span class="ls-0">Slice</span>로 상태 관리를 하며 <span class="ls-0">Axios</span>를 주로 사용하여 <span class="ls-0">API</span> 요청을 구현합니다.<br/>
                            대부분의 필요한 웹 컴포넌트를 능숙하게 개발할 수 있습니다(<span class="ls-0"></span>CRUD, Formik, Yup 등..)
                            또한 <span class="ls-0">Node.js</span>로부터 <span class="ls-0">JWT</span>를 발급받아 사용자 인증을 구현할 수 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">Express</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/Express.js`} target="_blank">
                                <img src={`../asset/svg/express.svg`} alt="Express Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">RESTFul</span>구조로 <span class="ls-0">API</span>를 설계하고 개발할 수 있으며 <span class="ls-0">MongoDB</span> 및 <span class="ls-0">Mongoose</span>와 연동하여 <span class="ls-0">CRUD</span>를 제공할 수 있습니다<br/>
                            <span class="ls-0">Pino Logger</span>를 통해 서버 로깅을 하며 <span class="ls-0">express-session</span>과 <span class="ls-0">Cookie</span>를 통해 세션 형태로 사용자 인증을 구현할 수 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">Koa</th>
                            <td>
                            <a href={`https://koajs.com/`} target="_blank">
                                <img src={`../asset/svg/koa.svg`} alt="Koa Logo" />
                            </a>
                            </td>
                            <td>
                            마찬가지로 <span class="ls-0">RESTful </span>구조로 <span class="ls-0">API </span>개발하며, <span class="ls-0">MongoDB</span>와 <span class="ls-0">Mongoose</span>와 연동하여 사용하고 있습니다<br/>
                            <span class="ls-0">koa-logger</span>를 통해 서버 로깅을 하며 <span class="ls-0">JWT</span>와 <span class="ls-0">Cookie</span>를 통해 사용자 인증을 구현할 수 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">MongoDB</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EB%AA%BD%EA%B3%A0DB`} target="_blank">
                                <img src={`../asset/svg/mongodb.svg`} alt="MongoDB Logo" />
                            </a>
                            </td>
                            <td>
                            관계형 데이터베이스를 설계하고 <span class="ls-0">Mongoose</span>를 사용하여 높은 생산성으로 <span class="ls-0">API</span>를 개발하고 있습니다<br/>
                            <span class="ls-0">Camel case</span>로 데이터 모델링 시 필드명을 정의하여 설계하며 데이터 <span class="ls-0">ID</span> 값은 <span class="ls-0">MongoDB </span>내장 값인 <span class="ls-0">_id</span>를 증감 시켜 사용하고 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">AWS EC2</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%95%84%EB%A7%88%EC%A1%B4_%EC%9D%BC%EB%9E%98%EC%8A%A4%ED%8B%B1_%EC%BB%B4%ED%93%A8%ED%8A%B8_%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C`} target="_blank">
                                <img src={`../asset/img/ec2.png`} alt="AWS EC2 Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">Node.js</span> 앱은 <span class="ls-0">Elasticbeanstalk</span>으로 <span class="ls-0">WordPress</span>는 <span class="ls-0">Ubuntu</span>를 통해 앱을 배포하고 있습니다.<br/>
                            <span class="ls-0">CloudWatch</span>를 통해 서버 로그를 분석하고, 환경 알림 설정을 통해 앱에 문제가 있을 시 메일을 받도록 설정합니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">AWS S3</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%95%84%EB%A7%88%EC%A1%B4_S3`} target="_blank">
                                <img src={`../asset/img/s3.png`} alt="AWS S3 Logo" />
                            </a>
                            </td>
                            <td>
                            이미지, 파일 등을 AWS에서 제공하는 <span class="ls-0">AWS S3</span> 라이브러리를 연동하여 사용하고 있습니다<br/>
                            파일을 업로드하고 퍼블릭 주소를 반환받아 문자열 형태로 데이터베이스에 보관하여 사용하고 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">객관화하기 어려운 관계로, 제가 이해하고 구현할 수 있는 수준을 작성했습니다.</div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default StackPage
