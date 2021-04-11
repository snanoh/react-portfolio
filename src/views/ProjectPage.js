import React from 'react'
import { FileEarmarkSlides } from 'react-bootstrap-icons';
import ModalCarousel from '../components/ModalCarousel';


function ProjectPage() {
    return (
        <section class="container pt mt" id="project">
            <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Project</h2>
            <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
            저는 프로젝트의 시작보다는 마무리에 집중합니다.
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
                            <th class="table-title" scope="col">현대모터스튜디오 영업정보시스템</th>
                            <td>
                            <div>[아스템즈] 현대모터스튜디오 영업정보시스템 (매장 통합 관리 시스템)</div>
                            <div>
                                #매장관리 #사원관리 #상품관리 #매입관리 #예약관리 #매출관리 #재고관리
                            </div>
                            <div>
                                <span class="badge bg-done">Done</span>
                                <span class="badge bg-grey">Spring</span>
                                <span class="badge bg-grey">SpringSecurity</span>
                                <span class="badge bg-grey">Jquery</span>
                                <span class="badge bg-grey">ORACLE</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">( 6 M/M)</div>
                            <div class="progress">
                                {/* <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '100%'}}> */}
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                    <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드,프론트엔드 개발</div>
                            </td>
                            <td class="text-center">
                                <ModalCarousel/>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">카카오아이엑스 전자영수증</th>
                            <td>
                            <div>[아스템즈]카카오아이엑스 전자영수증 (전자영수증 인터페이스)</div>
                            <div>
                            </div>
                            <div>
                                <span class="badge bg-done">Done</span>
                                <span class="badge bg-grey">Php</span>
                                <span class="badge bg-grey">ORACLE</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(0.5M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드,프론트엔드 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">하이트진로 영업정보시스템</th>
                            <td>
                            <div>[아스템즈]하이트진로 와인 영업정보시스템 (매장 통합 관리 시스템)</div>
                            <div>
                                #매장관리 #사원관리 #상품관리 #매입관리 #예약관리 #매출관리 #재고관리
                            </div>
                            <div>
                                <span class="badge bg-done">Done</span>
                                <span class="badge bg-grey">Php</span>
                                <span class="badge bg-grey">JavaScript</span>
                                <span class="badge bg-grey">ORACLE</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(0.5M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드,프론트엔드 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                            </span>
                            </td>
                        </tr>
                        <tr>
                            <th class="table-title" scope="col">커피빈 퍼플오더 중계서버</th>
                            <td>
                            <div>[아스템즈] 커피빈 퍼플오더 중계서버</div>
                            <div>
                                #퍼플오더 #홀케익예약 #품절관리
                                #자동취소
                            </div>
                            <div>
                                <span class="badge bg-done">Done</span>
                                <span class="badge bg-grey">Spring</span>
                                <span class="badge bg-grey">Redis</span>
                                <span class="badge bg-grey">Jquery</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">( 3 M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드,프론트엔드 개발</div>
                            </td>
                            <td class="text-center">
                            <span class="text-muted">
                                <FileEarmarkSlides className="ml-4" />
                                
                            </span>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="table-title" scope="col">빈스앤베리즈 영업정보시스템</th>
                            <td>
                            <div>[아스템즈]빈스앤베리즈 영업정보시스템(매장 통합관리 시스템)</div>
                            <div>
                                #매장관리 #사원관리 #상품관리
                                #매입관리 #재고관리 
                            </div>
                            <div>
                                <span class="badge bg-done">DONE</span>
                                <span class="badge bg-grey">SPRING</span>
                                <span class="badge bg-grey">JQUERY</span>
                                <span class="badge bg-grey">JavaScript</span>
                                <span class="badge bg-grey">HTML5 and CSS3</span>
                                <span class="badge bg-grey">Bootstrap 4</span>
                            </div>
                            </td>
                            <td class="text-center">
                            <div class="">(4M/M)</div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" style={{width: "100%"}}>
                                <span class="progress-desc">100%</span>
                                </div>
                            </div>
                            <div class="progress-desc">백엔드,프론트엔드 개발</div>
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
