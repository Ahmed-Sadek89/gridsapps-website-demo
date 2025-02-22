//= Components
import TagsInput from 'react-tagsinput';
//= Styles
import cls from './tagsInput.module.scss'
import 'react-tagsinput/react-tagsinput.css';

type Props = {
  placeholder?: string;
  name?: string;
  value: string[];
  onChange: (value: string[]) => void;
}

function TagsInputComponent({ placeholder, name, value, onChange }: Props) {
  return (
    <TagsInput inputProps={{ placeholder, name }} value={value} onChange={onChange} className={cls.tagsInput} />
  )
}

export default TagsInputComponent;
