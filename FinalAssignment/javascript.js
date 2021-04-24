
'use strict'

//https://docs.google.com/spreadsheets/d/1qOkzboeuNCjFSpXZdW8aeAYeoMUgFid0E7l7yUgnCbQ/edit?usp=sharing

Highcharts.data({
  googleSpreadsheetKey: '1qOkzboeuNCjFSpXZdW8aeAYeoMUgFid0E7l7yUgnCbQ',

    // Custom handler when the spreadsheet is parsed
    parsed: function (columns) {

        // Read the columns into the data array
        var data = [];
        Highcharts.each(columns[1], function (code, i) {
            data.push({
                code: code.toUpperCase(),
                value: parseFloat(columns[4][i]),
                percentageofpop: columns[3][i],
                firstchange: columns[100][i],
                secondchange: columns[101][i],
                thirdchange: columns[102][i],
                fourthchange: columns[103][i],
                fifthchange: columns[104][i],
                one: columns[95][i],
                two: columns[96][i],
                three: columns[97][i],
                four: columns[98][i],
                five: columns[99][i],
                name: columns[0][i]
            });
        });
        // Initiate the chart
        Highcharts.mapChart('container1', {
            chart: {
                map: 'custom/world',
                borderWidth: 1
            },

            colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
                'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'],

            title: {
                text: 'Covid-19 Cases by Country'
            },

            mapNavigation: {
                enabled: true
            },

            legend: {
                title: {
                    text: 'Number of Infected Individuals',
                    style: {
                        color: ( // theme
                            Highcharts.defaultOptions &&
                            Highcharts.defaultOptions.legend &&
                            Highcharts.defaultOptions.legend.title &&
                            Highcharts.defaultOptions.legend.title.style &&
                            Highcharts.defaultOptions.legend.title.style.color
                        ) || 'black'
                    }
                },
                align: 'left',
                verticalAlign: 'bottom',
                floating: true,
                layout: 'vertical',
                valueDecimals: 0,
                backgroundColor: ( // theme
                    Highcharts.defaultOptions &&
                    Highcharts.defaultOptions.legend &&
                    Highcharts.defaultOptions.legend.backgroundColor
                ) || 'rgba(255, 255, 255, 0.85)',
                symbolRadius: 0,
                symbolHeight: 14
            },

            colorAxis: {
                dataClasses: [{
                    to: 100
                }, {
                    from: 100,
                    to: 500
                }, {
                    from: 500,
                    to: 1000
                }, {
                    from: 1000,
                    to: 5000
                }, {
                    from: 5000,
                    to: 10000
                }, {
                    from: 10000,
                    to: 50000
                }, {
                    from: 50000
                }]
            },

            plotOptions: {
            series: {
                point: {
                    events: {
                        select: function () {
                            document.querySelector('#container2').setAttribute('style','visibility:visible;');
                            document.querySelector('#container2 h4').innerHTML = this.name;
                            document.querySelector('#container2 i20').innerHTML = this.value;
                            document.querySelector('#container2 i22').innerHTML = this.percentageofpop+'%';
                            document.querySelector('#container2 i5').innerHTML = this.fifthchange+'%';
                            document.querySelector('#container2 i8').innerHTML = this.fourthchange+'%';
                            document.querySelector('#container2 i11').innerHTML = this.thirdchange+'%';
                            document.querySelector('#container2 i14').innerHTML = this.secondchange+'%';
                            document.querySelector('#container2 i17').innerHTML = this.firstchange+'%';

                            document.querySelector('#container2 i4').innerHTML = this.five;
                            document.querySelector('#container2 i7').innerHTML = this.four;
                            document.querySelector('#container2 i10').innerHTML = this.three;
                            document.querySelector('#container2 i13').innerHTML = this.two;
                            document.querySelector('#container2 i16').innerHTML = this.one;
                            document.querySelector('#container3').setAttribute('style','visibility:visible;');

                            document.querySelector('#container3 i18').innerHTML = this.name;

                            document.querySelector("#container3 .news1").innerHTML=""
                            document.querySelector("#container3 .news2").innerHTML=""
                            document.querySelector("#container3 .news3").innerHTML=""
                            

                            const apiKey='e86840831f1946549026cefc256243a9';
                            //let url= `https://newsapi.org/v2/everything?q=${this.name}AND("Covid-19"OR"Corona"OR"corona"OR"COVID-19")&from=2021-03-24&to=2021-04-24&sortBy=relevancy&pageSize=3&apiKey=${apiKey}`;
                            //let url= `https://newsapi.org/v2/everything?q="${this.name}"AND("Covid-19"OR"Corona"OR"corona"OR"COVID-19"OR"Pandemic"OR"Lockdown"OR"pandemic")&from=2021-03-24&to=2021-04-24&sortBy=relevancy&pageSize=3&apiKey=${apiKey}`;
                            let url= `https://newsapi.org/v2/everything?qInTitle="${this.name}"AND("Covid-19"OR"Corona"OR"corona"OR"COVID-19"OR"Pandemic"OR"Lockdown"OR"pandemic")&from=2021-03-24&to=2021-04-24&sortBy=relevancy&pageSize=3&apiKey=${apiKey}`;
                            fetch(url).then((res)=>{
                                return res.json()}).then((data)=>{
                                    var i=1;
                                    if (data.totalResults!=0)
                                    {data.articles.forEach(article=>{
                                        //let l1=document.createElement('li');
                                        document.querySelector("#container3 .news"+i).setAttribute('style','visibility:visible;');
                                        if (article.urlToImage!=null)
                                        {let img=document.createElement('img');
                                        img.setAttribute('style',`width:100%;height:100px;'align:"center";`);
                                        img.setAttribute("src",`${article.urlToImage}`);
                                        img.setAttribute("alt","Image");
                                        document.querySelector("#container3 .news"+i).appendChild(img);}
                                        let h4=document.createElement('h4');
                                        h4.innerHTML=article.title;
                                        h4.setAttribute('style', 'margin-left:6px;');
                                        let p=document.createElement('p');
                                        p.innerHTML=article.description;
                                        p.setAttribute('style', 'margin-left:6px;');
                                        let p1=document.createElement('p1');
                                        p1.innerHTML=article.source.name;
                                        p1.setAttribute('style', 'margin-left:6px;');
                                        let br=document.createElement('br');
                                        let br1=document.createElement('br');
                                        let br2=document.createElement('br');
                                        let br3=document.createElement('br');
                                        let p2=document.createElement('p2');
                                        p2.innerHTML=article.publishedAt.replace("T"," ").replace("Z"," ");
                                        p2.setAttribute('style', 'margin-left:6px;');
                                        let a=document.createElement('a');
                                        a.setAttribute('href',article.url);
                                        a.setAttribute('target','_blank');
                                        a.textContent="View Full Article";
                                        a.setAttribute('style', 'margin-left:6px;');
                                        //l1.appendChild(a);
                                        
                                        document.querySelector("#container3 .news"+i).appendChild(h4);
                                        document.querySelector("#container3 .news"+i).appendChild(p);
                                        document.querySelector("#container3 .news"+i).appendChild(p1);
                                        document.querySelector("#container3 .news"+i).appendChild(br);
                                        document.querySelector("#container3 .news"+i).appendChild(br1);
                                        document.querySelector("#container3 .news"+i).appendChild(a);
                                        document.querySelector("#container3 .news"+i).appendChild(br2);
                                        document.querySelector("#container3 .news"+i).appendChild(br3);
                                        document.querySelector("#container3 .news"+i).appendChild(p2);
                                        i=i+1;



                                    })
                                    }
                                    else{
                                        document.querySelector("#container3 .news1").setAttribute('style','visibility:visible;');
                                        document.querySelector("#container3 .news2").setAttribute('style','visibility:hidden;');
                                        document.querySelector("#container3 .news3").setAttribute('style','visibility:hidden;');
                                    let h4=document.createElement('h4');
                                        h4.innerHTML="No Latest News";
                                        //h4.setAttribute('style', 'margin-left:6px;');
                                        document.querySelector("#container3 .news1").appendChild(h4);

                                    }
                                    
                                    console.log(data)
                                })

                            
   
                        },
                        

                        
                    }
                }
            }
        },

        

            series: [{
                data: data,
                joinBy: ['iso-a3', 'code'],
                animation: true,
                name: 'Total Infected Individuals',
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                tooltip: {
                    //valueSuffix: ' individuals'
                    footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
                },
                shadow: false
            }]
            
        });
        

        

    
        
    },
    error: function () {
        document.getElementById('container1').innerHTML = '<div class="loading">' +
            '<i class="icon-frown icon-large"></i> ' +
            'Error loading data' +
            '</div>';
    }
    

    
});















