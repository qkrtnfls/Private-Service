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

        }, 8000);

    }


    // =========================
    // REQUEST
    // =========================

    var requestForm = document.querySelector("#requestForm");

    if (requestForm) {

        requestForm.addEventListener("submit", function (event) {

            event.preventDefault();

            var formSection =
                document.querySelector(".request-form-section");


            // 1. REQUEST RECEIVED

            formSection.innerHTML = `
                <div class="request-response">
                    <p>REQUEST RECEIVED.</p>
                </div>
            `;


            // 2. PROCESSING

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <div class="request-loading">

                            <p>PROCESSING REQUEST...</p>

                            <div class="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    `;

                }

            }, 2500);


            // 3. REQUEST CONFIRMED

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <p>REQUEST CONFIRMED.</p>
                    `;

                }

            }, 6500);


            // 4. VERIFYING

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <div class="request-loading">

                            <p>VERIFYING...</p>

                            <div class="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>
                    `;

                }

            }, 9000);


            // 5. PERSON IDENTIFIED

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <p>WE HAVE IDENTIFIED THE PERSON YOU MENTIONED.</p>
                    `;

                }

            }, 12000);


            // 6. FINAL

            setTimeout(function () {

                var response =
                    document.querySelector(".request-response");

                if (response) {

                    response.innerHTML = `
                        <p>WE'LL HANDLE THE REST.</p>
                    `;

                }

            }, 16000);

        });

    }


    // =========================
    // INTERNAL ACCESS LOG TIME
    // =========================

    var logTimes = document.querySelectorAll(".log-time");
    var hiddenLog = document.querySelector("#hiddenLog");

    if (logTimes.length > 0) {

        function getCurrentTime() {

            var now = new Date();

            var year = now.getFullYear();

            var month = String(now.getMonth() + 1).padStart(2, "0");

            var day = String(now.getDate()).padStart(2, "0");

            var hours = String(now.getHours()).padStart(2, "0");

            var minutes = String(now.getMinutes()).padStart(2, "0");

            return year + "." + month + "." + day + " " + hours + ":" + minutes;

        }


        // 페이지에 들어온 실제 시간

        var visitTime = getCurrentTime();

        logTimes[0].textContent = visitTime;
        logTimes[1].textContent = visitTime;
        logTimes[2].textContent = visitTime;


        // 7초 후 새로운 기록 추가

        if (hiddenLog) {

            setTimeout(function () {

                hiddenLog.querySelector(".log-time").textContent =
                    getCurrentTime();

                hiddenLog.classList.add("show");

            }, 7000);

        }

    }

});