import { useState, forwardRef, useImperativeHandle } from "react";

const InputsComponent = forwardRef((props, ref) => {

  const {listRef} = props;

  const [state, setState] = useState({
    text: null,
    priority: null,
  });

  useImperativeHandle(ref, () => ({
    onChangeState,
  }));

  const onChangeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    })
  };

  const onClickButton = () => {
    switch (state.priority) {
      case "1":
        listRef.current.setList({
          ...listRef.current.list,
          low_priority: [
            ...listRef.current.list.low_priority,
            state
          ]
        })
        break;
      case "2":
        listRef.current.setList({
          ...listRef.current.list,
          medium_priority: [
            ...listRef.current.list.medium_priority,
            state
          ]
        })
        break;
      case "3":
        listRef.current.setList({
          ...listRef.current.list,
          high_priority: [
            ...listRef.current.list.high_priority,
            state
          ]
        })
        break;
      default:
        break;
    }

    setState({
      text: null,
      priority: null,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="text" aria-label="text" aria-describedby="basic-addon1" value={state.text || ''} onChange={element => onChangeState('text', element.target.value)} />
      </div>
      <div class="dropdown ms-3">
        <select onChange={element => onChangeState('priority', element.target.value)} class="form-select" aria-label="Default select example">
        <option selected>Seçiniz</option>
          <option value="1">Düşük Öncelik</option>
          <option value="2">Orta Öncelik</option>
          <option value="3">Yüksek Öncelik</option>
        </select>
      </div>
      <button onClick={onClickButton} type="button" class="btn btn-primary ms-3">Kaydet</button>
    </div>
  );
});

export default InputsComponent;