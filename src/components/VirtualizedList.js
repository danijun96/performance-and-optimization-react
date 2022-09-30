import faker from "faker";
import React from "react";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

// Generate some sample test data
const list = [];

for (let i = 0; i < 1000; i++) {
    list.push(faker.lorem.sentence());
}
console.log(list.length);

const RowRenderer = ({ index, style }) => (
    <div className="Row" style={style}>
        {list[index]}
    </div>
);

const listRowRenderer = ({ index, key, style }) => (
    <div className="Row" key={key} style={style}>
        {list[index]}
    </div>
);

const VirtualizedList = () => {
    // return (
    //     <>
    //         {list.map((li, index) => <RowRenderer index={index} key={index} />)}
    //     </>
    // )
    return (
        <WindowScroller>
            {({ height, isScrolling, registerChild, scrollTop }) => (
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <div ref={registerChild}>
                            <List
                                autoHeight
                                scrollTop={scrollTop}
                                width={width}
                                height={height}
                                rowHeight={40}
                                rowRenderer={listRowRenderer}
                                rowCount={list.length}
                            />
                        </div>
                    )}
                </AutoSizer>
            )}
        </WindowScroller>
    );
};

export default VirtualizedList;
