// typewriter.js
$(function () {
    $(".typewriter").typed({
        strings: ["Bayar SPP Tanpa Ribet", "Bebas Bayar Dimana Aja", "Bayar SPP Jadi Lebih Mudah", "Dapat Dibayar Kapan Aja"],

        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 1500,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when callback function
        callback: function () {},
        // starting callback before each string
        preStringTyped: function () {},
        // callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
});

// initialize AOS

  AOS.init();