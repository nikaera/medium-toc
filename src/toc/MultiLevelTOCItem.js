class MultiLevelTOCItem {
    constructor(result, parentId) {
        this.id = result.headingCode;
        this.parentId = parentId;
        this.title = result.title
        this.link = result.link
    }

    childrenOf(targetId, items) {
        const children = []
        for(const item of items) {
            if (item.parentId === targetId) {
                children.push(item)
            }
        }
        return children
    }
}
MultiLevelTOCItem.prototype.nestedList = function(id, items) {
    const children = this.childrenOf(id, items)
    return children.map((child) => {
        const childItems = this.childrenOf(child.id, items)
        if(childItems.length > 0) {
            return this.nestedList(child.id, items)
        }
        return child
    })
}

export default MultiLevelTOCItem;
