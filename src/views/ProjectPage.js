import React from 'react'
import { FileEarmarkSlides } from 'react-bootstrap-icons';


function ProjectPage() {
    return (
        <section class="container pt mt" id="project">
            <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Project</h2>
            <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
            저는 프로젝트의 시작보다는 마무리에 집중합니다.
            한번 시작한 프로젝트는 혼자라도 반드시 마무리합니다.
            </div>
            <div class="card shadow">
                <div class="card-body">
                    <div class="table-responsive">
                    <table class="table borderless table-hover align-middle">
                        <thead class="border-0 borderless" border="0">
                        <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                            <th>프로젝트</th>
                            <th>소개</th>
                            <th>개발 참여도</th>
                            <th>추가 정보</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th class="table-title" scope="col">개발한 프로젝트 서비스</th>
                            <td>
                            <div>[회사명] + 서비스명 + 서비스의 간략한 개요</div>
                            <div>
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드
                            </div>
                            <div>
                                <span class="badge bg-inprogress">In Progress</span>
                                <span class="badge bg-grey">React</span>
                                <span class="badge bg-grey">Redux</span>
                                <span class="badge bg-grey">JavaScript ES6</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                                <span class="badge bg-grey">Node.js</span>
                                <span class="badge bg-grey">Koa</span>
                                <span class="badge bg-grey">MongoDB</span>
                                <span class="badge bg-grey">AWS EC2</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">( ~ M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '100%'}}>
                                <span class="progress-desc">개발중</span>
                                </div>
                            </div>
                            <div class="progress-desc">프론트엔드 단독 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted" data-bs-toggle="modal" data-bs-target="#Modal1">
                                <FileEarmarkSlides className="ml-4" />
                                <div class="modal fade" id="Modal1" tabindex="-1" aria-labelledby="Modal1Label" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="Modal1Label">개발 프로젝트 증빙 자료</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img src={`../asset/svg/your-project.svg`} alt=""/>
                                        <p class="modal-desc">
                                        여기에 개발한 프로젝트에 대한 상세한 내용(서비스 개요, 사용 프로그램 언어, 사용 라이브러리, 개발 기여도, 개발 기간, 외부 링크 등을 입력해 주세요. 
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">개발한 프로젝트 서비스</th>
                            <td>
                            <div>[회사명] + 서비스명 + 서비스의 간략한 개요</div>
                            <div>
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드
                            </div>
                            <div>
                                <span class="badge bg-inprogress">In Progress</span>
                                <span class="badge bg-grey">React</span>
                                <span class="badge bg-grey">Redux</span>
                                <span class="badge bg-grey">JavaScript ES6</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                                <span class="badge bg-grey">Node.js</span>
                                <span class="badge bg-grey">Koa</span>
                                <span class="badge bg-grey">MongoDB</span>
                                <span class="badge bg-grey">AWS EC2</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">( ~ M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: "100%"}}>
                                <span class="progress-desc">개발중</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드 단독 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                                
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">개발한 프로젝트 서비스</th>
                            <td>
                            <div>[회사명] + 서비스명 + 서비스의 간략한 개요</div>
                            <div>
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드
                            </div>
                            <div>
                                <span class="badge bg-done">Done</span>
                                <span class="badge bg-grey">React</span>
                                <span class="badge bg-grey">Redux</span>
                                <span class="badge bg-grey">JavaScript ES6</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                                <span class="badge bg-grey">Node.js</span>
                                <span class="badge bg-grey">Koa</span>
                                <span class="badge bg-grey">MongoDB</span>
                                <span class="badge bg-grey">AWS EC2</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(0.5M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">오픈 소스 프로젝트</th>
                            <td>
                            <div>[회사명] + 서비스명 + 서비스의 간략한 개요</div>
                            <div>
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드
                            </div>
                            <div>
                                <span class="badge bg-done">Done</span>
                                <span class="badge bg-grey">React</span>
                                <span class="badge bg-grey">Redux</span>
                                <span class="badge bg-grey">JavaScript ES6</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                                <span class="badge bg-grey">Node.js</span>
                                <span class="badge bg-grey">Koa</span>
                                <span class="badge bg-grey">MongoDB</span>
                                <span class="badge bg-grey">AWS EC2</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(3M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">프론트엔드 일부 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">개발한 프로젝트 서비스</th>
                            <td>
                            <div>[회사명] + 서비스명 + 서비스의 간략한 개요</div>
                            <div>
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드
                            </div>
                            <div>
                                <span class="badge bg-refactoring">Refactoring</span>
                                <span class="badge bg-grey">React</span>
                                <span class="badge bg-grey">Redux</span>
                                <span class="badge bg-grey">JavaScript ES6</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                                <span class="badge bg-grey">Node.js</span>
                                <span class="badge bg-grey">Koa</span>
                                <span class="badge bg-grey">MongoDB</span>
                                <span class="badge bg-grey">AWS EC2</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(5M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">퍼블리싱 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">개발한 프로젝트 서비스</th>
                            <td>
                            <div>[회사명] + 서비스명 + 서비스의 간략한 개요</div>
                            <div>
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드 #검색연관키워드 #검색연관키워드
                                #검색연관키워드
                            </div>
                            <div>
                                <span class="badge bg-renewal">Renewal</span>
                                <span class="badge bg-grey">React</span>
                                <span class="badge bg-grey">Redux</span>
                                <span class="badge bg-grey">JavaScript ES6</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                                <span class="badge bg-grey">Node.js</span>
                                <span class="badge bg-grey">Koa</span>
                                <span class="badge bg-grey">MongoDB</span>
                                <span class="badge bg-grey">AWS EC2</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(3M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백앤드 일부 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                            </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">프로젝트들은 최근 개발한 순으로 정렬되어 있습니다</div>
                </div>
            </div>
        </section>
    )
}

export default ProjectPage
