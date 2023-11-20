define(
    [
        'ko',
        'jquery',
        'uiComponent',
        'mage/url'
    ],
    function (ko, $, Component, url) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Movistar_Checkout/checkout/customCheckbox'
            },
            initObservable: function () {
                this._super()
                    .observe({
                        CheckVals1: ko.observable(false),
                        CheckVals2: ko.observable(false),
                        CheckVals3: ko.observable(false),
                        OpenModal1: ko.observable(false),
                        OpenModal2: ko.observable(false),
                        OpenModal3: ko.observable(false)
                    });
                self = this;
                function validateCheks() {
                    var checkValCheck = $('#checkterm1').is(':checked');
                    var checkVal2Check = $('#checkterm2').is(':checked');
                    var checkVal3Check = $('#checkterm3').is(':checked');
                    if (checkValCheck == true && checkVal2Check == true && checkVal3Check == true) {
                        $(':button').prop('disabled', false); // Disable all the buttons
                    }
                    else {
                        $(':button').prop('disabled', true); // Disable all the buttons
                    }
                }
                this.CheckVals1.subscribe(function (newValue) {
                    validateCheks();
                });
                this.CheckVals2.subscribe(function (newValue) {
                    validateCheks();
                });
                this.CheckVals3.subscribe(function (newValue) {
                    validateCheks();
                });
                this.OpenModal1.subscribe(function (newValue) {
                    console.log("Openengo modal # 1")
                    var display = $('#modal1-content').css('display');
                    if (display == 'none') {
                        $('#modal1-content').css('display', 'block');
                    }
                    else {
                        $('#modal1-content').css('display', 'none');
                    }

                });
                this.OpenModal2.subscribe(function (newValue) {
                    console.log("Openengo modal # 2")
                    var display = $('#modal2-content').css('display');
                    if (display == 'none') {
                        $('#modal2-content').css('display', 'block');
                    }
                    else {
                        $('#modal2-content').css('display', 'none');
                    }
                });
                this.OpenModal3.subscribe(function (newValue) {
                    console.log("Openengo modal # 3")
                    var display = $('#modal3-content').css('display');
                    if (display == 'none') {
                        $('#modal3-content').css('display', 'block');
                    }
                    else {
                        $('#modal3-content').css('display', 'none');
                    }
                });
                return this;
            }
        });
    }
);