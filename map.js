
            document.addEventListener("DOMContentLoaded", (event) => {
                

                const pins = document.querySelectorAll(".pin");
                pins.forEach((element) => {
                    element.addEventListener("mouseover", function (e) {
                        element.setAttributeNS(null, "r", 12);
                        const map = document.getElementById("map");
                        map.insertAdjacentHTML(
                            "beforeend",
                            '<div id="popover-' +
                                element.id +
                                '" class="popover" style="left:' +
                                (e.offsetX + 20) +
                                "px; top:" +
                                e.offsetY +
                                "px" +
                                '"><div class="row row1"><div class="column column-location">' +
                                locations[element.id].location +
                                '</div><div class="column col-temp"><p>Annual Average <span>' +
                                locations[element.id].annualAvg +
                                " °F</span></p></div></div>" +
                                '<div class="row row2">' +
                                '<div class="col1 column">' +
                                '<img src="https://cdn.prod.website-files.com/62f23c1c295fa128efe69c09/673de00928bbeceb500a2631_icon1.png" class="icon"/>' +
                                '<p class="popup_title">' +
                                locations[element.id].mPUE +
                                "</p>" +
                                '<p class="popup_legend">mPUE</p>' +
                                '<p class="popup_legend2">(Annualized)</p>' +
                                "</div>" +
                                '<div class="col1 column">' +
                                '<img src="https://cdn.prod.website-files.com/62f23c1c295fa128efe69c09/673de0270faba15b52a5d673_icon2.png" class="icon"/>' +
                                '<p class="popup_title">' +
                                locations[element.id].WUE +
                                "</p>" +
                                '<p class="popup_legend">WUE</p>' +
                                '<p class="popup_legend2">(Gallons/kWh)</p>' +
                                "</div>" +
                                '<div class="col1 column">' +
                                '<img src="https://cdn.prod.website-files.com/62f23c1c295fa128efe69c09/673de050d894b356a703d769_ic3.png" class="icon"/>' +
                                '<p class="popup_title">' +
                                locations[element.id].freeCooling +
                                "</p>" +
                                '<p class="popup_legend">Free Cooling</p>' +
                                '<p class="popup_legend2">(Annualized hours/year)</p>' +
                                "</div>",
                        );
                    });
                    element.addEventListener("mouseout", function () {
                        element.setAttributeNS(null, "r", 9);
                        const elem = document.getElementById(
                            "popover-" + element.id,
                        );
                        // console.log(elem);
                        if (elem != undefined) {
                            elem.remove();
                        }
                    });
                });
            });

