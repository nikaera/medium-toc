import React, { Component } from "react";
import MultiLevelTOCItem from "./MultiLevelTOCItem";
import "./TOC.css";

class MultiLevelTOC extends Component {
  render() {
    const nestedList = this.formatData(this.props.results)
    const createNestedListElement = (key, list) => {
      return (
        <ul key={key}>
        {list.map((l, i) => {
          if(Array.isArray(l)) {
            return createNestedListElement(`${key}-${i}`, l)
          } else {
            return <li key={`${key}-${i}-${l.id}`}><a href={l.link}>{l.title}</a></li>;
          }
        })}
        </ul>
      )
    }
    return (
      <div className="results">
        <h4>Table of Contents</h4>
        <ul>
          {createNestedListElement("root", nestedList)}
        </ul>
      </div>
    );
  }

  formatData(results) {
    const rootItem = new MultiLevelTOCItem({});
    rootItem.id = "root";

    var currentId = rootItem.id
    var currentTagNum = 1

    const parentIdQueue = [rootItem.id]
    const items = []

    for(const result of results) {
      if(currentTagNum < result.tagNum) {
        parentIdQueue.push(currentId)
      } else if(currentTagNum > result.tagNum) {
        const removeTimes = currentTagNum - result.tagNum
        for(var i = 0; i < removeTimes; i++) {
          parentIdQueue.pop()
        }
      }

      const parentId = parentIdQueue.slice(-1)[0]
      const item = new MultiLevelTOCItem(result, parentId)
      items.push(item)

      currentId = item.id
      currentTagNum = result.tagNum
    }

    return rootItem.nestedList(rootItem.id, items);
  }
}

export default MultiLevelTOC;
