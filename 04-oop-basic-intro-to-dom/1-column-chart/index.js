const defaultFormatHeading = value => value;

export default class ColumnChart {
 chartHeight = 50;
 constructor({ data = [], label = '', value = null, link = '', formatHeading = defaultFormatHeading} = {}) {
   this.data = data;
   this.label = label;
   this.value = value;
   this.link = link;
   this.formatHeading = formatHeading;
   this.render();
 }

 update(data) {
   this.data = data;
   this.render();
 }


 getMarkup() {
   let res = '';
   const max = Math.max(...this.data);
   this.data.forEach(item => {
     const scale = this.chartHeight / max;
     const percent = (item / max * 100).toFixed(0);
     const value = String(Math.floor(item * scale));
     res += ` <div style="--value: ${value}" data-tooltip="${percent}%"></div>`;
   });
   return res;
 }


 getTemplate() {
   const linkClass = this.link ? "column-chart__link" : "link-disabled";
   const number = this.label === 'sales' ? `${this.formatHeading(this.value)}` : `${this.value}`;
   const container = this.data.length > 0 ? "" : "column-chart_loading";

   return `
      <div class="column-chart" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">Total ${this.label}
      <a class=${linkClass}>View all</a>
      </div>
      <div class=${container}>
           <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${number}</div>
        <div data-element="body" class="column-chart__chart">
        ${this.getMarkup()}
        </div>
      </div>
      </div>
      <div>
     `;
 }

 render() {
   const element = document.createElement('div');
   element.innerHTML = this.getTemplate();
   this.element = element.firstElementChild;
 }

}
