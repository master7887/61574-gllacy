         var link = document.querySelector(".feedback-btn");
         var overlay = document.querySelector(".overlay");
         var popup = document.querySelector(".feedback");

         var close = popup.querySelector(".close");
         var form = popup.querySelector("form");
         var username = popup.querySelector("[name=name]");
         var email = popup.querySelector("[name=email]");
         var storage = localStorage.getItem("username");

         var subscribe = document.querySelector(".subscribe");
         var subscribe_form = subscribe.querySelector("form");
         var subscribe_email = subscribe.querySelector("[name=email]");
         var subscribe_storage = localStorage.getItem("subscribe_email");



         if (subscribe_storage) {
             subscribe_email.value = subscribe_storage;
         } 




         link.addEventListener("click", function (event) {
             event.preventDefault();
             popup.classList.add("show");
             popup.classList.add("animate");
             overlay.classList.add("show");

             if (storage) {
                 username.value = storage;
                 email.focus();
             } else {
                 username.focus();
             }

         });

         close.addEventListener("click", function (event) {
             event.preventDefault();
             popup.classList.remove("show");
             popup.classList.remove("animate");
             overlay.classList.remove("show");
             popup.classList.remove("modal-error");
         });


         overlay.addEventListener("click", function (event) {
             event.preventDefault();
             popup.classList.remove("show");
             popup.classList.remove("animate");
             overlay.classList.remove("show");
             popup.classList.remove("modal-error");
         });

         form.addEventListener("submit", function (event) {
             if (!username.value || !email.value) {
                 event.preventDefault();
                 popup.classList.remove("modal-error");
                 popup.offsetWidth = popup.offsetWidth;
                 popup.classList.add("modal-error");
             } else {
                 localStorage.setItem("username", username.value);
             }
         });

         window.addEventListener("keydown", function (event) {
             if (event.keyCode === 27) {
                 if (popup.classList.contains("show")) {
                     popup.classList.remove("show");
                     popup.classList.remove("animate");
                     overlay.classList.remove("show");
                     popup.classList.remove("modal-error");
                 }
             }
         });


         subscribe_form.addEventListener("submit", function (event) {
             if (!subscribe_email.value) {
                 event.preventDefault();
                 subscribe.classList.remove("modal-error");
                 subscribe.offsetWidth = subscribe.offsetWidth;
                 subscribe.classList.add("modal-error");
             } else {
                 localStorage.setItem("subscribe_email", subscribe_email.value);
             }
         });