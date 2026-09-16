console.log("902 PRIVATE SERVICE");

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // INTERNAL ACCESS
    // 902 로고 3회 클릭
    // =========================

    var logo = document.querySelector(".logo");
    var clickCount = 0;
    var clickTimer;

    if (logo) {

        logo.addEventListener("click", function (event) {

            event.preventDefault();

            clickCount++;

            clearTimeout(clickTimer);

            clickTimer = setTimeout(function () {
                clickCount = 0;
            }, 3000);

            if (clickCount === 3) {

                if (sessionStorage.getItem("internalBlocked") === "true") {
                    return;
                }

                window.location.href = "internal.html";
            }

        });

    }


    // =========================
    // REVIEW 005
    // =========================

    var review = document.querySelector(".review-005-text");

    if (review) {

        setTimeout(function () {

            review.style.transition = "opacity 0.5s";
            review.style.opacity = "0";

            setTimeout(function () {

                review.innerHTML = "삭제된 댓글입니다.";
                review.style.opacity = "1";

            }, 500);

        }, 20000);

    }


    // =========================
    // REQUEST
    // =========================

    var requestForm = document.querySelector("#requestForm");

    if (requestForm) {

        requestForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // =========================
            // 입력값 확인
            // =========================

            var name = document.querySelector("#name");
            var contact = document.querySelector("#contact");
            var category = document.querySelector("#category");
            var target = document.querySelector("#target");
            var message = document.querySelector("#message");


            // =========================
            // 기존 에러 초기화
            // =========================

            var groups = document.querySelectorAll(".form-group");

            groups.forEach(function (group) {

                group.classList.remove("error");

                var error = group.querySelector(".field-error");

                if (error) {
                    error.textContent = "";
                }

            });


            // =========================
            // 에러 표시 함수
            // =========================

            var firstError = null;

            function showError(input, messageText) {

                var group = input.closest(".form-group");
                var error = group.querySelector(".field-error");

                group.classList.add("error");

                if (error) {
                    error.textContent = messageText;
                }

                if (!firstError) {
                    firstError = input;
                }

            }


            // =========================
            // 필수 입력 확인
            // =========================

            if (name.value.trim() === "") {

                showError(
                    name,
                    "이름을 입력해 주세요."
                );

            }


            if (contact.value.trim() === "") {

                showError(
                    contact,
                    "연락처를 입력해 주세요."
                );

            }


            if (category.value === "") {

                showError(
                    category,
                    "의뢰 유형을 선택해 주세요."
                );

            }


            if (target.value.trim() === "") {

                showError(
                    target,
                    "대상 또는 장소를 입력해 주세요."
                );

            }


            if (message.value.trim() === "") {

                showError(
                    message,
                    "의뢰 내용을 입력해 주세요."
                );

            }


            // =========================
            // 에러가 있으면 종료
            // =========================

            if (firstError) {

                firstError.focus();

                return;

            }


            // =========================
            // 모든 입력 완료
            // =========================

            var formSection =
                document.querySelector(".request-form-section");


            // =========================
            // 1. REQUEST RECEIVED
            // =========================

            formSection.innerHTML = `
                <div class="request-response">
                    <p>의뢰가 접수되었습니다.</p>
                </div>
            `;


            // =========================
            // 2. PROCESSING
            // =========================

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <div class="request-loading">

                            <p>의뢰를 처리하고 있습니다...</p>

                            <div class="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    `;

                }

            }, 2500);


            // =========================
            // 3. REQUEST CONFIRMED
            // =========================

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <p>
                            의뢰가 확인되었습니다.
                        </p>
                    `;

                }

            }, 6500);


            // =========================
            // 4. VERIFYING
            // =========================

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <div class="request-loading">

                            <p>확인 중입니다...</p>

                            <div class="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    `;

                }

            }, 9000);


            // =========================
            // 5. PERSON IDENTIFIED
            // =========================

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <p>
                            요청하신 대상의 신원을 확인했습니다.
                        </p>
                    `;

                }

            }, 12000);


            // =========================
            // 6. REDACTED
            // =========================

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <p>
                            ████ ████
                        </p>
                    `;

                }

            }, 14000);
            
            setTimeout(function () {
                var response =
                    document.querySelector(".request-response");

                if (response) {
                    response.innerHTML = "";
                }
            }, 16500);

        });

    }


    // =========================
    // INTERNAL ACCESS LOG TIME
    // =========================

    var logTimes =
        document.querySelectorAll(".log-time");

    var hiddenLog =
        document.querySelector("#hiddenLog");

    if (logTimes.length > 0) {

        function getCurrentTime() {

            var now = new Date();

            var year =
                now.getFullYear();

            var month =
                String(now.getMonth() + 1).padStart(2, "0");

            var day =
                String(now.getDate()).padStart(2, "0");

            var hours =
                String(now.getHours()).padStart(2, "0");

            var minutes =
                String(now.getMinutes()).padStart(2, "0");

            return (
                year +
                "." +
                month +
                "." +
                day +
                " " +
                hours +
                ":" +
                minutes
            );

        }


        // 페이지에 들어온 실제 시간

        var visitTime =
            getCurrentTime();


        if (logTimes[0]) {
            logTimes[0].textContent =
                visitTime;
        }

        if (logTimes[1]) {
            logTimes[1].textContent =
                visitTime;
        }

        if (logTimes[2]) {
            logTimes[2].textContent =
                visitTime;
        }


        // =========================
        // 7초 후 새로운 기록 추가
        // =========================

        if (hiddenLog) {

            setTimeout(function () {

                var hiddenTime =
                    hiddenLog.querySelector(".log-time");

                if (hiddenTime) {

                    hiddenTime.textContent =
                        getCurrentTime();

                }

                hiddenLog.classList.add("show");

            }, 7000);

        }

    }


    // =========================
    // INTERNAL ACCESS WARNING
    // =========================

    var accessWarning =
        document.querySelector("#accessWarning");

    var warningConfirm =
        document.querySelector("#warningConfirm");

    if (accessWarning && warningConfirm) {

        warningConfirm.addEventListener("click", function () {

            accessWarning.classList.add("hide");

        });

    }

});


