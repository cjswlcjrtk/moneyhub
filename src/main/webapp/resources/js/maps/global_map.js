$(document).ready(function(){
//    $(function () {
            $(".mapcontainer").mapael({
                map: {
                    name: "world_countries",
                    defaultArea: {
                        attrs: {
                            stroke: "#fff",
                            "stroke-width": 1
                        },
                        attrsHover: {
                            animDuration: 0
                        },
                        text: {
                            attrs: {
                                cursor: "pointer",
                                "font-size": 10,
                                fill: "#000"
                            },
                            attrsHover: {
                                animDuration: 0
                            }
                        },
                        eventHandlers: {
                            click: function (e, id, mapElem, textElem) {
                                alert('동작 ' + id)
                                var newData = {
                                    'areas': {}
                                };
                                if (mapElem.originalAttrs.fill == "#5ba4ff") {
                                    newData.areas[id] = {
                                        attrs: {
                                            fill: "#0088db"
                                        }
                                    };
                                } else {
                                    newData.areas[id] = {
                                        attrs: {
                                            fill: "#5ba4ff"
                                        }
                                    };
                                }
                                $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            }
                        }
                    }
                },
                areas: {
                    "KR": {
                        text: {
                            content: "dblclick",
                            position: "top"
                        },
                        attrs: {
                            fill: "#0088db"
                        },
                        tooltip: {
                            content: "Finistère (29)"
                        },
                        eventHandlers: {
                            click: function () {
                            },
                            dblclick: function (e, id, mapElem, textElem) {
                                var newData = {
                                    'areas': {}
                                };
                                if (mapElem.originalAttrs.fill == "#5ba4ff") {
                                    newData.areas[id] = {
                                        attrs: {
                                            fill: "#0088db"
                                        }
                                    };
                                } else {
                                    newData.areas[id] = {
                                        attrs: {
                                            fill: "#5ba4ff"
                                        }
                                    };
                                }
                                $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                            }
                        }
                    }
                },
                legend: {
                    area: {
                        title: "Countries population",
                        slices: [
                            {
                                max: 5000000,
                                attrs: {
                                    fill: "#6aafe1"
                                },
                                label: "Less than 5 millions inhabitants"
                            },
                            {
                                min: 5000000,
                                max: 10000000,
                                attrs: {
                                    fill: "#459bd9"
                                },
                                label: "Between 5 millions and 10 millions inhabitants"
                            },
                            {
                                min: 10000000,
                                max: 50000000,
                                attrs: {
                                    fill: "#2579b5"
                                },
                                label: "Between 10 millions and 50 millions inhabitants",
                                clicked: true
                            },
                            {
                                min: 50000000,
                                attrs: {
                                    fill: "#1a527b"
                                },
                                label: "More than 50 millions inhabitants"
                            }
                        ]
                    }
                   /* plot: {
                        title: "Cities population",
                        slices: [
                            {
                                max: 500000,
                                attrs: {
                                    fill: "#f99200"
                                },
                                attrsHover: {
                                    transform: "s1.5",
                                    "stroke-width": 1
                                },
                                label: "less than 500 000 inhabitants",
                                size: 10
                            },
                            {
                                min: 500000,
                                max: 1000000,
                                attrs: {
                                    fill: "#f99200"
                                },
                                attrsHover: {
                                    transform: "s1.5",
                                    "stroke-width": 1
                                },
                                label: "Between 500 000 and 1 million inhabitants",
                                size: 20
                            },
                            {
                                min: 1000000,
                                attrs: {
                                    fill: "#f99200"
                                },
                                attrsHover: {
                                    transform: "s1.5",
                                    "stroke-width": 1
                                },
                                label: "More than 1 million inhabitants",
                                size: 30,
                                clicked: true
                            }
                        ]
                    }*/
                },
                plots: {
                    'Korea' : {
                        latitude: 37.54,
                        longitude: 126.99,
                        value: 500000000,
                        tooltip: {content: "대한민국 - 1 KRW"},
                		text: {content: "대한민국 - 1 KRW", attrs: {fill: "#3dccd6" }, 
                			position : "top", "font-weight" : "bold"}
                    },
                    'paris': {
                        latitude: 48.86,
                        longitude: 2.3444,
                        value: 500000000,
                        tooltip: {content: "Paris<br />Population: 500000000"}
                    },
                    'newyork': {
                        latitude: 40.667,
                        longitude: -73.833,
                        value: 200001,
                        tooltip: {content: "New york<br />Population: 200001"}
                    },
                    'sydney': {
                        latitude: -33.917,
                        longitude: 151.167,
                        value: 600000,
                        tooltip: {content: "Sydney<br />Population: 600000"}
                    },
                    'brasilia': {
                        latitude: -15.781682,
                        longitude: -47.924195,
                        value: 200000001,
                        tooltip: {content: "Brasilia<br />Population: 200000001"}
                    },
                    'tokyo': {
                        latitude: 35.687418,
                        longitude: 139.692306,
                        value: 200001,
                        tooltip: {content: "Tokyo<br />Population: 200001"}
                    }
                },
                areas: {
                	  "KR": {
  					    "value": "49779000",
  					    "href": "#",
  					    "tooltip": {
  					        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span><br \/>Population : 49779000"
  					      }
  					  },
                	  "US": {
                          "value": "311591917",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">United States<\/span><br \/>Population : 311591917"
                          }
                      },
                      "JP": {
                          "value": "127817277",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Japan<\/span><br \/>Population : 127817277"
                          }
                      },
                      "CN": {
                          "value": "1344130000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>Population : 1344130000"
                          }
                      },
                      "SG": {
                          "value": "5183700",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Singapore<\/span><br \/>Population : 5183700"
                          }
                      },
                      "AU": {
                          "value": "22620600",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>Population : 22620600"
                          }
                      },
                      "GB": {
                          "value": "62641000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">United Kingdom<\/span><br \/>Population : 62641000"
                          }
                      },
                      "NP": {
                          "value": "30485798",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Nepal<\/span><br \/>Population : 30485798"
                          }
                      },
                      "DE": {
                          "value": "81726000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>Population : 81726000"
                          }
                      },
                      "FR": {
                          "value": "65436552",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">France<\/span><br \/>Population : 65436552"
                          }
                      },
                      "IT": {
                          "value": "60770000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Italy<\/span><br \/>Population : 60770000"
                          }
                      },
                      "NL": {
                          "value": "16696000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Netherlands<\/span><br \/>Population : 16696000"
                          }
                      },
                      "PT": {
                          "value": "10637000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Portugal<\/span><br \/>Population : 10637000"
                          }
                      },
                      "ES": {
                          "value": "46235000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Spain<\/span><br \/>Population : 46235000"
                          }
                      },
                      "BE": {
                          "value": "11008000",
                          "href": "#",
                          "tooltip": {
                              "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>Population : 11008000"
                          }
                      }
                }
            });

            var all_hidden = 'show',
                areas_hidden = 'show',
                plots_hidden = 'show';
            
            $(".mapcontainer").trigger('update', [{
                setLegendElemsState: all_hidden,
                animDuration: 1000
            }]);
            
            $('#button-all').on('click', function () {
                all_hidden = (all_hidden == 'show') ? 'hide' : 'show';

                $(".mapcontainer").trigger('update', [{
                        setLegendElemsState: all_hidden,
                        animDuration: 1000
                    }]);
            });
            $('#button-areas').on('click', function () {
                areas_hidden = (areas_hidden == 'show') ? 'hide' : 'show';

                $(".mapcontainer").trigger('update', [{
                        setLegendElemsState: {"areaLegend": areas_hidden},
                        animDuration: 1000
                    }]);
            });
            $('#button-plots').on('click', function () {
                plots_hidden = (plots_hidden == 'show') ? 'hide' : 'show';

                $(".mapcontainer").trigger('update', [{
                        setLegendElemsState: {"plotLegend": plots_hidden},
                        animDuration: 1000
                    }]);
            });
        });