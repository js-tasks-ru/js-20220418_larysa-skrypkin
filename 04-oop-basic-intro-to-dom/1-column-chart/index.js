const noop = () => {};
const chartHeight = 50;
export default class ColumnChart {
  constructor({ data = [], label = '', value = null, link = '', formatHeading = noop} = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.formatHeading = formatHeading;
    this.render();
  }

  update(array) {
    this.data = array;
    this.render();
  }

  getMarkup() {
    let res = '';
    const max = Math.max(...this.data);
    this.data.forEach(item => {
      const scale = item / max;
      const percent = scale * 100;
      const value = (scale * chartHeight).toFixed(0);
      res += ` <div style="--value: ${value}" data-tooltip="${percent}%"></div>`;
    });
    return res;
  }

  
  getTemplate() {
    this.linkClass = this.link ? "column-chart__link" : "link-disabled";
    this.number = this.label === 'sales' ? `$${this.value}` : `${this.value}`;
    this.container = this.data.length > 0 ? "" : `column-chart_loading`;
 
    return `
      <div class="column-chart" style="--chart-height: ${chartHeight}">
      <div class="column-chart__title">Total ${this.label}
      <a class=${this.linkClass}>View all</a>
      </div>
      <div class=${this.container}>
           <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.number}</div>
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
