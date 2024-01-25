import { forwardRef, useImperativeHandle, useState } from "react";

const ListComponent = forwardRef((props, ref) => {
  const [list, setList] = useState({
    low_priority: [],
    medium_priority: [],
    high_priority: [],
  });

  useImperativeHandle(ref, () => ({
    list,
    setList,
  }))

  return (
    <div className="d-flex mt-4 ms-2">
      <div className="col-4 p-3" style={{backgroundColor: 'pink'}}>
        <strong>Düşük Öncelik</strong>
        {list.low_priority.map(item => {
          return (
            <div>
              <span>- {item.text}</span>
            </div>
          )
        })}
      </div>

      <div className="col-4 p-3 ms-2" style={{backgroundColor: 'pink'}}>
      <strong>Düşük Öncelik</strong>
        {list.medium_priority.map(item => {
          return (
            <div>
              <span>- {item.text}</span>
            </div>
          )
        })}
      </div>

      <div className="col-4 p-3 ms-2" style={{backgroundColor: 'pink'}}>
      <strong>Düşük Öncelik</strong>
        {list.high_priority.map(item => {
          return (
            <div>
              <span>- {item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
});

export default ListComponent;