import d from './dialogs.module.css'
import DialogsItem from './dilaogsItem/dialogsItem';
import Message from './messageItem/messageItem';

const Dialogs = (props) => {
  let dialogs =[
    {name: 1, id:1},
    {name: 2, id:2},
    {name: 3, id:3},
    {name: 4, id:4}
]
let message = [
  {message:'Привіт' },
  {message: 'Що робиш?'},
  {message: 'Як справи?'}
]
  const DialogItem = dialogs.map(d => <DialogsItem id ={d.id} name ={d.name}/>)
  const MessageItem = message.map(m => <Message message={m.message} />)
  return (
    <div className={d.dialogs}>
      <div>
            {DialogItem}
      </div>
      <div>
          {MessageItem}
      </div>
    </div>
  );
};
export default Dialogs;
