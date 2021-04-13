import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function DocumentPage() {
    return (
        <div>
            <section class="container pt mt" id="document">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-center mb-5">
                        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Document</h2>
                        <p class=" fonsiz-sm color-basic fonsiz-xl fonwei-kr-xs lh-md letsp-xs ws-sm my-4">
                        가장 중요한 자산은 태도라고 생각합니다. <span class="fonwei-kr-md">문제</span>를 대하는 태도, <span class="fonwei-kr-md">개발</span>을 대하는 태도,
                        <span class="fonwei-kr-md">팀원</span>을 대하는 태도가 <span class="fonwei-kr-md">오랜 시간</span>과 결합하면 엄청난 능력이 된다고 믿습니다. 
                        </p>
                    </div>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <div class="col-lg-6 mx-auto text-center mb-5">
                            <img className="d-block w-100"
                                src={`img/github.PNG`} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="col-lg-6 mx-auto text-center mb-5">
                            <img className="d-block w-100"
                                src={`img/hyundaiPro1.png`} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="col-lg-6 mx-auto text-center mb-5">
                            <img className="d-block w-100"
                                src={`img/coffeebeanPro1.png`} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="col-lg-6 mx-auto text-center mb-5">
                            <img className="d-block w-100"
                                src={`img/B&BPro1.png`} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}

export default DocumentPage
