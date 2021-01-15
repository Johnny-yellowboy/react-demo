import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
// import ReactDom from 'react-dom';

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) => {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
};

const Complete = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
      <Aboutyou/>
    </div>
  );
};

class Aboutyou extends React.Component{
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isWhere:true
  //   }
  //   this.tochange = this.tochange.bind(this)
  // }
  state = {
    isWhere:true
  }
  a = '它'
  tochange = () => {
    console.log(this);
    this.setState({
      isWhere :!this.state.isWhere
    }) 
  }
  
  render() {
    console.log(this);
    return (
      <div onClick={this.tochange}>
        这是关于{this.a}的一句话,写在了{this.state.isWhere ? '办公室' : '家里'}
      </div>
    )
  }
  // tochange() {
  //   console.log(this);
  //   this.setState({
  //     isWhere :!this.state.isWhere
  //   })
  // }
}
export default Complete