// =========================
// INTERNAL GLITCH SEQUENCE
// =========================

document.addEventListener("DOMContentLoaded", function () {

    var glitch =
        document.querySelector(".glitch-overlay");

    var resultText =
        document.querySelector("#resultText");


    // =========================
    // INTERNAL 페이지가 아니면 종료
    // =========================

    if (!glitch) {
        return;
    }


    // =========================
    // GLITCH FUNCTION
    // =========================

    function doGlitch() {

        glitch.classList.remove("active");

        document.body.classList.remove("screen-glitch");


        // 애니메이션 강제 재시작

        void glitch.offsetWidth;


        glitch.classList.add("active");

        document.body.classList.add("screen-glitch");


        // 글자도 순간적으로 깨짐

        if (resultText) {

            resultText.classList.add("text-glitch");

            setTimeout(function () {

                resultText.classList.remove("text-glitch");

            }, 350);

        }


        // 글리치 종료

        setTimeout(function () {

            glitch.classList.remove("active");

            document.body.classList.remove("screen-glitch");

        }, 350);

    }


    // =========================
    // 1차 글리치
    // =========================

    setTimeout(function () {

        doGlitch();

    }, 4000);


    // =========================
    // 2차 글리치
    // =========================

    setTimeout(function () {

        doGlitch();

    }, 12000);


    // =========================
    // INTERNAL 화면 암전 → HOME
    // =========================

    setTimeout(function () {

        // INTERNAL 재접속 방지

        sessionStorage.setItem(
            "internalBlocked",
            "true"
        );


        // 갑자기 화면 꺼짐

        document.body.classList.add(
            "page-blackout"
        );


        // 아주 짧은 암전 후 HOME

        setTimeout(function () {

            window.location.href =
                "index.html";

        }, 150);

    }, 16500);

});
