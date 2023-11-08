import './CSS/TodoItems.css';
import checkIcon from './Assets/check.svg';
import deleteIcon from './Assets/delete.svg';

const TodoItems = ({ no, text, display, setTodo }) => {
  const handleDone = () => {
    let data = JSON.parse(localStorage.getItem('todos'));
    const clickedItem = data[no];

    if (clickedItem.no === no) {
      if (data[no].display === '') {
        data[no].display = 'done';
      } else {
        data[no].display = '';
      }
    }
    setTodo(data);
  };

  const deleteTodo = () => {
    let data = JSON.parse(localStorage.getItem('todos'));
    const clickedItem = data[no];

    data = data.filter((item) => item.no !== no);

    data.forEach((item, index) => {
      item.no = index;
    });
    setTodo(data);
  };

  return (
    <div className={`todoitems ${display}`} id={`todo-${no}`}>
      <div className='todoitems-container'>
        <div onClick={handleDone} className='checkicon'>
          <img src={checkIcon} alt='check icon' id={no} />
        </div>
        <div className='todoitems-text'>{text}</div>
      </div>
      <img
        onClick={deleteTodo}
        src={deleteIcon}
        alt='check icon'
        className='deleteicon'
      />
    </div>
  );
};

export default TodoItems;
