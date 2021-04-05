import React from 'react'

function FooterPage() {
    return (
        <div>
            <section class="container pt mt" id="contact">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-center mb-5">
                        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">
                        Contact
                        </h2>
                        <p class=" fonsiz-sm color-basic fonsiz-xl fonwei-kr-xs lh-md letsp-xs ws-sm my-4">
                        여기까지 읽어 주셔서 고맙습니다. <br/>
                        더 성실하게, 항상 최선을 다하겠습니다. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="container-fluid backimg">
                <div class="name-card d-flex justify-content-center align-items-center h-100">
                    <div class="contact-body shadow">
                        <div class="text-center mb-4">
                            <h1>Ryu Jun Yeol </h1>
                            <small>JavaScript Fullstack Developer</small>
                        </div>
                        <div class="d-flex">
                            <img src="/img/face.png" />
                            <div class="ps-3">
                                <ul class="list-unstyled">
                                    <li>
                                        <span>
                                            <i class="bi bi-person-check-fill"></i>
                                            Position : <strong>Developer</strong>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        <i class="bi bi-envelope"></i>
                                        Email :
                                        <a href="mailto:kijepark@kijeslab.com">
                                            <strong>kijepark@kijeslab.com</strong>
                                        </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        <i class="bi bi-telephone-inbound"></i>
                                        Phone :
                                        <a href="tel:010-7688-3321">
                                            <strong>010-7688-3321</strong>
                                        </a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                        <i class="bi bi-house-door"></i>
                                        Website :
                                        <a href="http://kijepark.com">
                                            <strong>kijepark.com</strong>
                                        </a>
                                        </span>
                                    </li>
                                </ul>
                                <div class="contact-desc">
                                    “Talk is cheap. show me the code.”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="container mt-auto mb-5">
                    <div class="social-box text-center">
                        <a class="social-title" href="#">GitHub</a>
                        <a class="social-title" href="#">Facebook</a>
                        <a class="social-title" href="#">Twitter</a>
                        <a class="social-title" href="#">LinkedIn</a>
                        <a class="social-title" href="#">Instagram</a>
                        <a class="social-title" href="#">Website</a>
                        <a class="social-title" href="#">Blog</a>
                    </div>
                    <div class="license-copy text-center">
                        ⓒ 2021.
                        <a class="fonwei-en-xxl" href="http://kijepark.com/">Kije’s LAB</a> All Rights Reserved
                        <a class="fonwei-en-xxl" href="http://kijepark.com/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%B0%95%EA%B8%B0%EC%A0%9C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4.html">Kije’s RESUME</a>
                        .
                        <a class="fonwei-en-xxl" href="#" data-bs-toggle="modal" data-bs-target="#myModal3">Creative Commons License</a>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default FooterPage
