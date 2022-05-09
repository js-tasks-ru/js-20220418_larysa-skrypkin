const defaultFormatHeading = value => value;

export default class ColumnChart {
 chartHeight = 50;
 element = document.querySelector('.column-chart');
 constructor({ data = [], label = '', value = null, link = '', formatHeading = defaultFormatHeading} = {}) {
   this.data = data;
   this.label = label;
   this.value = value;
   this.link = link;
   this.value = formatHeading(value);
   this.render();
 }

 update(data) {
   this.data = data;
   const elem = this.element.querySelector('.column-chart__chart');
   const emptyChartElem = this.element.querySelector('.column-chart_loading');
   if (emptyChartElem && this.data.length > 0) {
     emptyChartElem.classList.replace("column-chart_loading", "container");
   }
   if (!emptyChartElem && this.data.length === 0) {
     const newElem = this.element.querySelector('.container');
     newElem.classList.replace("container", "column-chart_loading");
   }
   elem.innerHTML = this.getMarkup();
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
   const container = this.data.length > 0 ? "" : "column-chart_loading";

   return `
      <div class="column-chart" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">Total ${this.label}
      <a class=${linkClass}>View all</a>
      </div>
      <div class=${container}>
           <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
        ${this.getMarkup()}
        </div>
      </div>
      </div>
      </div>
     `;
 }

 render() {
   const element = document.createElement('div');
   element.innerHTML = this.getTemplate();
   this.element = element.firstElementChild;
 }
}
