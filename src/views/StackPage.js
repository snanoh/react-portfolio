import React from 'react'
import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';

function StackPage() {
    return (
        <div>
            <section class="container pt mt mb-5" id="stacks">
                <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Stacks</h2>
                <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
                지금 할 수 있는 기술에 만족하지 않고 할 수 있는 경계선을 더 넓혀 나가고자 합니다.
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
                            <th scope="col" class="table-title letsp-md">Java</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)`} target="_blank">
                                <img src={`img/java.png`} alt="java Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">Libaray</span>를 이해하고 개발할 수 있으며 프로젝트에서 공통개발을 했습니다.<br/>
                            데이터를 가공 및 어리할 수 있으며 자유롭게 표현할 수 있습니다.
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <StarFill/>
                                <StarFill/>
                                <StarFill/>
                                <StarFill/>
                                <Star/>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">JavaScript</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8`} target="_blank">
                                <img src={`img/js.png`} alt="JavaScript Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">JavaScript, Jquery</span> 개발 진행해 왔습니다.
                            원하는 기능을 <span class="ls-0">Libary</span> 응용하여 구현할 수 있습니다.
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <StarFill/>
                                <StarFill/>
                                <StarFill/>
                                <Star/>
                                <Star/>
                            </div>
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="col" class="table-title letsp-md">React</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EB%A6%AC%EC%95%A1%ED%8A%B8_(%EC%9B%B9_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)`} target="_blank">
                                <img src={`svg/react.svg`} alt="React Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">Axios</span>를 주로 사용하여 <span class="ls-0">API</span> 요청을 구현합니다. 필요한 웹 컴포넌트를 개발할 수 있습니다<br/>
                            <span class="ls-0">JWT</span>를 발급받아 사용자 인증을 구현할 수 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <StarFill/>
                                <StarFill/>
                                <Star/>
                                <Star/>
                                <Star/>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">Spring</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%94%84%EB%A7%81_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC`} target="_blank">
                                <img src={`img/spring.png`} alt="Spring Logo" />
                            </a>
                            </td>
                            <td>
                            <span class="ls-0">Spring</span>구조를 이해하고 있으며 응용 생성이 가능합니다.<br/>
                            <span class="ls-0">Maven</span>으로 배포 자동화 구성 가능합니다.
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <StarFill/>
                                <StarFill/>
                                <StarFill/>
                                <StarHalf/>
                                <Star/>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col" class="table-title letsp-md">ORACLE</th>
                            <td>
                            <a href={`https://ko.wikipedia.org/wiki/%EC%98%A4%EB%9D%BC%ED%81%B4_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4`} target="_blank">
                                <img src={`img/oracle.png`} alt="Oracle Logo" />
                            </a>
                            </td>
                            <td>
                            마찬가지로 <span class="ls-0">RESTful </span>구조로 <span class="ls-0">API </span>개발하며, <span class="ls-0">MongoDB</span>와 <span class="ls-0">Mongoose</span>와 연동하여 사용하고 있습니다<br/>
                            <span class="ls-0">koa-logger</span>를 통해 서버 로깅을 하며 <span class="ls-0">JWT</span>와 <span class="ls-0">Cookie</span>를 통해 사용자 인증을 구현할 수 있습니다 
                            </td>
                            <td>
                            <div class="star-icon text-center">
                                <StarFill/>
                                <StarFill/>
                                <StarFill/>
                                <StarFill/>
                                <Star/>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default StackPage
