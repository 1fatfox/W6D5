import React from 'react';



class Header extends React.Component {
  render() {
    const sel = this.props.selectedTabs;
    const head = this.props.docs.map((doc, idx) => {
      const title = doc.title;
      const show = idx === sel ? 'active' : '';

      return (
        <li
          key={idx}
          className= {show}
          onClick={() => this.props.chosenTab(idx)}>
          {title}
        </li>
      );
    });
    return (
      <ul className="t-head">
        {head}
      </ul>

    );
  }
}



class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    selectedTabs: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  render() {
    const doc = this.props.docs[this.state.selectedTabs];

    return (
      <div className="tabbed">
        <h1>Tabs</h1>
        <div className='tabs'>
          <Header
            selectedTabs={this.state.selectedTabs}
            chosenTab={this.selectTab}
            docs = {this.props.docs}>
          </Header>
          <div className = 'tab-stuff'>
            <article>
              {doc.content}
            </article>
          </div>
        </div>
      </div>
    );
  }

  selectTab(idx) {
    this.setState({selectedTabs: idx});
  }
}



export default Tabs;
