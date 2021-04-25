# AssignmentSE
Contains the Completed Assignment files

Error occuring in displaying news results can be resolved by changing the dates in 'from=2021-03-28&to=2021-04-24' in url in javascript.js ( Line no :132) . 
Since the BASIC plan only allows one month period of searches.
Your API Key also needs to be entered and replaced with the current one (Line no :129) in javascript.js

```javascript
let url= `https://newsapi.org/v2/everything?qInTitle="${this.name}"AND("Covid-19"OR"Corona"OR"corona"OR"COVID-19"OR"Pandemic"OR"Lockdown"OR"pandemic")&from=2021-03-28&to=2021-04-24&sortBy=relevancy&pageSize=3&apiKey=${apiKey}`;

```
