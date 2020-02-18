$(document).ready(function(){
	let usd, eur, cny, jpy, aud		
	let exrateSess = $.exrateSess()
	
	let exchange_box =x=>{
		$('.form-calculator .amount-row .receive p').text(`${x.country}`)
		$('.form-calculator .amount-row .receive h3').text(`${x.cntcd}`)
		
		
		$.getScript($.js() + '/remit/remit_box.js')
		.done(()=>{
			remit_box.onCreate({ flag : 'exchange', cntcd : x.cntcd })
		})
	}
	
	$.getJSON(`${$.ctx()}/exrate/search/bdate/${exrateSess.bdate}`, d=>{
		$.each(d.exlist.reverse(), (i,j)=>{	
			switch (j.cntcd) {
			case 'USD':
				exrateSess.usd = usd = j.exrate
				break;
			case 'EUR':
				exrateSess.eur = eur = j.exrate
				break;
			case 'CNY':
				exrateSess.cny = cny = j.exrate
				break;
			case 'JPY':
				exrateSess.jpy = jpy = j.exrate
				break;
			case 'AUD':
				exrateSess.aud = aud = j.exrate
				break;
			}	
		})
		
		sessionStorage.setItem('exrateSess', JSON.stringify(exrateSess));
		
		$('#exchange_test_header b')
		.text(`환율 기준일 : ${exrateSess.bdate}`)
		
		common.total_amount_calc()
		
            $(".mapcontainer").mapael({
                map: {
                    name: "world_countries",
                    width : "100%",
                    defaultArea: {
                        attrs: {
                            stroke: "#fff",
                            "stroke-width": 1
                        },
                        text: {
                            attrs: {
                                cursor: "pointer",
                                "font-size": 10,
                                "font-weight" : "bold",
                                fill: "#99d9ea"	//000
                            },
                            attrsHover: {
                                animDuration: 0,
                                fill: "#616161",	//277dbc
                                "font-weight" : "bold"
                            }
                        },
                        eventHandlers: {
                            click: function (e, id, mapElem, textElem) {
                            	if(id === 'KR' || id === 'US' || id === 'JP' || id === 'CN' || id === 'AU' || id === 'DE'){
                            		$('#popup-exchange')
                        			.html(mypage_vue.exchange_popup())
                        			.show()
                        			
                        			$.getScript($.js() + '/mypage/exchange_test.js')
                        			.done(()=>{
                        				exchange_test.exchange_popup()
                        			})
                        			
                                	$('.form-calculator .amount-row .send')
                                	.css({ cursor : 'text',
                                		'background-image' : 'none'})
                                	$('.form-calculator .amount-row .send p').text(`대한민국`)
                        			$('.form-calculator .amount-row .send h3').text(`KRW`)
                        			$('#exchange_send_amount').val(1000000)
                        			
                            	}
                            	
                        		if(id === 'KR'){
                        			$('.form-calculator .amount-row .send')
                        			.css({ cursor : 'pointer',
                                		'background-image' : 'url(https://img.themoin.com/public/img/ic-currency.svg)'})
                        			$('.form-calculator .amount-row .send p').text(`미국`)
                        			$('.form-calculator .amount-row .send h3').text(`USD`)
                        			$('#exchange_send_amount').val(1000)
                            		exchange_box({country : '대한민국', cntcd : 'KRW', exrate : 1})
                            		exrateSess.cntcd = 'KRW'
                            	}
                            	else if(id === 'US'){
                            		exchange_box({country : '미국', cntcd : 'USD', exrate : usd})
                            		exrateSess.cntcd = 'USD'
                            	}
                            	else if(id === 'JP'){
                            		exchange_box({country : '일본', cntcd : 'JPY', exrate : jpy})
                            		exrateSess.cntcd = 'JPY'
                            	}
                            	else if(id === 'CN'){
                            		exchange_box({country : '중국', cntcd : 'CNY', exrate : cny})
                            		exrateSess.cntcd = 'CNY'
                            	}
                            	else if(id === 'AU'){
                            		exchange_box({country : '호주', cntcd : 'AUD', exrate : aud})
                            		exrateSess.cntcd = 'AUD'
                            	}
                            	else if(id === 'DE'){
                            		exchange_box({country : '유럽', cntcd : 'EUR', exrate : eur})
                            		exrateSess.cntcd = 'EUR'
                            	}
                            	sessionStorage.setItem('exrateSess', JSON.stringify(exrateSess));
                    			
                            }
                        }
                    }
                },
                legend: {
                    area: {
                        title: "Countries population",
                        slices: [
                            {
                                max: 500,
                                attrs: {
                                    fill: "#f26067"		// 6aafe1
                                },
                                label: "Less than 5 millions inhabitants"
                            },
                            {
                            	min: 500,
                                max: 5000000,
                                attrs: {
                                    fill: "#d3e7f5"		// d3e7f5
                                },
                                label: "Less than 5 millions inhabitants"
                            },
                            {
                                min: 5000000,
                                max: 10000000,
                                attrs: {
                                    fill: "#b9d9f0"	// b9d9f0
                                },
                                label: "Between 5 millions and 10 millions inhabitants"
                            },
                            {
                                min: 10000000,
                                max: 50000000,
                                attrs: {
                                    fill: "#9ccaeb"	//#9ccaeb
                                },
                                label: "Between 10 millions and 50 millions inhabitants",
                                clicked: true
                            },
                            {
                                min: 50000000,
                                attrs: {
                                    fill: "#77b6e3" //	77b6e3
                                },
                                label: "More than 50 millions inhabitants"
                            }
                        ]
                    }
                   
                },
                areas: {
                	  "KR": {
                		  "value": "400",
  					      text: {content: `대한민국 : 1 KRW`, attrs: {fill: "#000", "font-size": 20 }, 
  					      position : "top", "font-weight" : "bold", margin : {x : 80, y: 40}}	// 20 25
  					  },
                	  "US": {
                          "value": "400",
                          text: {content: `미국 : ${usd} USD`, attrs: {fill: "#000", "font-size": 20, }, 
       					  position : "left", "font-weight" : "bold", margin : {x : -180, y: 60}}	// {x : -300, y: -30}
                          
                      },
                      "JP": {
                          "value": "400",
                          text: {content: `일본 : ${jpy} JPY`, attrs: {fill: "#000", "font-size": 20, }, 
           				  position : "bottom", "font-weight" : "bold", margin : {x : 60, y: 0}}
                      },
                      "CN": {
                          "value": "400",
                          text: {content: `중국 : ${cny} CNY`, attrs: {fill: "#000", "font-size": 20, },
               				  position : "center", "font-weight" : "bold", margin : {x : 30, y: 70}}
                      },
                      "SG": {
                          "value": "40000"
                      },
                      "AU": {
                          "value": "400",
                          text: {content: `호주 : ${aud} AUD`, attrs: {fill: "#000", "font-size": 20, },
               				  position : "center", "font-weight" : "bold", margin : {x : 0, y: 60}}
                      },
                      "GB": {
                          "value": "40000"
                      },
                      "NP": {
                          "value": "50000"
                      },
                      "DE": {
                          "value": "400",
                          text: {content: `유럽(독일) : ${eur} EUR`, attrs: {fill: "#000", "font-size": 20, },
               				  position : "top", "font-weight" : "bold"}
                      },
                      "FR": {
                          "value": "40000"
                      },
                      "IT": {
                          "value": "40000"
                      },
                      "NL": {
                          "value": "40000"
                      },
                      "PT": {
                          "value": "40000"
                      },
                      "ES": {
                          "value": "40000"
                      },
                      "BE": {
                          "value": "40000"
                      },
                      "AF": {
                          "value": "35320445"
                      },
                      "ZA": {
                          "value": "50586757"
                      },
                      "AL": {
                          "value": "3215988"
                         
                      },
                      "DZ": {
                          "value": "35980193"
                      },
                      "AD": {
                          "value": "86165"
                      },
                      "AO": {
                          "value": "19618432"
                      },
                      "AG": {
                          "value": "89612"
                      },
                      "SA": {
                          "value": "28082541"
                      },
                      "AR": {
                          "value": "40764561"
                      },
                      "AM": {
                          "value": "3100236"
                      },
                      "AT": {
                          "value": "8419000"
                      },
                      "AZ": {
                          "value": "9168000"
                      },
                      "BS": {
                          "value": "347176"
                      },
                      "BH": {
                          "value": "1323535"
                      },
                      "BD": {
                          "value": "150493658"
                      },
                      "BB": {
                          "value": "273925"
                      },
                      "BZ": {
                          "value": "356600"
                      },
                      "BJ": {
                          "value": "9099922"
                      },
                      "BT": {
                          "value": "738267"
                      },
                      "BY": {
                          "value": "9473000"
                      },
                      "MM": {
                          "value": "48336763"
                      },
                      "BO": {
                          "value": "10088108"
                      },
                      "BA": {
                          "value": "3752228"
                      },
                      "BW": {
                          "value": "2030738"
                      },
                      "BR": {
                          "value": "196655014"
                      },
                      "BN": {
                          "value": "405938"
                      },
                      "BG": {
                          "value": "7476000"
                      },
                      "BF": {
                          "value": "16967845"
                      },
                      "BI": {
                          "value": "8575172"
                      },
                      "KH": {
                          "value": "14305183"
                      },
                      "CM": {
                          "value": "20030362"
                      },
                      "CA": {
                          "value": "34482779"
                      },
                      "CV": {
                          "value": "500585"
                      },
                      "CF": {
                          "value": "4486837"
                      },
                      "CL": {
                          "value": "17269525"
                      },
                      "CY": {
                          "value": "1116564"
                      },
                      "CO": {
                          "value": "46927125"
                      },
                      "KM": {
                          "value": "753943"
                      },
                      "CG": {
                          "value": "4139748"
                      },
                      "CD": {
                          "value": "67757577"
                      },
                      "KP": {
                          "value": "24451285"
                      },
                      "CR": {
                          "value": "4726575"
                      },
                      "CI": {
                          "value": "20152894"
                      },
                      "HR": {
                          "value": "4407000"
                      },
                      "CU": {
                          "value": "11253665"
                      },
                      "DK": {
                          "value": "5574000"
                      },
                      "DJ": {
                          "value": "905564"
                      },
                      "DM": {
                          "value": "67675"
                      },
                      "EG": {
                          "value": "82536770"
                      },
                      "AE": {
                          "value": "7890924"
                      },
                      "EC": {
                          "value": "14666055",
                      },
                      "ER": {
                          "value": "5415280"
                      },
                      "EE": {
                          "value": "1340000"
                      },
                      "ET": {
                          "value": "84734262"
                      },
                      "FJ": {
                          "value": "868406"
                      },
                      "FI": {
                          "value": "5387000"
                      },
                      "GA": {
                          "value": "1534262"
                      },
                      "GM": {
                          "value": "1776103"
                      },
                      "GE": {
                          "value": "4486000"
                      },
                      "GH": {
                          "value": "24965816"
                      },
                      "GR": {
                          "value": "11304000"
                      },
                      "GD": {
                          "value": "104890"
                      },
                      "GT": {
                          "value": "14757316"
                      },
                      "GN": {
                          "value": "10221808"
                      },
                      "GQ": {
                          "value": "720213"
                      },
                      "GW": {
                          "value": "1547061"
                      },
                      "GY": {
                          "value": "756040"
                      },
                      "HT": {
                          "value": "10123787"
                      },
                      "HN": {
                          "value": "7754687"
                      },
                      "HU": {
                          "value": "9971000"
                      },
                      "JM": {
                          "value": "2709300"
                      },
                      "MH": {
                          "value": "54816"
                      },
                      "PW": {
                          "value": "20609"
                      },
                      "SB": {
                          "value": "552267"
                      },
                      "IN": {
                          "value": "1241491960"
                      },
                      "ID": {
                          "value": "242325638"
                      },
                      "JO": {
                          "value": "6181000"
                      },
                      "IR": {
                          "value": "74798599"
                      },
                      "IQ": {
                          "value": "32961959"
                      },
                      "IE": {
                          "value": "4487000"
                      },
                      "IS": {
                          "value": "319000"
                      },
                      "IL": {
                          "value": "7765700"
                      },
                      "KZ": {
                          "value": "16558459"
                      },
                      "KE": {
                          "value": "41609728"
                      },
                      "KG": {
                          "value": "5507000"
                      },
                      "KI": {
                          "value": "101093"
                      },
                      "KW": {
                          "value": "2818042"
                      },
                      "LA": {
                          "value": "6288037"
                      },
                      "LS": {
                          "value": "2193843"
                      },
                      "LV": {
                          "value": "2220000"
                      },
                      "LB": {
                          "value": "4259405"
                      },
                      "LR": {
                          "value": "4128572"
                      },
                      "LY": {
                          "value": "6422772"
                      },
                      "LI": {
                          "value": "36304"
                      },
                      "LT": {
                          "value": "3203000"
                      },
                      "LU": {
                          "value": "517000"
                      },
                      "MK": {
                          "value": "2063893"
                      },
                      "MG": {
                          "value": "21315135"
                      },
                      "MY": {
                          "value": "28859154"
                      },
                      "MW": {
                          "value": "15380888"
                      },
                      "MV": {
                          "value": "320081"
                      },
                      "ML": {
                          "value": "15839538"
                      },
                      "MT": {
                          "value": "419000"
                      },
                      "MA": {
                          "value": "3227297"
                      },
                      "MU": {
                          "value": "1286051"
                      },
                      "MR": {
                          "value": "3541540"
                      },
                      "MX": {
                          "value": "114793341"
                          
                      },
                      "FM": {
                          "value": "111542"
                      },
                      "MD": {
                          "value": "3559000"
                      },
                      "MC": {
                          "value": "35427"
                      },
                      "MN": {
                          "value": "2800114"
                      },
                      "ME": {
                          "value": "632261"
                      },
                      "MZ": {
                          "value": "23929708"
                      },
                      "NA": {
                          "value": "2324004"
                      },
                      "NI": {
                          "value": "5869859"
                      },
                      "NE": {
                          "value": "16068994"
                      },
                      "NG": {
                          "value": "162470737"
                      },
                      "NO": {
                          "value": "4952000"
                      },
                      "NZ": {
                          "value": "4405200"
                      },
                      "OM": {
                          "value": "2846145"
                      },
                      "UG": {
                          "value": "34509205"
                      },
                      "UZ": {
                          "value": "29341200"
                      },
                      "PK": {
                          "value": "176745364"
                      },
                      "PS": {
                          "value": "4019433"
                      },
                      "PA": {
                          "value": "3571185"
                      },
                      "PG": {
                          "value": "7013829"
                      },
                      "PY": {
                          "value": "6568290"
                      },
                      "PE": {
                          "value": "29399817"
                      },
                      "PH": {
                          "value": "94852030"
                      },
                      "PL": {
                          "value": "38216000"
                      },
                      "QA": {
                          "value": "1870041"
                      },
                      "DO": {
                          "value": "10056181"
                      },
                      "RO": {
                          "value": "21390000"
                      },
                      "RU": {
                          "value": "141930000"
                      },
                      "RW": {
                          "value": "10942950"
                      },
                      "KN": {
                          "value": "53051"
                      },
                      "SM": {
                          "value": "31735"
                      },
                      "VC": {
                          "value": "109365"
                      },
                      "LC": {
                          "value": "176000"
                      },
                      "SV": {
                          "value": "6227491"
                      },
                      "WS": {
                          "value": "183874"
                      },
                      "ST": {
                          "value": "168526"
                      },
                      "SN": {
                          "value": "12767556"
                      },
                      "RS": {
                          "value": "7261000"
                      },
                      "SC": {
                          "value": "86000"
                      },
                      "SL": {
                          "value": "5997486"
                      },
                      "SK": {
                          "value": "5440000"
                      },
                      "SI": {
                          "value": "2052000"
                      },
                      "SO": {
                          "value": "9556873"
                      },
                      "SD": {
                          "value": "34318385"
                      },
                      "SS": {
                          "value": "10314021"
                      },
                      "LK": {
                          "value": "20869000"
                      },
                      "SE": {
                          "value": "9453000"
                      },
                      "CH": {
                          "value": "7907000"
                      },
                      "SR": {
                          "value": "529419"
                      },
                      "SZ": {
                          "value": "1067773"
                      },
                      "SY": {
                          "value": "20820311"
                      },
                      "TJ": {
                          "value": "6976958"
                      },
                      "TZ": {
                          "value": "46218486"
                      },
                      "TD": {
                          "value": "11525496"
                      },
                      "CZ": {
                          "value": "10546000"
                      },
                      "TH": {
                          "value": "69518555"
                      },
                      "TL": {
                          "value": "1175880"
                      },
                      "TG": {
                          "value": "6154813"
                      },
                      "TO": {
                          "value": "104509"
                      },
                      "TT": {
                          "value": "1346350"
                      },
                      "TN": {
                          "value": "10673800"
                      },
                      "TM": {
                          "value": "5105301"
                      },
                      "TR": {
                          "value": "73639596"
                      },
                      "TV": {
                          "value": "9847"
                      },
                      "VU": {
                          "value": "245619"
                      },
                      "VE": {
                          "value": "29278000"
                      },
                      "VN": {
                          "value": "87840000"
                      },
                      "UA": {
                          "value": "45706100"
                      },
                      "UY": {
                          "value": "3368595"
                      },
                      "YE": {
                          "value": "24799880"
                      },
                      "ZM": {
                          "value": "13474959"
                      },
                      "ZW": {
                          "value": "12754378"
                      }
                      
                }
            })
		})
            var all_hidden = 'show',
                areas_hidden = 'show',
                plots_hidden = 'show';
            
            $(".mapcontainer").trigger('update', [{
                setLegendElemsState: all_hidden,
            }]);
            
        
        });